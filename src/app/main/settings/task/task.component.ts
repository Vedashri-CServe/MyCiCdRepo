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
  selector: 'app-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public temp = [];
  public searchValue = '';
  public ColumnMode = ColumnMode;
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public isActionShow = false;
  public exportCSVData: [] = [];
  public totalElements = 0;
  Number = 0;
  size = 10;
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[0].TabData[3];
  columns = [{ name: "P/N", prop: "IsProductive" }, { name: "B/NB", prop: "IsBillable" }];
  allColumns = [{ name: "P/N", prop: "IsProductive" }, { name: 'B/NB', prop: "IsBillable" }];
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
  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    // Reset ng-select on search
    const val = event.target.value.toLowerCase();
    this.searchValue = val;
   if(this.searchValue.length >= 3){
    this.settingService.getDataTableRowsTask(1, this.selectedOption, this.searchValue);
   }
   else if(this.searchValue.length == 0){
    this.settingService.getDataTableRowsTask(1, this.selectedOption, this.searchValue);
   }
    this.table.offset = 0;
  }
  setPage(pageInfo) {
    this.index =pageInfo.offset + 1;
    this.settingService.getDataTableRowsTask(pageInfo.offset + 1, pageInfo.limit, this.searchValue);
  }
  async selectDropdown(selectOption) {
    this.selectedOption = selectOption;
    this.settingService.getDataTableRowsTask(1, selectOption, this.searchValue);
  }
  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": null,
      "PageNo": 1,
      "PageSize": 10,
      "TaskName": null,
      "IsAvailable": null,
      "IsDownload": true
    }
    this.settingService.getDataTableRowsExportTask(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "TaskReport.xlsx");
      this.blockUI.stop()
    });
  }
  toggleSidebar(name, event, data): void {
    data['index'] = this.index; 
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofTask(event);
    this.settingService.isEditDataofTask(data);
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
          "TaskId": data.TaskId
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.deleteTask(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that._toastrService.success('You have successfully deleted task', 'Success', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.settingService.getDataTableRowsTask(1, that.selectedOption, that.searchValue);
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
 
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
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
    setTimeout(x => { this.isActionShow = this.settingService.checkUserRole }, 100);
    this.settingService.getDataTableRowsTask(1, 10, null);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
    if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.settingService.onTaskListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.forEach(element => {
              element['estimatedDuration'] = this.toHoursAndMinutes(element.EstimatedDuration)
            });
            this.tempData = this.rows;
          });
          this.blockUI.stop()
        }, 450);
      } else {
        this.settingService.onTaskListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.rows.forEach(data => {
            data.IsBillable == true ? data['IsBillable'] = "Billable" : data['IsBillable'] = "Non-Billable";
            data.IsProductive == true ? data['IsProductive'] = "Productive" : data['IsProductive'] = "Non-Productive";
            data['estimatedDuration'] = this.toHoursAndMinutes(data.EstimatedDuration)
          })
          this.tempData = this.rows;
          this.settingService.onTaskTotalListChanged.subscribe((res) => {
            this.totalElements = res.TotalCount;
          });
          this.blockUI.stop()
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}