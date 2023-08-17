import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { DatePipe } from "@angular/common";
import { ReportService } from '../reports.service';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-workload',
  templateUrl: './workload.component.html',
  styleUrls: ['./workload-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkloadComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public dataOflogs = []
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  public basicDPdata;
  public maxtodayDate;
  totalElements = 0;
  Number = 0;
  size = 10;
  public searchDate;
  maxDate;
  public userDepartment = [];
  public department;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @BlockUI() blockUI: NgBlockUI;




  constructor(
    private reportService: ReportService,
    private datePipe: DatePipe,
    private settingService: SettingsService) {
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    const date = new Date();
    const TimelineDate = date.toISOString();
    this.maxtodayDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    let json = {
      "GlobalSearch": "",
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 0,
      "StartDate": TimelineDate,
      "EndDate": TimelineDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "Departments": [],
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
    setTimeout(() => {
      this.settingService.getDepartmentList();
      this.settingService.onDepeartmentList.subscribe(response => {
        this.userDepartment = response.ResponseData;
        if (this.userDepartment && this.userDepartment.length > 0) {
          this.userDepartment.forEach((data) => {
            data["name"] = data.Label;
            data["id"] = data.Value;
          });
        }
      });
    }, 200)
  }

  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": true,
      "Users": [],
      "IsDesc": 0,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": true,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "OtherReportIdentifier": 3,
    }
    this.reportService.getOtherExportReport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "WorkLoadReport.xlsx");
      this.blockUI.stop();
    });
  }

  onDateSelection(date: NgbDate) {
    this.isDisable = false
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  
  isHovered(date: NgbDate) {
    return (this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate));
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date));
  }

  applyFilter() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    };
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
  }
  resetFilter() {
    this.blockUI.start('Loading...')
    this.department = null
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Departments": [],
    };
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
  }

  searchData(data) {
    this.blockUI.start('Loading...')
    if (data.year != undefined) {
      this.searchDate = new Date(Date.UTC(data.year, data.month - 1, data.day));
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
  }

  setPage(pageInfo) {
    this.blockUI.start('Loading...')
    let json = {
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
  }

  async selectDropdown(selectOption) {
    this.blockUI.start('Loading...')
    this.selectedOption = parseInt(selectOption)
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "OtherReportIdentifier": 3,
      "Users": [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data['expanded'] = false;
      })
      this.blockUI.stop()
    });
  }

  filterUpdate(event) {
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...')
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": 1,
        "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
        "OtherReportIdentifier": 3,
        "Users": [],
      }
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.rows.forEach(data => {
          data['expanded'] = false;
        })
        this.blockUI.stop()
      });
    }else if (this.searchValue.length == 0) {
      this.blockUI.start('Loading...')
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": 1,
        "StartDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "EndDate": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
        "OtherReportIdentifier": 3,
        "Users": [],
      }
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.rows.forEach(data => {
          data['expanded'] = false;
        })
        this.blockUI.stop()
      });
    }
  }

  rowDetailsToggleExpand(row) {
    this.dataOflogs = []
    this.rows.forEach(logs => {
      if (row.UserId != logs.UserId) {
        this.tableRowDetails.rowDetail.collapseAllRows(row);
        logs.expanded = false;
      } else {
        setTimeout(() => {
          this.tableRowDetails.rowDetail.toggleExpandRow(row);
          logs.expanded = true;
        }, 200);
      }
    })
    row.DateTimeLogs.map(logs => {
      this.dataOflogs = logs.LogDetails;
      this.dataOflogs.forEach(data => {
        data['isManual'] = data.IsManual == true ? "Yes" : 'No';
        data['TotalSpent'] = data.IsManual == true ? data.TotalManualTimeLogHrs : data.TotalTimeSpentOnTask
        data['date'] = this.datePipe.transform((data.LogDate), 'yyyy-MM-dd');
      })
    })
  }
  closeCollapse(row) {
    this.rows.forEach(logs => {
      if (row.UserId == logs.UserId) {
        logs.expanded = false;
      }
    })
    this.tableRowDetails.rowDetail.collapseAllRows(row)
  }
}