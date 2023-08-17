import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { CoreConfigService } from "@core/services/config.service";
import { NgbDate, NgbDateParserFormatter, NgbDropdown, NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ReportService } from "../reports.service";
import { SettingsService } from "app/main/settings/settings.service";
@Component({
  selector: "app-cpa-report",
  templateUrl: "./cpa-report.component.html",
  styleUrls: ["./cpa-report.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CpaReportComponent implements OnInit {
  
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public searchValue = "";
  public userData = JSON.parse(localStorage.getItem("userData"));
  private _unsubscribeAll: Subject<any>;
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  public exportCSVData: [] = [];
  public workType;
  public newworkType;
  public billingType;
  public typeOfWorkArray = [];
  public workTypeId;
  public billingTypeArray = [];
  public billingTypeId;
  public newbillingType;
  public department: any;
  public isOpenWork: boolean;
  public userDepartment = []
  public basicDPdata;
  totalElements = 0;
  Number = 0;
  size = 10;
  public startDate;
  public endDate;
  public isShowFilter: boolean;
  maxDate
  public monthFirstdate;
  public monthLastDate
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private _coreConfigService: CoreConfigService,
    private reportservices: ReportService,
    private datePipe: DatePipe,
    public formatter: NgbDateParserFormatter,
    public config: NgbDropdownConfig,
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
      startDate = startDate.toISOString();
    } else {
      startDate = null;
    }
    var endDate;
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString();
    } else {
      endDate = null;
    }
    if(this.searchValue.length >= 3){
      let json = {
        GlobalSearch: this.searchValue,
        PageNo: 1,
        PageSize: this.selectedOption,
        SortColumn: null,
        TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
        BillType: this.billingType?.Value ? this.billingType?.Value : null,
        Clients: [],
        Available: null,
        IsDesc: 1,
        StartDate: startDate,
        EndDate: endDate,
        Departments: this.department?.Value ? [this.department?.Value] : [],
        IsDownload: false
      };
      this.getAllCpaReport(json);
      this.table.offset = 0;
    }else if(this.searchValue.length == 0){
      let json = {
        GlobalSearch: this.searchValue,
        PageNo: 1,
        PageSize: this.selectedOption,
        SortColumn: null,
        TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
        BillType: this.billingType?.Value ? this.billingType?.Value : null,
        Clients: [],
        Available: null,
        IsDesc: 1,
        StartDate: startDate,
        EndDate: endDate,
        Departments: this.department?.Value ? [this.department?.Value] : [],
        IsDownload: false
      };
      this.getAllCpaReport(json);
      this.table.offset = 0;
    }
  }

  onDateSelection(date: NgbDate) {
    this.isDisable = false;
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate && !this.toDate && date && date.after(this.fromDate)
    ) {
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
    return (date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) ||this.isInside(date) || this.isHovered(date));
  }
  exportReport() {
    this.blockUI.start("Loading...");
    if (this.fromDate != null || this.fromDate != undefined) {
      this.startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      this.startDate = this.startDate.toISOString();
    } else {
      this.startDate = null;
    }
    if (this.toDate != null || this.toDate != undefined) {
      this.endDate = new Date(
        Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day)
      );
      this.endDate = this.endDate.toISOString();
    } else {
      this.endDate = this.startDate;
    }
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: true
    };
    this.reportservices.getCpareExportports(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ClientReport.xlsx");
      this.blockUI.stop();
    });
  }

  searchData() {
    this.blockUI.start("Loading...");
    if (this.fromDate != null || this.fromDate != undefined) {
      this.startDate = new Date(
        Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day)
      );
      this.startDate = this.startDate.toISOString();
    } else {
      this.startDate = null;
    }
    if (this.toDate != null || this.toDate != undefined) {
      this.endDate = new Date(
        Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day)
      );
      this.endDate = this.endDate.toISOString();
    } else {
      this.endDate = this.startDate;
    }
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: false
    };
    this.getAllCpaReport(json);
    this.blockUI.stop();
    this.table.offset = 0;
  }

  getAllCpaReport(json) {
    this.blockUI.start("Loading...");
    this.reportservices.getCpareports(json).subscribe((response) => {
      this.rows = response.ResponseData.List;
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop();
    });
  }

  ngOnInit(): void {
    this.blockUI.start("Loading...");
    var date = new Date();
    this.monthFirstdate = this.datePipe.transform((new Date(date.getFullYear(), date.getMonth(), 1)), 'yyyy-MM-dd') ;
    this.monthLastDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') ;
    this.basicDPdata = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config) => {
      let json = {
        GlobalSearch: "",
        PageNo: 1,
        PageSize: this.selectedOption,
        SortColumn: null,
        TypeOfWork: null,
        BillType: null,
        Clients: [],
        Available: null,
        IsDesc: 1,
        StartDate: "",
        EndDate: "",
        Departments: [],
        IsDownload: false
      };
      this.getAllCpaReport(json);
      setTimeout(()=>{
        this.blockUI.stop();
      })
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

  applyFilter() {
    this.workType = this.newworkType;
    this.billingType = this.newbillingType;
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: false
    };
    this.getAllCpaReport(json);
    this.table.offset = 0;
  }

  resetFilter() {
    this.workType = null;
    this.billingType = null;
    this.department = null
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: this.selectedOption,
      SortColumn: null,
      TypeOfWork: null,
      BillType: null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: [],
      IsDownload: false
    };
    this.getAllCpaReport(json);
    this.table.offset = 0;
  }

  setPage(pageInfo) {
    if (this.fromDate != null || this.fromDate != undefined) {
      this.startDate = new Date(Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
      this.startDate = this.startDate.toISOString();
    } else {
      this.startDate = null;
    }
    if (this.toDate != null || this.toDate != undefined) {
      this.endDate = new Date(
        Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day)
      );
      this.endDate = this.endDate.toISOString();
    } else {
      this.endDate = this.startDate;
    }
    let json = {
      PageNo: pageInfo.offset + 1,
      PageSize: pageInfo.limit,
      GlobalSearch: this.searchValue,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: false
    };
    this.getAllCpaReport(json);
  }

  async selectDropdown(selectOption) {
    if (this.fromDate != null || this.fromDate != undefined) {
      this.startDate = new Date(
        Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day)
      );
      this.startDate = this.startDate.toISOString();
    } else {
      this.startDate = null;
    }
    if (this.toDate != null || this.toDate != undefined) {
      this.endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      this.endDate = this.endDate.toISOString();
    } else {
      this.endDate = this.startDate;
    }
    this.selectedOption = parseInt(selectOption)
    let json = {
      GlobalSearch: this.searchValue,
      PageNo: 1,
      PageSize: selectOption,
      SortColumn: null,
      TypeOfWork: this.workType?.Value ? this.workType?.Value : null,
      BillType: this.billingType?.Value ? this.billingType?.Value : null,
      Clients: [],
      Available: null,
      IsDesc: 1,
      StartDate: this.startDate,
      EndDate: this.endDate,
      Departments: this.department?.Value ? [this.department?.Value] : [],
      IsDownload: false
    };
    this.getAllCpaReport(json);
    this.table.offset = 0;
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}