import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Observable, Subject } from 'rxjs';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { SettingsService } from '../../settings.service';
import { ToastrService } from 'ngx-toastr';
import * as snippet from 'app/main/forms/form-elements/input-mask/input-mask.snippetcode';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

  public cpaName;
  public taskName;
  public estimatedHours;
  public checkProductive = "Productive";
  public checkBill = "Billable";
  public isEdit = false;
  public taskData: any;
  public TaskId: any;
  public cpaList = [];
  public isEditMeg = false;
  public selectBasicLoading = false;
  public OrgId;
  public selectMultiLimitedSelected = [];
  public _snippetCodeTime = snippet.snippetCodeTime;
  public contentHeader: object;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private _coreSidebarService: CoreSidebarService,
    private SettingsService: SettingsService,
    private _toastrService: ToastrService) {
    this.SettingsService.taskClickedEvent.subscribe((data: string) => {
      if (data == 'Edit') {
        this.isEdit = true;
        this.isEditMeg = true;
      } else {
        this.objectClear();
      }
      this.SettingsService.taskEditClickedEvent.subscribe((data: any) => {
        if (data) {
          this.taskData = data;
          if (typeof this.taskData == 'object') {
            this.TaskId = this.taskData?.TaskId;
            this.taskName = this.taskData?.TaskName;
            this.estimatedHours = this.taskData?.EstimatedDuration;
            this.checkProductive = this.taskData?.IsProductive;
            this.checkBill = this.taskData?.IsBillable;
            this.selectMultiLimitedSelected = this.taskData?.OrganizationList;
            if(this.selectMultiLimitedSelected && this.selectMultiLimitedSelected.length > 0){
              this.selectMultiLimitedSelected.forEach(data => {
                data['name'] = data.Label
                data['id'] = data.Value
              });
            }
            this.estimatedHours = this.toHoursAndMinutes(this.estimatedHours);
          }
        }
      })
    });
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  objectClear() {
    this.taskName = "",
    this.estimatedHours = "";
    this.cpaName = "";
    this.isEdit = false;
    this.TaskId = "";
    this.selectMultiLimitedSelected = []
  }

  radioChange(event) {
    if (event.target.value == 'Non-Productive') {
      this.checkBill = "Non-Billable"
    }
  }

  private selectBasicMethod() {
    this.selectBasicLoading = true;
    this.SettingsService.onCPAList.subscribe(response => {
      this.cpaList = response.ResponseData;
      this.cpaList.forEach(data => {
        data['name'] = data.Label;
        data['id'] = data.Value;
      })
      this.selectBasicLoading = false;
    });
  }

  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }

  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  async submit(form) {
    if (form.controls.estimatedHours.value == 0) {
      form.valid = false
    }
    var hms;
    let minute
    if (form.controls.estimatedHours.value && !this.isEdit) {
      hms = form.controls.estimatedHours.value;
      const hours = hms.slice(0, 2);
      const minutes = hms.slice(2, 4)
      minute = Number(hours) * 60 + Number(minutes) * 1;
    } else {
      hms = this.estimatedHours;
      let hmsre = hms.replace(':', '')
      const hours = hmsre.slice(0, 2);
      const minutes = hmsre.slice(2, 4);
      minute = Number(hours) * 60 + Number(minutes) * 1;
    }
    let cpaList = [];
    this.selectMultiLimitedSelected.forEach(d => {
      cpaList.push(d.id)
    });
    if (form.valid) {
      let json = {
        "TaskId": !this.isEdit ? 0 : this.TaskId,
        "OrganizationList": cpaList,
        "TaskName": form.controls.taskName.value,
        "EstimatedDuration": minute,
        "IsProductive": form.controls.checkProductive.value == "Productive" ? 1 : 0,
        "IsBillable": form.controls.checkBill.value == "Billable" ? 1 : 0,
        "IsDeleted": 0
      }
      this.blockUI.start('Loading...')
      let response = await this.SettingsService.addTask(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added Task', 'Success', {
                toastClass: 'toast ngx-toastr',closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update Task', 'Success', {
                toastClass: 'toast ngx-toastr', closeButton: true
              });
            }
            this.blockUI.stop()
          }, 1500);
        } else {
          this._toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr',closeButton: true
          });
          this.blockUI.stop()
        }
        form.resetForm();
        this.objectClear();
        this.toggleSidebar('add-task');
        this.SettingsService.getDataTableRowsTask(this.taskData.index, 10, null);
      });
    }
  }

  ngOnInit() {
    this.selectBasicMethod();
    this.SettingsService.getCPAListArray();
    this.SettingsService.onCPAList.subscribe(response => {
      this.cpaList = response.ResponseData
    });
    // content header
    this.contentHeader = {
      headerTitle: 'Select',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Select',
            isLink: false
          }
        ]
      }
    };
  }
}