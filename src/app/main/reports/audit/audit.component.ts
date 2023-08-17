import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { ReportService } from '../reports.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subject } from 'rxjs';
import { SettingsService } from 'app/main/settings/settings.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {


  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  private _unsubscribeAll: Subject<any>;
  public basicDPdata;
  totalElements = 0;
  Number = 0;
  size = 10; maxDate;
  public monthFirstdate;
  public monthLastDate
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;





  constructor(
    private _coreConfigService: CoreConfigService,
    private reportservices: ReportService,
    private datePipe: DatePipe,
    public formatter: NgbDateParserFormatter) {
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
          "IsDesc": 1,
          "IsDownload": false,
          "UserIdsForFilter": [],
          "DepartmentsFilter": [],
          "ClientFilter": [],
          "ProjectFilter": [],
          "StartDate": startDate,
          "EndDate": endDate,
        }
        this.reportservices.getAuditDataReport(json).subscribe(response => {
          this.rows = response.ResponseData.List;
          this.rows.forEach(d => {
            d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
            d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd');
            d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
            d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
          })
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
          "IsDesc": 1,
          "IsDownload": false,
          "UserIdsForFilter": [],
          "DepartmentsFilter": [],
          "ClientFilter": [],
          "ProjectFilter": [],
          "StartDate": startDate,
          "EndDate": endDate,
        }
        this.reportservices.getAuditDataReport(json).subscribe(response => {
          this.rows = response.ResponseData.List;
          this.rows.forEach(d => {
            d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
            d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd');
            d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
            d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
          })
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
      "SortColumn": null,
      "IsDesc": 1,
      "IsDownload": true,
      "UserIdsForFilter": [],
      "DepartmentsFilter": [],
      "ClientFilter": [],
      "ProjectFilter": [],
      "StartDate": startDate,
      "EndDate": endDate
    }
    this.reportservices.getAuditDataExportReport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "AuditReport.xlsx");
      this.blockUI.stop()
    });
  }

  searchData() {
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
    this.blockUI.start('Loading...')

    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "IsDownload": false,
      "UserIdsForFilter": [],
      "DepartmentsFilter": [],
      "ClientFilter": [],
      "ProjectFilter": [],
      "StartDate": startDate,
      "EndDate": endDate
    }
    this.reportservices.getAuditDataReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(d => {
        d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
        d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd HH:mm:ss');
        d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
      })
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
    this._coreConfigService.config.subscribe(config => {
      let json = {
        "GlobalSearch": "",
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": 1,
        "IsDownload": false,
        "UserIdsForFilter": [],
        "DepartmentsFilter": [],
        "ClientFilter": [],
        "ProjectFilter": [],
        "StartDate": "",
        "EndDate": ""
      }
      setTimeout(() => {
        this.reportservices.getAuditDataReport(json).subscribe(response => {
          this.rows = response.ResponseData.List;
          this.rows.forEach(d => {
            d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
            d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd HH:mm:ss');
            d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
            d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
          })
          this.totalElements = response.ResponseData.TotalCount;
          this.blockUI.stop()
        });
      }, 450);
    });
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
    } else {
      endDate = startDate
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "SortColumn": null,
      "IsDesc": 1,
      "IsDownload": false,
      "UserIdsForFilter": [],
      "DepartmentsFilter": [],
      "ClientFilter": [],
      "ProjectFilter": [],
      "StartDate": startDate,
      "EndDate": endDate
    }
    this.reportservices.getAuditDataReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(d => {
        d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
        d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd HH:mm:ss');
        d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
      })
      this.totalElements = response.ResponseData.TotalCount;
    });
    this.blockUI.stop();
  }

  async selectDropdown(selectOption) {
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
      endDate = startDate
    }
    this.blockUI.start('Loading...');
    this.selectedOption = parseInt(selectOption);
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": 1,
      "IsDownload": false,
      "UserIdsForFilter": [],
      "DepartmentsFilter": [],
      "ClientFilter": [],
      "ProjectFilter": [],
      "StartDate": startDate,
      "EndDate": endDate
    }
    this.reportservices.getAuditDataReport(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(d => {
        d["loginDate"] = this.datePipe.transform((d.LoginDate), 'yyyy-MM-dd HH:mm:ss');
        d["taskCreatedDate"] = this.datePipe.transform((d.TaskCreatedDate), 'yyyy-MM-dd HH:mm:ss');
        d["loginTime"] = this.datePipe.transform((d.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        d["logoutTime"] = this.datePipe.transform((d.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}