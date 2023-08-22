import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { Subject } from "rxjs";
import { CoreConfigService } from "@core/services/config.service";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";
import { SettingsService } from "../settings.service";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { BlockUI, NgBlockUI } from "ng-block-ui";
@Component({
  selector: "app-cpa",
  templateUrl: "./cpa.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class CpaComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = null;
  private _unsubscribeAll: Subject<any>;
  columns = [
    { name: "Type Of Work", prop: "typeofwork" },
    { name: "Billing Type", prop: "billingType" },
    { name: "Status", prop: "status" },
  ];
  allColumns = [
    { name: "Mobile No", prop: "MobileNo" },
    { name: "Email", prop: "Email" },
    { name: "Status", prop: "status" },
    { name: "Type Of Work", prop: "typeofwork" },
    { name: "Billing Type", prop: "billingType" },
  ];
  public isActionShow = false;
  public json = require("feather-icons/dist/icons.json");
  public icons;
  public exportCSVData: [] = [];
  public subMenu = JSON.parse(localStorage.getItem("userData")).Menu[0].TabData[0];
  totalElements = 0;
  Number = 0;
  size = 10;
  index = 1;
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    public settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _toastrService: ToastrService
  ) {
    this._unsubscribeAll = new Subject();
  }
  toggle(col) {
    const isChecked = this.isChecked(col);
    if (isChecked) {
      this.columns = this.columns.filter((c) => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return (
      this.columns.find((c) => {
        return c.name === col.name;
      }) !== undefined
    );
  }
  async ConfirmTextOpen(data) {
    let that = await this;
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to Delete these record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7367F0",
      cancelButtonColor: "#E42728",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1",
      },
    }).then(function (result) {
      if (result.value) {
        var json = {
          UserId: data.UserId,
        };
        that.blockUI.start("Loading...");
        let response = that.settingService.deletCPA(json).subscribe((res) => {
          if (res.ResponseStatus !== "Failure") {
            that._toastrService.success(
              "You have successfully deleted Client", "Success",
              {
                toastClass: "toast ngx-toastr",
                closeButton: true,
              }
            );
            that.settingService.getDataTableRows(1, 10, null);
            that.blockUI.stop();
          } else {
            that._toastrService.error(res.Message, "Error!", {
              toastClass: "toast ngx-toastr",
              closeButton: true,
            });
            that.blockUI.stop();
          }
        });
      }
    });
  }

  async ConfirmStatusOpen(data) {
    let that = await this;
    let text = !data.IsAvailable ? "Do you really want to Active these record?" : "Do you really want to Inactive these record?";
    Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7367F0",
      cancelButtonColor: "#E42728",
      confirmButtonText: "Yes, Change it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1",
      },
    }).then(function (result) {
      if (result.value) {
        var json = {
          Id: data.UserId,
          IsAvailable: !data.IsAvailable,
          TableType: 1,
        };
        that.blockUI.start("Loading...");
        let response = that.settingService
          .updateStatus(json)
          .subscribe((res) => {
            if (res.ResponseStatus !== "Failure") {
              that._toastrService.success(
                "You have successfully update status", "Success",
                {
                  toastClass: "toast ngx-toastr",
                  closeButton: true,
                }
              );
              that.settingService.getDataTableRows(1, 10, null);
              that.blockUI.stop();
            } else {
              that._toastrService.error(res.Message, "Error!", {
                toastClass: "toast ngx-toastr",
                closeButton: true,
              });
              that.blockUI.stop();
            }
          });
      }
    });
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.searchValue = val;
    if(this.searchValue.length >= 3){
      this.settingService.getDataTableRows(1, this.selectedOption, this.searchValue);
    }
    else if(this.searchValue.length == 0){
      this.settingService.getDataTableRows(1, this.selectedOption, this.searchValue);
    }
     this.table.offset = 0;
  }

  toggleSidebar(name, event, data): void {
    data['index'] = this.index;
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofCpa(event);
    this.settingService.isEditDataofCpa(data);
  }

  exportReport() {
    this.blockUI.start("Loading...");
    let json = {
      "OrganizationType": 2,
      "Index": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": true,
      "GlobalSearch": this.searchValue,
      "TypeOfWork": null,
      "BillingType": null,
      "ContractedHours": null,
      "IsAvailable": null,
      "IsDownload": true
    }
    this.settingService.getDataTableRowsExportClient(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ClientReport.xlsx");
      this.blockUI.stop();
    });
  }

  ngOnInit(): void {
    this.icons = this.json;
    this.blockUI.start("Loading...");
    setTimeout((x) => {
      this.isActionShow = this.settingService.checkUserRole;
    }, 100);
    this.settingService.getDataTableRows(1, this.selectedOption, null);
    this.settingService.onCPAListChanged.subscribe((response) => {
      this.rows = response;
      this.rows.forEach((data) => {
        data["typeofwork"] = data.TypeOfWorkList[0]?.Label;
        data["billingType"] = data.BillingTypeList[0]?.Label;
        data["status"] = data.IsAvailable == true ? "Active" : "In-Active";
      });
    });
    this.settingService.onTotalListChanged.subscribe((res) => {
      this.totalElements = res.TotalCount;
    });
    this.blockUI.stop(); // Stop blocking
  }

  setPage(pageInfo) {
    this.index = pageInfo.offset + 1;
    this.settingService.getDataTableRows(pageInfo.offset + 1, pageInfo.limit, this.searchValue);
  }

  async selectDropdown(selectOption) {
    this.selectedOption = selectOption;
    this.settingService.getDataTableRows(1, selectOption, this.searchValue);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}