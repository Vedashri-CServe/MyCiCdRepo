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
  selector: 'app-process',
  templateUrl: './process.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {
  // Public
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public searchValue = '';
  private _unsubscribeAll: Subject<any>;
  columns = [{ name: "P/N", prop: "IsProductive" }, { name: "B/NB", prop: "IsBillable" }];
  allColumns = [{ name: "P/N", prop: "IsProductive" }, { name: 'B/NB', prop: "IsBillable" }];
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[0].TabData[4];
  totalElements = 0;
  Number = 0;
  size = 10;
  index = 1;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @BlockUI() blockUI: NgBlockUI;





  constructor(
    private settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _toastrService: ToastrService
  ) {
    this._unsubscribeAll = new Subject();
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
    return (
      this.columns.find(c => {
        return c.name === col.name;
      }) !== undefined
    );
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.searchValue = val;
    if(this.searchValue.length >= 3){
      this.settingService.getDataTableRowsProcess(1, this.selectedOption, this.searchValue);
    }else if(this.searchValue.length == 0){
      this.settingService.getDataTableRowsProcess(1, this.selectedOption, this.searchValue);
    }
    this.table.offset = 0;
  }
  setPage(pageInfo) {
    this.index = pageInfo.offset + 1
    this.settingService.getDataTableRowsProcess(pageInfo.offset + 1, pageInfo.limit, this.searchValue);
  }
  toggleSidebar(name, event, data): void {
    data['index'] = this.index; 
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofProcess(event);
    this.settingService.isEditDataofProcess(data);
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
          "ProcessId": data.ProcessId
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.deleteProcess(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that._toastrService.success('You have successfully deleted process', 'Success', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.settingService.getDataTableRowsProcess(1, that.selectedOption, that.searchValue);
            that.blockUI.stop()
          } else {
            that._toastrService.error(res.Message, 'Error!', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.blockUI.stop()
          }
        });
      }
    });
  }
  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "ProcessName": null,
      "EstimatedDuration": null,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": false,
      "IsAvailable": null,
      "IsDownload": true
    }
    this.settingService.getDataTableRowsExportProcess(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ProcessReport.xlsx");
      this.blockUI.stop()
    });
  }

  async selectDropdown(selectOption) {
    this.selectedOption = selectOption;
    this.settingService.getDataTableRowsProcess(1, selectOption, this.searchValue);
  }

  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }

  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...')
    this.settingService.getDataTableRowsProcess(1, 10, null);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.settingService.onProcessListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
         });
          this.blockUI.stop()
        }, 450);
      } else {
        this.settingService.onProcessListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.rows.forEach(data => {
            data.IsBillable == true ? data['IsBillable'] = "Billable" : data['IsBillable'] = "Non-Billable";
            data.IsProductive == true ? data['IsProductive'] = "Productive" : data['IsProductive'] = "Non-Productive";
            data['estimatedDuration'] = this.toHoursAndMinutes(data.EstimatedDuration)
          });
          this.settingService.onProcessTotalListChanged.subscribe((res) => {
            this.totalElements = res.TotalCount;
          });
         this.blockUI.stop()
        });
      }
    });
  }

  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}