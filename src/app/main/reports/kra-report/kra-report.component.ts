import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { ReportService } from '../reports.service';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DatePipe } from '@angular/common';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-kra-report',
  templateUrl: './kra-report.component.html',
  encapsulation: ViewEncapsulation.None
})

export class KraReportComponent implements OnInit {

  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  private _unsubscribeAll: Subject<any>;
  public exportCSVData: [] = [];
  public basicDPdata;
  public clientArry = []
  totalElements = 0;
  Number = 0;
  size = 10; maxDate;
  public userList = [];
  public userId: any = [];
  userArrayList = []
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  public ClientList = []
  public clientId;
  public userDepartment = [];
  public department;
  public monthFirstdate;
  public monthLastDate
  constructor(
    private _coreConfigService: CoreConfigService,
    private reportservices: ReportService,
    private datePipe: DatePipe,
    public formatter: NgbDateParserFormatter,
    private settingService: SettingsService) {
    this._unsubscribeAll = new Subject();
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
  }

  filterUpdate(event) {
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else { startDate = null }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else { endDate = null }
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...');
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "Projects": [],
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "Available": null,
        "IsDesc": true,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "Clients": this.clientId?.length > 0 ? this.clientArry : [],
        "Departments": this.department?.Value ? [this.department?.Value] : [],
      }
      this.reportservices.getKraReport(json).subscribe(response => {
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
        "Projects": [],
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "Available": null,
        "IsDesc": true,
        "StartDate": startDate,
        "EndDate": endDate,
        "IsDownload": false,
        "Clients": this.clientId?.length > 0 ? this.clientArry : [],
        "Departments": this.department?.Value ? [this.department?.Value] : [],
      }
      this.reportservices.getKraReport(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    }
  }

  applyFilter() {
    this.blockUI.start('Loading...');
    this.userArrayList = []
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
    this.clientArry = []
    this.clientId?.forEach(a => {
      this.clientArry.push(a.Value)
    })
    this.userId?.forEach(a => {
      this.userArrayList.push(a.Value)
    })
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Projects": [],
      "Available": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
    };
    this.reportservices.getKraReport(json).subscribe(response => {
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
    this.clientId = [];
    this.department = null;
    this.clientArry = [];
    this.userArrayList = [];
    this.userId = []
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Clients": [],
      "Departments": [],
      "Projects": [],
      "Available": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Users": [],
    };
    this.reportservices.getKraReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
    this.table.offset = 0;
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
      "Projects": [],
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Available": null,
      "IsDesc": true,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": true,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getKraExportReport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "KraReport.xlsx");
      this.blockUI.stop()
    });
  }

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
      "Clients": [],
      "Projects": [],
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Available": null,
      "IsDesc": true,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false
    }
    this.reportservices.getKraReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
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
        "Clients": [],
        "Projects": [],
        "Users": [],
        "Available": null,
        "IsDesc": true,
        "StartDate": "",
        "EndDate": "",
        "IsDownload": false
      }
      setTimeout(() => {
        this.reportservices.getKraReport(json).subscribe(response => {
          this.rows = response.ResponseData.List;
          this.totalElements = response.ResponseData.TotalCount;
          this.blockUI.stop()
        });
      }, 450);
    });
    this.settingService.getCPAListArray();
    this.settingService.onCPAList.subscribe(response => {
      this.ClientList = response.ResponseData;
      this.ClientList?.forEach(data => {
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

  setPage(pageInfo) {
    this.blockUI.start('Loading...');
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
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "Projects": [],
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Available": null,
      "IsDesc": true,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getKraReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }

  async selectDropdown(selectOption) {
    this.blockUI.start('Loading...');
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
    this.selectedOption = parseInt(selectOption);
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "Projects": [],
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Available": null,
      "IsDesc": true,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getKraReport(json).subscribe(response => {
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