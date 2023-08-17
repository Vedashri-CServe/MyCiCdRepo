import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Observable } from 'rxjs';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { from } from 'rxjs/internal/observable/from';
import { SettingsService } from "app/main/settings/settings.service"
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html'
})
export class AddStatusComponent implements OnInit {
  public statusName;
  public isEdit = false;
  public statusId;
  public isEditMeg = false;
  public statusData;
  public contentHeader: object;
  // 1st plugin..........ngx-color-picker
  title = 'colorPicker';
  color: string = '#000'
  arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(145,168,14)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(21,1,105,1)',
    color6: '#ddd',
    color7: '#987A1C',
    color8: '#efb685'
  };
  selectedColor: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private _coreSidebarService: CoreSidebarService, private SettingsService: SettingsService, private dataService: DataService,
    private _toastrService: ToastrService) {
    this.SettingsService.statusClickedEvent
      .subscribe((data: string) => {
        if (data == 'Edit') {
          this.isEdit = true;
          this.isEditMeg = true;
        } else {
          this.clearObj()
        }
      });
    this.SettingsService.statusEditClickedEvent.subscribe((data: any) => {
      if (data) {
        this.statusData = data;
        if (typeof this.statusData == 'object' && this.statusData) {
          this.statusId = this.statusData?.StatusId;
          this.statusName = this.statusData?.StatusName;
          this.selectedColor = this.statusData?.Color;
          this.color = this.statusData?.Color;

        }
      }
    })
  }

  changeStatus(colors: string) {
    this.selectedColor = colors;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  clearObj() {
    this.statusName = "",
      this.selectedColor = "";
    this.isEdit = false;
  }

  async submit(form) {
    if (form.valid) {
      let json = {
        "StatusId": !this.isEdit ? 0 : this.statusId,
        "StatusName": form.controls.statusName.value,
        "Color": this.selectedColor,
        "IsDeleted": 0
      }
      this.blockUI.start('Loading...')
      let response = await this.SettingsService.addStatusData(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added Status', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update Status', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            }
            this.blockUI.stop()
          }, 1500);
        } else {
          this._toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
          });
          this.blockUI.stop()
        }
        form.resetForm();
        this.clearObj();
        this.toggleSidebar('add-status');
        this.SettingsService.getDataTableRowsStatus();
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