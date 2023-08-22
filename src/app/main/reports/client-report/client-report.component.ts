import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { ReportService } from '../reports.service';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DatePipe } from '@angular/common';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ClientReportComponent implements OnInit {
  
  public sidebarToggleRef = false;
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
  totalElements = 0;
  Number = 0;
  size = 10;
  public workType;
  public newworkType;
  public billingType;
  public typeOfWorkArray = [];
  public workTypeId;
  public billingTypeArray = [];
  public billingTypeId;
  public newbillingType;
  public department: any;
  public userDepartment = [];
  public ClientList = []
  public clientId = [];
  public clientArry = []
  public maxDate;
  public monthFirstdate;
  public monthLastDate
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private _coreConfigService: CoreConfigService,
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
      this.blockUI.start('Loading...')
       let json = {
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "GlobalSearch": this.searchValue,
        "SortColumn": null,
        "Clients": this.clientId?.length > 0 ? this.clientArry : [],
        "Projects": [],
        "IsDesc": 1,
        "StartDate": startDate,
        "EndDate": endDate,
        "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
        "BillType": this.billingType?.Value ? this.billingType?.Value : null,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
      }
      this.reportservices.getClientReports(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    }else if(this.searchValue.length == 0){
      this.blockUI.start('Loading...')
      let json = {
       "PageNo": 1,
       "PageSize": this.selectedOption,
       "GlobalSearch": this.searchValue,
       "SortColumn": null,
       "Clients": this.clientId?.length > 0 ? this.clientArry : [],
       "Projects": [],
       "IsDesc": 1,
       "StartDate": startDate,
       "EndDate": endDate,
       "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
       "BillType": this.billingType?.Value ? this.billingType?.Value : null,
       "Departments": this.department?.Value ? [this.department?.Value] : [],
     }
     this.reportservices.getClientReports(json).subscribe(response => {
       this.rows = response.ResponseData.List;
       this.totalElements = response.ResponseData.TotalCount;
       this.blockUI.stop()
     });
    }
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
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "SortColumn": null,
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": true,
      "UserIds": null,
      "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
      "BillType": this.billingType?.Value ? this.billingType?.Value : null,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getClientExportReports(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ProjectReport.xlsx");
      this.blockUI.stop()
    });
  }
  applyFilter() {
    this.blockUI.start('Loading...')
    this.clientArry = []
    this.clientId?.forEach(a => {
      this.clientArry.push(a.Value)
    })
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
    this.workType = this.newworkType;
    this.billingType = this.newbillingType;
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: this.clientId?.length > 0 ? this.clientArry : [],
      Available: null,
      IsDesc: 1,
      StartDate: startDate,
      EndDate: endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: false
    };
    this.reportservices.getClientReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.blockUI.stop();
    });
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
    this.workType = null;
    this.billingType = null;
    this.department = null;
    this.clientArry = [];
    this.clientId = [];
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: null,
      BillType: null,
      Clients: [],
      Projects: [],
      IsDesc: 1,
      StartDate: startDate,
      EndDate: endDate,
      Departments: [],
      IsDownload: false,
    };
    this.reportservices.getClientReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.blockUI.stop();
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
        "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
        "BillType": this.billingType?.Value ? this.billingType?.Value : null,
        "Clients": [],
        "Projects": [],
        "IsDesc": 1,
        "StartDate": "",
        "EndDate": "",
        "IsDownload": false,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
      }
      this.reportservices.getClientReports(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    });
    this.reportservices.getAllTypeofWork().subscribe((response) => {
      this.typeOfWorkArray = response.ResponseData;
      this.typeOfWorkArray.forEach((data) => {
        data["name"] = data.Label;
        data["id"] = data.Value;
      });
    });
    this.reportservices.getAllBillingType().subscribe((response) => {
      this.billingTypeArray = response.ResponseData;
      this.billingTypeArray.forEach((data) => {
        data["name"] = data.Label;
        data["id"] = data.Value;
      });
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
    }, 200)
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
      "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
      "BillType": this.billingType?.Value ? this.billingType?.Value : null,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Projects": [],
      "IsDesc": 1,
      "StartDate": startDate.toISOString(),
      "EndDate": endDate,
      "IsDownload": false,
    }
    this.reportservices.getClientReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  setPage(pageInfo) {
    var startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      startDate = startDate.toISOString()
    } else {startDate = null}
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else { endDate = null }
    this.blockUI.start('Loading...')
    let json = {
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
      "BillType": this.billingType?.Value ? this.billingType?.Value : null,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Projects": [],
      "IsDesc": 1,
      "StartDate": startDate,
      "EndDate": endDate,
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getClientReports(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  async selectDropdown(selectOption) {
    this.selectedOption = parseInt(selectOption)
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "TypeOfWork": this.workType?.Value ? this.workType?.Value : null,
      "BillType": this.billingType?.Value ? this.billingType?.Value : null,
      "Clients": this.clientId?.length > 0 ? this.clientArry : [],
      "Projects": [],
      "IsDesc": 1,
      "StartDate": "",
      "EndDate": "",
      "IsDownload": false,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
    }
    this.reportservices.getClientReports(json).subscribe(response => {
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