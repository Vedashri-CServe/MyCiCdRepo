import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { from, Observable, Subject } from 'rxjs';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { SettingsService } from '../../settings.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.scss']
})
export class AddProcessComponent implements OnInit {

  public process;
  public subProcess;
  public activity;
  public estimatedHours;
  public checkProductive = "Productive";
  public checkBill = "Billable";
  public cpaName;
  public isEdit = false;
  public processData: any;
  public ProcessId: any;
  public isEditMeg = false;
  public selectBasicLoading = false;
  public totalactivity = [];
  public contentHeader: object;
  public itemToAdd = '';
  public estimatedHoursset; public isAddData = false;
  public processList = []; public processName: any;
  public ProcessParentId; public isShow = false 
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private SettingsService: SettingsService,
    private _toastrService: ToastrService
  ) {
    this.SettingsService.processClickedEvent.subscribe((data: string) => {
      if (data == 'Edit') {
        this.isEdit = true;
        this.isEditMeg = true;
        this.isShow = true;
        this.processName = '';
      } else {
        this.objectClear();
        this.isShow = false;
      }
      this.getProcessList()
      this.SettingsService.processEditClickedEvent.subscribe((data: any) => {
        if (data) {
          this.itemToAdd = '';
          this.processData = data;
          const activityArray = this.processData?.ActivityName;
          this.totalactivity = []
          if (activityArray && activityArray.length > 0) {
            activityArray.forEach((res) => {
              this.totalactivity.push(res)
            });
          }
          this.ProcessId = this.processData?.ProcessId;
          this.ProcessParentId = this.processData?.ProcessParentId
          this.process = this.processData?.ProcessName;
          this.processName = this.processData?.ProcessName;
          this.subProcess = this.processData?.SubProcessName;
          this.estimatedHours = this.processData?.EstimatedDuration;
          this.estimatedHoursset = this.processData?.EstimatedDuration;
          this.checkProductive = this.processData?.IsProductive;
          this.checkBill = this.processData?.IsBillable;
          this.estimatedHours = this.toHoursAndMinutes(this.estimatedHours);
        }
      })
    });
  }
  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }
  addFiled() {
    this.isShow = true;
    this.isAddData = true
  }
  changeFn(process){
    this.isShow = true;
    this.isAddData = false;
    this.ProcessParentId =process?.Value;
    this.processName = process?.Label;
   }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  addProcess() {
    let json = {
      "ProcessId": this.isAddData == true ? 0 : this.ProcessParentId,
      "ProcessName": this.processName
    }
    this.blockUI.start('Loading...')
    this.SettingsService.addPrcessName(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        this.getProcessList();
        this.isShow = false;
        this.processName = '';
        this.process = ""
        this.blockUI.stop();
        if(this.isAddData){
          this._toastrService.success('You have successfully added Process', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
        }else{
          this._toastrService.success('You have successfully update Process', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
        }
      } else {
        this._toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.blockUI.stop()
      }
    })
  }
  deleteProcess() {
    let json = {
      "ProcessId": this.ProcessParentId
    }
    this.blockUI.start('Loading...')
    this.SettingsService.deleteProcesswithSubProcess(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        this.getProcessList();
        this.isShow = false;
        this.processName = '';
        this.process = ""
        this._toastrService.success('You have successfully deleted Process', 'Success', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.toggleSidebar('add-process');
        this.SettingsService.getDataTableRowsProcess(this.processData.index, 10, null);
        this.blockUI.stop();
      } else {
        this._toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.blockUI.stop()
      }
    })
  }
  addItem(itemToAdd) {
    if (this.totalactivity.length == 0) {
      this.totalactivity.push({ value: itemToAdd });
      this.itemToAdd = '';
    } else if (this.totalactivity.findIndex(temp => temp.value == itemToAdd) == -1) {
      this.totalactivity.push({ value: itemToAdd });
      this.itemToAdd = '';
    } else {
      this._toastrService.error('Do not add same activity, please add another activity');
    }
  }
  deleteItem(id) {
    this.totalactivity.splice(id, 1);
  }
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }
  objectClear() {
    this.itemToAdd = '';
    this.process = "",
      this.subProcess = "",
      this.activity = "",
      this.totalactivity = [],
      this.checkProductive = "Productive";
    this.checkBill = "Billable";
    this.estimatedHours = "";
    this.isEdit = false;
    this.ProcessId = "";
  }
  radioChange(event) {
    if (event.target.value == 'Non-Productive') {
      this.checkBill = "Non-Billable"
    }
  }
  getProcessList() {
    let res = this.SettingsService.getProcessListMaster().subscribe((res: any) => {
      if (res.ResponseData) {
        this.processList = res.ResponseData;
        this.processList.forEach(data => {
          data['name'] = data.Label;
          data['id'] = data.Value;
        })
      }
    })
  }
  async submit(form) {
    if (form.controls.estimatedHours.value == 0) {
      form.valid = false
    }
    if (form.controls.process.value.Value !== undefined) {
      this.ProcessParentId = form.controls.process.value.Value
    } else {
      this.ProcessParentId = this.ProcessParentId
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
    if (form.valid) {
      let json = {
        "ProcessId": !this.isEdit ? 0 : this.ProcessId,
        "ProcessName": form.controls.process.value.Label,
        "ProcessParentId": this.ProcessParentId,
        "SubProcessName": form.controls.subProcess.value,
        "ActivityName": this.totalactivity,
        "EstimatedDuration": minute,
        "IsProductive": form.controls.checkProductive.value == "Productive" ? 1 : 0,
        "IsBillable": form.controls.checkBill.value == "Billable" ? 1 : 0,
      }
      this.blockUI.start('Loading...')
      let response = await this.SettingsService.addProcess(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added Process', 'Success', {
                toastClass: 'toast ngx-toastr', closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update Process', 'Success', {
                toastClass: 'toast ngx-toastr', closeButton: true
              });
            }
            this.blockUI.stop()
          }, 1500);
        } else {
          this._toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
          this.blockUI.stop()
        }
        form.resetForm()
        this.objectClear();
        this.toggleSidebar('add-process');
        this.SettingsService.getDataTableRowsProcess(this.processData.index, 10, null);
      });
    }
  }
  ngOnInit() {
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