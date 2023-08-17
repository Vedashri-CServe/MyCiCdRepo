import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ReportService } from '../reports.service';
import { DatePipe } from '@angular/common';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TimesheetComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public column = []
  public searchValue = '';
  private _unsubscribeAll: Subject<any>;
  public lastExpandRow: any = '';
  public a = new Date()
  public month = ("0" + (this.a.getMonth() + 1)).slice(-2);
  public year = this.a.getFullYear();
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true
  public basicDPdata;
  totalElements = 0;
  Number = 0;
  size = 10;
  public userDepartment = [];
  public department;
  public maxDate;
  public userList = [];
  public userId: any = [];
  userArrayList = [];
  monthFirstdate;
  monthLastDate;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private reportService: ReportService, private datePipe: DatePipe, public formatter: NgbDateParserFormatter, private settingService: SettingsService) {
    this._unsubscribeAll = new Subject();
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
    this.showDateWise(this.month, this.year, null, null)
  }
  getAllDaysInMonth = (month, year) =>
    Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => new Date(year, month - 1, i + 1)    // get current month (0 based index)
    );
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
    return (date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date));
  }
  showDateWise(month, year, tomonth, toyear) {
    this.column = [];
    var start = []; var end = []
    const allDatesInOctober = this.getAllDaysInMonth(month, year);
    const toallDatesInOctober = this.getAllDaysInMonth(tomonth, toyear);
    var allColumns = allDatesInOctober.map(x => x.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" }));
    var allColumnsTo = toallDatesInOctober.map(x => x.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" }));
    for (let i = 0; i <= allColumns.length; i++) {
      let obj = {
        'name': allColumns[i],
        'date': new Date(allColumns[i]).getDate(),
        'month': new Date(allColumns[i]).getUTCMonth() + 1,
      }
      if ((this.fromDate?.month == this.toDate?.month) && this.fromDate?.month != undefined) {
        if (new Date(allColumns[i]).getDate() >= this.fromDate?.day && new Date(allColumns[i]).getDate() <= this.toDate?.day) {
          start.push(obj)
        }
      } else {
        if (new Date(allColumns[i]).getDate() == this.fromDate?.day && this.fromDate?.day != undefined && this.toDate?.day == undefined) {
          start.push(obj);
        }
        if (new Date(allColumns[i]).getDate() >= this.fromDate?.day && this.fromDate?.day != undefined && this.toDate?.day != undefined) {
          start.push(obj);
        }
        if (new Date(allColumns[i]).getDate() <= new Date().getDate() && this.fromDate?.day == undefined) {
          start.push(obj)
        }
      }
    }
    for (let i = 0; i <= allColumnsTo.length; i++) {
      let obj = {
        'name': allColumnsTo[i],
        'date': new Date(allColumnsTo[i]).getDate(),
        'month': new Date(allColumnsTo[i]).getUTCMonth() + 1,
      }
      if ((new Date(allColumnsTo[i]).getUTCMonth() + 1 != new Date(allColumns[i]).getUTCMonth() + 1) && new Date(allColumnsTo[i]).getUTCMonth() + 1 <= this.toDate?.month && new Date(allColumnsTo[i]).getDate() <= this.toDate?.day) {
        end.push(obj)
      }
    }
    this.column = start.concat(end);
  }
  searchData() {
    this.blockUI.start('Loading...')
    this.column = []
    this.showDateWise(this.fromDate.month, this.fromDate.year, this.toDate?.month, this.toDate?.year)
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else { startDate = null }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = startDate
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "OtherReportIdentifier": 1,
      "Users": this.userId?.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      if (this.rows && this.rows) {
        this.rows.forEach((row) => {
          row['expanded'] = false;
          row.DateTimeLogs.forEach(data => {
            data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
            data.showDate = new Date(data.LogDate).getDate();
            data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
          })
        })
      }
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  logDetails = [];
  ngOnInit(): void {
    this.blockUI.start('Loading...');
    var date = new Date();
    this.monthFirstdate = this.datePipe.transform((new Date(date.getFullYear(), date.getMonth(), 1)), 'yyyy-MM-dd');
    this.monthLastDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    let json = {
      "GlobalSearch": "",
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 0,
      "StartDate": "",
      "EndDate": "",
      "IsDownload": false,
      "OtherReportIdentifier": 1,
      "Users": [],
      "Departments": []
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      if (this.rows && this.rows) {
        this.rows.forEach((row) => {
          row['expanded'] = false;
          row.DateTimeLogs.forEach(data => {
            data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
            data.showDate = new Date(data.LogDate).getDate();
            data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
          })
        })
      }
      this.blockUI.stop()
    });
    setTimeout(() => {
      this.settingService.getDepartmentList()
      this.settingService.onDepeartmentList.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
        this.userDepartment = response.ResponseData;
        if (this.userDepartment && this.userDepartment.length > 0) {
          this.userDepartment.forEach((data) => {
            data["name"] = data.Label;
            data["id"] = data.Value;
          });
        }
      });
      this.reportService.getAllUserList().subscribe(response => {
        this.userList = response.ResponseData;
        if (this.userList && this.userList.length > 0) {
          this.userList.forEach((data) => {
            data["name"] = data.Label;
            data["id"] = data.Value;
          });
        }
      });
    }, 200)
  }
  async exportReport() {
    var date = new Date()
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else { startDate = null }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = startDate
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate == null ? (new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1))).toISOString() : startDate,
      "EndDate": startDate == null ? new Date().toISOString() : endDate,
      "IsDownload": true,
      "OtherReportIdentifier": 1,
      "Users": this.userId?.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportService.getOtherExportReport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "TimesheetReport.xlsx");
      this.blockUI.stop()
    });
  }
  
  setPage(pageInfo) {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {startDate = null}
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    let json = {
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "OtherReportIdentifier": 1,
      "Users": this.userId?.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      if (this.rows && this.rows) {
        this.rows.forEach((row) => {
          row['expanded'] = false;
          row.DateTimeLogs.forEach(data => {
            data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
            data.showDate = new Date(data.LogDate).getDate();
            data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
          })
        })
      }
      this.blockUI.stop()
    });
  }
  async selectDropdown(selectOption) {
    this.selectedOption = parseInt(selectOption);
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {startDate = null}
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "OtherReportIdentifier": 1,
      "Users": this.userId?.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      if (this.rows && this.rows) {
        this.rows.forEach((row) => {
          row['expanded'] = false;
          row.DateTimeLogs.forEach(data => {
            data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
            data.showDate = new Date(data.LogDate).getDate();
            data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
          })
        })
      }
      this.blockUI.stop()
    });
  }
  rowDetailsToggleExpand(row, date) {
    this.logDetails = []
    this.rows.map(logs => {
      if (row.UserId != logs.UserId) {
        this.tableRowDetails.rowDetail.collapseAllRows(logs);
        logs.expanded = false;
      } else {
        setTimeout(() => {
          this.tableRowDetails.rowDetail.toggleExpandRow(logs);
          logs.expanded = true;
        }, 200);
      }
    })
    row.DateTimeLogs.forEach(data => {
      if (new Date(data.LogDate).getDate() == date) {
        this.logDetails = data.LogDetails;
        this.logDetails.forEach(d => {
          d['startDate'] = this.datePipe.transform((d.StartDate), 'yyyy-MM-dd');
          d['endDate'] = this.datePipe.transform((d.EndDate), 'yyyy-MM-dd');
          d['isManual'] = d.IsManual == true ? "Yes" : 'No'
          d['TotalSpent'] = d.IsManual == true ? d.TotalManualTimeLogHrs : d.TotalTimeSpentOnTask
        })
      }
    });
  }
  closeCollapse(row) {
    this.rows.forEach(logs => {
      if (row.UserId == logs.UserId) {
        logs.expanded = false;
      }
    })
    this.tableRowDetails.rowDetail.collapseAllRows(row)
  }
  applyFilter() {
    this.userArrayList = []
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else { startDate = null }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    this.userId?.forEach(a => {
      this.userArrayList.push(a.Value)
    })
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...');
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "SortColumn": null,
        "IsDownload": false,
        "OtherReportIdentifier": 1,
        "Users": this.userId?.length > 0 ? this.userArrayList : [],
        "PageSize": this.selectedOption,
        "Available": true,
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      };
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.rows.forEach(data => {
          data.DateTimeLogs.forEach(logs => {
            logs['attandaceStatus'] = logs.TimeSpentWithFormatting.charAt(logs.TimeSpentWithFormatting.length - 1)
            logs['dateCheck'] = new Date(logs.LogDate).getDate();
            logs['monthCheck'] = new Date(logs.LogDate).getUTCMonth() + 1
          })
        })
        this.blockUI.stop()
      });
    } else if (this.searchValue.length == 0) {
      this.blockUI.start('Loading...');
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "SortColumn": null,
        "IsDownload": false,
        "OtherReportIdentifier": 1,
        "Users": this.userId?.length > 0 ? this.userArrayList : [],
        "PageSize": this.selectedOption,
        "Available": true,
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      };
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.rows.forEach(data => {
          data.DateTimeLogs.forEach(logs => {
            logs['attandaceStatus'] = logs.TimeSpentWithFormatting.charAt(logs.TimeSpentWithFormatting.length - 1)
            logs['dateCheck'] = new Date(logs.LogDate).getDate();
            logs['monthCheck'] = new Date(logs.LogDate).getUTCMonth() + 1
          })
        })
        this.blockUI.stop()
      });
    }
  }
  resetFilter() {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {startDate = null}
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    this.department = null;
    this.userArrayList = [];
    this.userId = []
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "OtherReportIdentifier": 1,
      "Users": [],
      "Departments": []
    };
    this.reportService.getOtherReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.rows.forEach(data => {
        data.DateTimeLogs.forEach(logs => {
          logs['attandaceStatus'] = logs.TimeSpentWithFormatting.charAt(logs.TimeSpentWithFormatting.length - 1)
          logs['dateCheck'] = new Date(logs.LogDate).getDate();
          logs['monthCheck'] = new Date(logs.LogDate).getUTCMonth() + 1
        })
      })
      this.blockUI.stop()
    });
  }
  filterUpdate(event) {
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else { startDate = null}
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...');
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "OtherReportIdentifier": 1,
        "Users": this.userId?.length > 0 ? this.userArrayList : [],
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        if (this.rows && this.rows) {
          this.rows.forEach((row) => {
            row['expanded'] = false;
            row.DateTimeLogs.forEach(data => {
              data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
              data.showDate = new Date(data.LogDate).getDate();
              data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
            })
          })
        }
        this.blockUI.stop();
      });
    } else if (this.searchValue.length == 0) {
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "OtherReportIdentifier": 1,
        "Users": this.userId?.length > 0 ? this.userArrayList : [],
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportService.getOtherReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        if (this.rows && this.rows) {
          this.rows.forEach((row) => {
            row['expanded'] = false;
            row.DateTimeLogs.forEach(data => {
              data['attandaceStatus'] = data.TimeSpentWithFormatting.charAt(data.TimeSpentWithFormatting.length - 1)
              data.showDate = new Date(data.LogDate).getDate();
              data.showMonth = new Date(data.LogDate).getUTCMonth() + 1;
            })
          })
        }
        this.blockUI.stop();
      });
    }
  }
  getCellClass({ row, column, value }): any {
    const holidayDates = ['12/25/2023', '3/8/2023', '8/15/2023', '8/30/2023', '9/7/2023', '1/26/2023', '10/2/2023', '10/24/2023', '11/14/2023'];
    let isHoliday = false;
    holidayDates.forEach((date) => {
      if (column.name.indexOf(date) !== -1) {
        isHoliday = true;
      }
    });
    const createDate = new Date(column.name);
    if (isHoliday) {
      return {
        'highlight-holiday-leave': true
      };
    } else {
      return {
        'highlight-holiday': createDate.getDay() == 0 || createDate.getDay() == 6
      };
    }
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}