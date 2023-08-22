import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Observable, Subject } from 'rxjs';
import { SettingsService } from "app/main/settings/settings.service";
import { ToastService } from 'app/main/components/toasts/toasts.service';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-add-cpa',
  templateUrl: './add-cpa.component.html'
})
export class AddCpaComponent implements OnInit {
  public cpaName;
  public address;
  public email;
  public mobileNo;
  public workType;
  public billingType;
  public contractedHours;
  public internalHours;
  public isEdit;
  public cpaData: any;
  public userData: Observable<any[]>;
  public UserId;
  private _unsubscribeAll: Subject<any>;
  public isEditMeg = false;
  public typeOfWorkArray = [];
  public workTypeId;
  public billingTypeArray = [];
  public billingTypeId;
  public contentHeader: object;
  public checkListDescription;
  public isEditProcess = true;
  public processList = [];
  public active = 1;
  checkAll: boolean = true;
  @BlockUI() blockUI: NgBlockUI;
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService;
   *  @param {SettingsService} _SettingsService
   */
  constructor(private _coreSidebarService: CoreSidebarService,
    private SettingsService: SettingsService,
    private _toastrService: ToastrService) {
    this._unsubscribeAll = new Subject()
    this.SettingsService.cpaClickedEvent
      .subscribe((data: string) => {
        if (data == 'Edit') {
          this.isEdit = true;
          this.isEditMeg = true;
        } else {
          this.clearObje();
        }
      });
    this.SettingsService.cpaEditClickedEvent.subscribe((data: any) => {
      if (data) {
        this.cpaData = data;
        if (typeof this.cpaData == 'object' && this.cpaData) {
          this.UserId = this.cpaData?.UserId;
          this.cpaName = this.cpaData?.Name;
          this.address = this.cpaData?.Address
          this.email = this.cpaData?.Email
          this.mobileNo = this.cpaData?.MobileNo
          if (this.cpaData?.ContractedHours != 0) {
            this.contractedHours = this.cpaData?.ContractedHours
          }
          if (this.cpaData?.InternalHours != 0) {
            this.internalHours = this.cpaData?.InternalHours
          }
          if (this.cpaData?.BillingTypeList) {
            this.billingType = this.cpaData?.BillingTypeList[0]?.Label,
              this.billingTypeId = this.cpaData?.BillingTypeList[0]?.Value
          }

          this.getProcess(this.cpaData?.UserId)
          if (this.cpaData?.TypeOfWorkList) {
            this.workType = this.cpaData?.TypeOfWorkList[0]?.Label;
            this.workTypeId = this.cpaData?.TypeOfWorkList[0]?.Value
          }
        }
      }
    })
  }

  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }

  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  clearObje() {
    this.cpaName = "";
    this.address = "";
    this.email = "";
    this.mobileNo = "";
    this.workType = "";
    this.billingType = "";
    this.contractedHours = "";
    this.internalHours = "";
    this.isEdit = false;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  getProcess(id) {
    let json = {
      "CPAId": id
    }
    this.SettingsService.getCPAProcess(json).subscribe(res => {
      if (res.ResponseData) {
        this.processList = res.ResponseData;
        this.processList.forEach(data => {
          data['isEditProcess'] = true;
          data['estimatedDuration'] = this.toHoursAndMinutes(data.EstimatedDuration);
        })
        this.checkAll = this.processList.every(data => data?.IsCPAmapped == true);
      }
    })
  }

  async submit(form) {
    if (form.controls.workType.value.id) {
      this.workTypeId = form.controls.workType.value.id
    } else {
      this.workTypeId = this.workTypeId
    }
    if (form.controls.billingType.value.id) {
      this.billingTypeId = form.controls.billingType.value.id
    } else {
      this.billingTypeId = this.billingTypeId
    }
    if (form.valid) {
      let json = {
        "UserId": !this.isEdit ? 0 : this.UserId,
        "Name": form.controls.cpaName.value,
        "WebSiteURl": "www.rm1.com",
        "ParentId": 0,
        "OrganizationType": 2,
        "Address": form.controls.address.value,
        "Email": form.controls.email.value ? form.controls.email.value : null,
        "MobileNo": form.controls.mobileNo.value ? form.controls.mobileNo.value : null,
        "TypeOfWork": this.workTypeId,
        "BillingType": this.billingTypeId,
        "ContractedHours": form.controls.contractedHours.value ? form.controls.contractedHours.value : 0,
        "InternalHours": form.controls.internalHours.value ? form.controls.internalHours.value : 0,
        "IsDeleted": 0
      }
      this.blockUI.start('Loading...')
      let response = this.SettingsService.addCpaData(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added Client', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update Client', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            }
            this.blockUI.stop();
          }, 1500);
        } else {
          this._toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
          });
          this.blockUI.stop();
        }
        form.resetForm();
        this.clearObje();
        this.active = 1;
        this.toggleSidebar('add-cpa');
        this.SettingsService.getDataTableRows( this.cpaData.index, 10, null);
      });
    }
  }

  checkboxChange(row) {
    this.processList.forEach(data => {
      if (data.ProcessId == row.ProcessId && row.IsCPAmapped == false) {
        data.IsCPAmapped = true;
      } else if (data.ProcessId == row.ProcessId && row.IsCPAmapped == true) {
        data.IsCPAmapped = false;
      }
    })
  }
  checkboxAllChange(data) {
    if(data.target.checked === true){
      this.processList.forEach(data => {
        data.IsCPAmapped = true;
      })
    }else{
      this.processList.forEach(data => {
        data.IsCPAmapped = false;
      })
    }
  }

  minuteconver(EstimatedDuration) {
    var hms;
    let minute
    if (EstimatedDuration.length == 4) {
      hms = EstimatedDuration;
      const hours = hms.slice(0, 2);
      const minutes = hms.slice(2, 4)
      minute = Number(hours) * 60 + Number(minutes) * 1;
    } else {
      hms = EstimatedDuration;
      let hmsre = hms.replace(':', '')
      const hours = hmsre.slice(0, 2);
      const minutes = hmsre.slice(2, 4);
      minute = Number(hours) * 60 + Number(minutes) * 1;
    }
    return minute
  }

  submitProcess(row) {
    let array = []
    this.processList.forEach(data => {
      if (data.IsCPAmapped) {
        let obj = {
          "ProcessId": data.ProcessId,
          "IsBillable": parseInt(data.IsBillable),
          "IsProductive": parseInt(data.IsProductive),
          "EstimatedDuration": this.minuteconver(data.estimatedDuration)
        }
        array.push(obj)
      }
    })
    let json = {
      "CPAId": this.UserId,
      "Data": array
    }
    this.blockUI.start('Loading...')
    this.SettingsService.addCPAProcess(json).subscribe(res => {
      if (res.ResponseStatus) {
        this._toastrService.success('You have successfully updated recored', 'Success', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop()
      } else {
        this._toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop()
      }
      this.clearObje();
      this.toggleSidebar('add-cpa');
      this.active = 1;
      this.SettingsService.getDataTableRows(1, 10, null);
    })
  }

  ngOnInit() {
    this.SettingsService.getAllTypeofWork();
    this.SettingsService.onTypeOfWorkChange.subscribe(res => {
      this.typeOfWorkArray = res;
      this.typeOfWorkArray.forEach(data => {
        data['name'] = data.Label;
        data['id'] = data.Value;
      })
    });
    this.SettingsService.getAllBillingType();
    this.SettingsService.onBillingTypeChange.subscribe(res => {
      this.billingTypeArray = res;
      this.billingTypeArray.forEach(data => {
        data['name'] = data.Label;
        data['id'] = data.Value;
      })
    });
    this.SettingsService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.userData = response;
      this.userData.forEach((data: any) => {
        data['name'] = data?.FirstName + '' + data?.LastName;
      })
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
  editData(row) {
    this.processList.forEach(data => {
      if (data.ProcessId == row.ProcessId) {
        data['isEditProcess'] = false;
      } else {
        data['isEditProcess'] = true;
      }
    })
  }
}