import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SettingsService } from '../../settings.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  public firstName;
  public lastName;
  public cpaName;
  public email;
  public mobileNo;
  public userType = "";
  public department = "";
  private _unsubscribeAll: Subject<any>;
  public userDepartment = [];
  public userListData = []
  public userTypeList = []
  public isEdit = false;
  public userDaata: any;
  public UserId: any;
  public cpaList = [];
  public isEditMeg = false;
  public selectMultiLimitedSelected = [];
  public reportingManager: any;
  public selectBasicLoading = false;
  public reportingId;
  public workCategory;
  public contentHeader: object;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private _coreSidebarService: CoreSidebarService,
    private SettingsService: SettingsService, private _toastrService: ToastrService) {
    this._unsubscribeAll = new Subject();
    this.SettingsService.cpaClickedEvent.subscribe((data: string) => {
      if (data == 'Edit') {
        this.isEdit = true;
        this.isEditMeg = true;
      } else {
        this.objectClear();
      }
      this.SettingsService.cpaEditClickedEvent.subscribe((data: any) => {
        if (data) {
          this.reportingManager = ""
          this.selectMultiLimitedSelected = []
          this.userDaata = data;
          if (typeof this.userDaata == 'object') {
            this.UserId = this.userDaata?.UserId;
            this.firstName = this.userDaata?.FirstName;
            this.lastName = this.userDaata?.LastName;
            this.email = this.userDaata?.EmailId;
            this.mobileNo = this.userDaata?.MobileNo;
            this.cpaName = this.userDaata?.ParentId;
            this.workCategory = this.userDaata?.WorkCategory
            if (this.userDaata && this.userDaata?.Roles && this.userDaata?.Roles.length > 0) {
              this.userType = (this.userDaata?.Roles[0].Value).toString();
            }
           if(this.userDaata && this.userDaata.Organizations){
            this.selectMultiLimitedSelected = this.userDaata.Organizations;
           }
            if(this.selectMultiLimitedSelected && this.selectMultiLimitedSelected.length > 0){
              this.selectMultiLimitedSelected.forEach(data => {
                data['name'] = data.Label
                data['id'] = data.Value
              })
            }
            if(this.userDaata && this.userDaata?.DepartmentType){
              this.department = this.userDaata?.DepartmentType.Value;
            }
            this.userListData.forEach(data => {
              if (data.id == this.userDaata?.ParentId) {
                this.reportingManager = data.name;
                this.reportingId = this.userDaata?.ParentId
              }
            })
          }
        }
      })
    });
  }

 toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  objectClear() {
    this.firstName = "",
    this.lastName = "";
    this.email = "";
    this.mobileNo = "";
    this.userType = "";
    this.department = "";
    this.isEdit = false;
    this.UserId = "";
    this.reportingManager = "";
    this.workCategory =""
  }
  async submit(form) {
    let cpaList = [];
    if (form.controls.reportingManager.value.Value !== undefined) {
      this.reportingId = form.controls.reportingManager.value.Value
    }else{
      this.reportingId = this.reportingId
    }
    this.selectMultiLimitedSelected.forEach(d => {
      cpaList.push(d.id)
    });
    if (form.valid) {
      let json = {
        "UserId": !this.isEdit ? 0 : this.UserId,
        "OrganizationIds": cpaList,
        "ParentId": this.reportingId == undefined ? 0 : this.reportingId,
        "FirstName": form.controls.firstName.value,
        "LastName": form.controls.lastName.value,
        "EmailId": form.controls.email.value,
        "WorkCategory":form.controls.workCategory.value,
        "RoleTypeIds": [parseInt(form.controls.userType.value)],
        "MobileNo": form.controls.mobileNo.value ? form.controls.mobileNo.value : null,
        "DepartmentId": parseInt(form.controls.department.value)
      }
      this.blockUI.start('Loading...')
      let response = await this.SettingsService.addUserData(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added User', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update User', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true,
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
        this.objectClear();
        this.toggleSidebar('add-user');
        this.SettingsService.getDataTableRowsUser(this.userDaata.index,10,null);
      });
    }
  }

  private selectBasicMethod() {
    this.selectBasicLoading = true;
    this.SettingsService.getReportingManager();
    this.SettingsService.onReportingManager.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.userListData = response.ResponseData;
      this.userListData?.forEach(data => {
        data['name'] = data.Label
        data['id'] = data.Value
      })
    });
      this.selectBasicLoading = false;
  }
 
  ngOnInit() {
    this.selectBasicMethod();
    this.SettingsService.getDepartmentList();
    this.SettingsService.onDepeartmentList.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.userDepartment = response.ResponseData
    });
    this.SettingsService.getUserTypeList();
    this.SettingsService.onUserTypetList.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.userTypeList = response.ResponseData
    });
    
    this.SettingsService.getCPAListArray();
    this.SettingsService.onCPAList.subscribe(response => {
      this.cpaList = response.ResponseData;
      this.cpaList?.forEach(data => {
        data['name'] = data.Label
        data['id'] = data.Value
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
}