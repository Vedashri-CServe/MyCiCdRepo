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
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ActivityComponent implements OnInit {

  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public basicDPdata;
  public userData = JSON.parse(localStorage.getItem('userData'));
  public userName;
  private _unsubscribeAll: Subject<any>;
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  public exportCSVData: [] = [];
  totalElements = 0;
  Number = 0;
  size = 10;
  public userDepartment = [];
  public department;
  maxDate
  public userList = [];
  public userId: any = [];
  userArrayList = []
  public monthFirstdate;
  public monthLastDate
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private reportservices: ReportService,
    private datePipe: DatePipe,
    public formatter: NgbDateParserFormatter,
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
  //filter on search
  filterUpdate(event) {
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
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...')
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Available": null,
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportservices.getActivityReports(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    } else if (this.searchValue.length == 0) {
      this.blockUI.start('Loading...');
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Available": null,
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "Departments": this.department?.Value ? [this.department?.Value] : []
      }
      this.reportservices.getActivityReports(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    }
  }
  //on load  
  ngOnInit(): void {
    this.blockUI.start('Loading...');
    var date = new Date();
    this.monthFirstdate = this.datePipe.transform((new Date(date.getFullYear(), date.getMonth(), 1)), 'yyyy-MM-dd');
    this.monthLastDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    let json = {
      "GlobalSearch": "",
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": null,
      "Users": [],
      "IsDesc": 0,
      "StartDate": "",
      "EndDate": "",
      "IsDownload": false,
      "Departments": [],
    }
    this.reportservices.getActivityReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
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
      this.reportservices.getAllUserList().subscribe(response => {
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
  //on search button clieck load 
  searchData() {
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
      endDate = startDate
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getActivityReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.exportCSVData = this.rows;
      this.blockUI.stop()
    });
  }
  exportReport() {
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
      endDate = startDate
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 0,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": true,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getActivityExportReports(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ActivityReport.xlsx");
      this.blockUI.stop()
    });
  }
  applyFilter() {
    this.blockUI.start('Loading...')
    var startDate;
    this.userArrayList = []
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
    this.userId?.forEach(a => {
      this.userArrayList.push(a.Value)
    })
    let json = {
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    };
    this.reportservices.getActivityReports(json).subscribe(response => {
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
    this.department = null;
    this.userArrayList = []
    let json = {
      "GlobalSearch": "",
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": null,
      "Users": [],
      "IsDesc": 0,
      "StartDate": "",
      "EndDate": "",
      "IsDownload": false,
      "Departments": []
    };
    this.reportservices.getActivityReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
    this.table.offset = 0;
  }
  setPage(pageInfo) {
    var startDate;
    this.blockUI.start('Loading...')
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {
      startDate = null
    } var endDate
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
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getActivityReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
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
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : []
    }
    this.reportservices.getActivityReports(json).subscribe(response => {
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