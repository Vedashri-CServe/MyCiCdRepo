import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SettingsService } from '../settings.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows;
  public selectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  private _unsubscribeAll: Subject<any>;
  columns = [{ name: "User Type", prop: "Role" }, { name: "Department", prop: "DepartmentType.Label" }];
  allColumns = [{ name: "User Type", prop: "Role" }, { name: "Department", prop: "DepartmentType.Label" }, { name: "Reporting Manager", prop: "ReportingManager" }, { name: "Mobile No", prop: "MobileNo" }, { name: 'Email', prop: "EmailId" }];
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[0].TabData[2];
  totalElements = 0;
  Number = 0;
  size = 10;
  index = 1;
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private toastrService: ToastrService
  ) {
    this._unsubscribeAll = new Subject();
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.searchValue = val
    if (this.searchValue.length >= 3) {
      this.settingService.getDataTableRowsUser(1, this.selectedOption, this.searchValue);
    } else if (this.searchValue.length == 0) {
      this.settingService.getDataTableRowsUser(1, this.selectedOption, this.searchValue);
    }
    this.table.offset = 0;
  }

  async selectDropdown(selectOption) {
    this.selectedOption = selectOption;
    this.settingService.getDataTableRowsUser(1, selectOption, this.searchValue);
  }

  toggle(col) {
    const isChecked = this.isChecked(col);
    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return (this.columns.find(c => { return c.name === col.name; }) !== undefined);
  }

  toggleSidebar(name, event, data): void {
    data['index'] = this.index;
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofCpa(event);
    this.settingService.isEditDataofCpa(data);
    this.searchValue = ""
  }

  async ConfirmTextOpen(data) {
    let that = await this;
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
          "UserId": data.UserId
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.deleteUser(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that.toastrService.success('You have successfully deleted user', 'Success', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            that.settingService.getDataTableRowsUser(1, that.selectedOption, that.searchValue);
            that.blockUI.stop()
          } else {
            that.toastrService.error(res.Message, 'Error!', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            that.blockUI.stop()
          }
        });
      }
    });
  }

  async ConfirmStatusOpen(data) {
    let that = await this;
    let text = !data.IsAvailable ? "Do you really want to Active these record?" : "Do you really want to Inactive these record?";
    Swal.fire({
      title: 'Are you sure?',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, Change it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {
        var json = {
          "Id": data.UserId,
          "IsAvailable": !data.IsAvailable,
          "TableType": 3
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.updateStatus(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that.toastrService.success('You have successfully update status', 'Success', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            that.settingService.getDataTableRowsUser(1, that.selectedOption, that.searchValue);
            that.blockUI.stop()
          } else {
            that.toastrService.error(res.Message, 'Error!', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            that.blockUI.stop()
          }
        });
      }
    });
  }

  setPage(pageInfo) {
    this.index = pageInfo.offset + 1
    this.settingService.getDataTableRowsUser(pageInfo.offset + 1, pageInfo.limit, this.searchValue);
  }

  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "RoleTypeId": null,
      "DepartmentId": null,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": false,
      "IsAvailable": null,
      "IsDownload": true
    }
    this.settingService.getDataTableRowsExportUser(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "UserReport.xlsx");
      this.blockUI.stop()
    });
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...')
    this.settingService.getDataTableRowsUser(1, 10, null);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.settingService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
        this.rows = response;
        this.rows.forEach((data) => {
          data['fullName'] = data.FirstName + ' ' + data.LastName,
            data['Role'] = data.Roles[0].Label,
            data['status'] = data.IsAvailable == true ? 'Active' : 'In-Active'
        })
        this.settingService.onTotalUserListChanged.subscribe((res) => {
          this.totalElements = res.TotalCount;
        });
        this.blockUI.stop();
      });
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}