import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SettingsService } from '../settings.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PermissionComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 20;
  public ColumnMode = ColumnMode;
  private _unsubscribeAll: Subject<any>;
  public dataList;
  public rowData;
  public userTypeList = [];
  public roleData: any;
  public updateData: any;
  public disaplyName;
  public searchId;
  public roleName;
  public selectedData = {}
  public rollId = JSON.parse(localStorage.getItem('userData')).RoleTypeIds[0]
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    public settingService: SettingsService,
    private _toastrService: ToastrService,
    private modalService: NgbModal
  ) {
    this._unsubscribeAll = new Subject();
  }

  toggleSidebar(name): void {
    this.modalService.open(name, {
      backdrop: false,
      centered: true,
    });
  }

  filterByRoleBase(data) {
    this.selectedData = data;
    this.searchId = data.Value
    let json = {
      "RoleId": data.Value
    }
    this.blockUI.start('Loading...');
    this.getRoleBaseDataList(json)
    this.blockUI.stop();
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...');
    this.getRoles()
    this.blockUI.stop(); // Stop blocking
  }
  editRole(data) {
    if (data != null) {
      let json = {
        "RoleId": data.Value,
        "RoleName": data.Label
      }
      this.blockUI.start('Loading...');
      this.settingService.addRoleBaseData(json).subscribe(res => {
        if (res.ResponseStatus == 'Success') {
          this._toastrService.success('You have successfully update Recored', 'Success', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
          });
          this.blockUI.stop();
          this.getRoles();
          this.selectedData = {};
          this.searchId = null
          this.rows = [];
          this.roleData = {};
        } else {
          this._toastrService.error(res.Message, 'Error', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
          });
          this.blockUI.stop();
        }
      })
    }
  }
  deleteRole(data) {
    let that = this;
    if (data) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to Delete these record?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7367F0',
        cancelButtonColor: '#E42728',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        }
      }).then(function (result) {
        if (result.value) {
          var json = {
            "RoleId": data.Value
          }
          that.blockUI.start('Loading...')
          let response = that.settingService.deleteRoleBase(json).subscribe(res => {
            if (res.ResponseStatus !== 'Failure') {
              that._toastrService.success('You have successfully deleted Role', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
              that.getRoles();
              that.selectedData = {};
              that.searchId = null
              that.rows = [];
              that.roleData = {}
              that.blockUI.stop()
            } else {
              that._toastrService.error(res.Message, 'Error!', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
              that.searchId = null
              that.blockUI.stop()
            }
          });
        }
      });
    }
  }
  getRoles() {
    this.settingService.getUserListDataPermission().subscribe(response => {
      if (response.ResponseData) {
        this.userTypeList = response.ResponseData;
        this.userTypeList.forEach(data => {
          data['name'] = data.Label;
          data['id'] = data.Value;
        })
      }
    });
  }
  getRoleBaseDataList(json) {
    this.settingService.getRoleBaseData(json);
    this.settingService.onRoleBaseDataChange.subscribe(res => {
      this.rows = res;
      if (this.rows && this.rows.length > 0) {
        this.rows.forEach((data, index) => {
          data['expanded'] = false;
          data['customShow'] = 'customShow' + [index];
          data['customActive'] = 'customActive' + [index];
          data['customhomePage'] = 'customhomePage' + [index]
        })
      }
    })
  }
  isChangeLimitAccessToggle(data, key) {
    let json = {
      "PermissionId": data.PermissionId,
      "IsShow": key == 'Show' ? !data.IsShow : data.IsShow,
      "DisplayName": data.DisplayName,
      "IsAdd": key == 'Add' ? !data.IsAdd : data.IsAdd,
      "IsUpdate": key == 'Update' ? !data.IsUpdate : data.IsUpdate,
      "IsDelete": key == 'Delete' ? !data.IsDelete : data.IsDelete,
      "IsActive": key == 'Active' ? !data.IsActive : data.IsActive,
      "IsDefaultLandingPage": key == 'Homepage' ? !data.IsDefaultLandingPage : data.IsDefaultLandingPage,
      "RoleTypeId": data.RoleTypeId,
      "MenuId": data.MenuId,
      "ParentId": data.ParentId
    }
    this.blockUI.start('Loading...');
    this.settingService.updateUserMenuList(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        this._toastrService.success('You have successfully updated Recored', 'Success', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      } else {
        this._toastrService.error(res.Message, 'Error', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      }
      let json
      if (this.searchId) {
        json = {
          "RoleId": this.searchId
        }
      } else {
        json = {
          "RoleId": null
        }
      }
      this.settingService.getRoleBaseData(json);
      this.settingService.onRoleBaseDataChange.subscribe(res => {
        this.rows = res;
      })
    })
  }
  OpenModel(modelOpen, data) {
    this.updateData = data;
    this.disaplyName = data.DisplayName;
    this.modalService.open(modelOpen, {
      backdrop: false,
      centered: true,
    });
  }
  SubmitData() {
    let json = {
      "PermissionId": this.updateData.PermissionId,
      "IsShow": this.updateData.IsShow,
      "IsAdd": this.updateData.IsAdd,
      "IsUpdate": this.updateData.IsUpdate,
      "IsDelete": this.updateData.IsDelete,
      "IsActive": this.updateData.IsActive,
      "IsDefaultLandingPage": this.updateData.IsDefaultLandingPage,
      "DisplayName": this.disaplyName,
      "RoleTypeId": this.updateData.RoleTypeId,
      "MenuId": this.updateData.MenuId,
      "ParentId": this.updateData.ParentId
    }
    this.blockUI.start('Loading...');
    this.settingService.updateUserMenuList(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        this._toastrService.success('You have successfully updated Recored', 'Success', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      } else {
        this._toastrService.error(res.Message, 'Error', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      }
      let json
      if (this.searchId) {
        json = {
          "RoleId": this.searchId
        }
      } else {
        json = {
          "RoleId": null
        }
      }
      this.getRoleBaseDataList(json);
      this.modalService.dismissAll("");
    })
  }
  SubmitRole() {
    let json = {
      "RoleId": null,   // in case of insert -> null , update -> send roletype id
      "RoleName": this.roleName
    }
    this.blockUI.start('Loading...');
    this.settingService.addRoleBaseData(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        this._toastrService.success('You have successfully added Recored', 'Success', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      } else {
        this._toastrService.error(res.Message, 'Error', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop();
      }
      this.selectedData = {};
      this.searchId = null
      this.rows = [];
      this.roleData = {};
      this.getRoles();
      this.roleName = "";
      this.modalService.dismissAll("");
    })
  }
  rowDetailsToggleExpand(row) {
    this.rowData = []
    this.rows.forEach(logs => {
      if (row.MenuId != logs.MenuId) {
        this.tableRowDetails.rowDetail.collapseAllRows(row);
        logs.expanded = false;
      } else {
        setTimeout(() => {
          this.tableRowDetails.rowDetail.toggleExpandRow(row);
          logs.expanded = true;
        }, 200);
      }
    })
    this.rowData = row.TabData;
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach((data, index) => {
        data['customSubShow'] = 'customSubShow' + [index];
        data['customSubAdd'] = 'customSubAdd' + [index];
        data['customSubUpdate'] = 'customSubUpdate' + [index];
        data['customSubDelete'] = 'customSubDelete' + [index];
        data['customSubActive'] = 'customSubActive' + [index];
        data['customSubhomePage'] = 'customSubhomePage' + [index]
      })
    }
  }
  closeRow(row) {
    this.rows.forEach(logs => {
      {
        setTimeout(() => {
          this.tableRowDetails.rowDetail.toggleExpandRow(row);
          logs.expanded = false;
        }, 200);
      }
    })
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}