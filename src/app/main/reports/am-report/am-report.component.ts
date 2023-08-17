import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { DatePipe } from "@angular/common";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { ReportService } from '../reports.service';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-am-report',
  templateUrl: './am-report.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AmReportComponent implements OnInit {
  // Public
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public userData = JSON.parse(localStorage.getItem('userData'));
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true
  private _unsubscribeAll: Subject<any>;
  public exportCSVData: [] = [];
  public basicDPdata;
  totalElements = 0;
  Number = 0;
  size = 10;
  public reportingList = [];
  public reportingManager;
  public userDepartment = [];
  public department;
  public maxDate;
  public monthFirstdate;
  public monthLastDate
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private _coreConfigService: CoreConfigService,
    private reportservices: ReportService,
    public formatter: NgbDateParserFormatter,
    private datePipe: DatePipe,
    private settingService: SettingsService,
  ) {
    this._unsubscribeAll = new Subject();
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
   }
  filterUpdate(event) {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
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
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Users": [],
      "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
      "Available": true,
      "IsDesc": true,
      "StartDate": "",
      "EndDate": "",
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
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
    return (date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date));
  }
  searchData() {
    this.blockUI.start('Loading...')
    const startDate = new Date(Date.UTC(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day));
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
      "Users": [],
      "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
      "Available": true,
      "IsDesc": true,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  applyFilter() {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Users": [],
      "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
      "Available": true,
      "IsDesc": true,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    };
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
    this.table.offset = 0;
  }
  resetFilter() {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = null
    }
    this.department = null
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Users": [],
      "ReportingUsers": [],
      "Available": true,
      "IsDesc": true,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    };
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
    this.table.offset = 0;
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    var date = new Date();
    this.monthFirstdate = this.datePipe.transform((new Date(date.getFullYear(), date.getMonth(), 1)), 'yyyy-MM-dd');
    this.monthLastDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      let json = {
        "GlobalSearch": "",
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Users": [],
        "ReportingUsers": [],
        "Available": true,
        "IsDesc": true,
        "StartDate": "",
        "EndDate": "",
        "IsDownload": false,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.reportservices.getAutoManualReport(json).subscribe(response => {
            this.rows = response.ResponseData.List;
           });
          this.blockUI.stop()
        }, 450);
      } else {
        this.reportservices.getAutoManualReport(json).subscribe(response => {
          this.rows = response.ResponseData.List;
          this.totalElements = response.ResponseData.TotalCount;
          this.blockUI.stop()
        });
      }
    });
    this.settingService.getReportingManager();
    this.settingService.onReportingManager.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.reportingList = response.ResponseData;
      this.reportingList?.forEach(data => {
        data['name'] = data.Label
        data['id'] = data.Value
      })
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
    }, 200)
  }
  setPage(pageInfo) {
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else { endDate = null }
    let json = {
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "StartDate": startDate,
      "EndDate": endDate,
      "Users": [],
      "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
      "Available": true,
      "IsDesc": true,
      "IsDownload": false,
      "Department": 1,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  exportReport() {
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else { endDate = startDate }
    this.blockUI.start('Loading...')
    if(this.searchValue.length >= 3){
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Users": [],
        "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
        "Available": true,
        "IsDesc": true,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": true,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportservices.getAutoManualExportReport(json, 'blob').subscribe(response => {
        var FileSaver = require('file-saver');
        FileSaver.saveAs(response, "AutoManualReport.xlsx");
        this.blockUI.stop()
      });
    }else if(this.searchValue.length == 0){
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Users": [],
        "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
        "Available": true,
        "IsDesc": true,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": true,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportservices.getAutoManualExportReport(json, 'blob').subscribe(response => {
        var FileSaver = require('file-saver');
        FileSaver.saveAs(response, "AutoManualReport.xlsx");
        this.blockUI.stop()
      });
    }
  }

  async selectDropdown(selectOption) {
    this.selectedOption = parseInt(selectOption);
    this.blockUI.start('Loading...')
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else { endDate = null }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "StartDate": startDate,
      "EndDate": endDate,
      "Users": [],
      "ReportingUsers": this.reportingManager?.Value ? [this.reportingManager?.Value] : [],
      "Available": true,
      "IsDesc": true,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getAutoManualReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}