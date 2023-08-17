import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { WorklogsService } from '../worklogs.service';
import { DatePipe } from '@angular/common';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-worklogs-timeline',
  templateUrl: './worklogs-timeline.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WorklogsTimelineComponent implements OnInit {
  // Public
  public sidebarToggleRef = false;
  public rows;
  public totalTime;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public basicDPdata;
  public maxtodayDate;
  private _unsubscribeAll: Subject<any>;
  public TimelineDate;
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  maxDate
  totalElements = 10; Number = 0;
  public monthFirstdate;
  public monthLastDate
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private worklogsService: WorklogsService,
    private _coreConfigService: CoreConfigService,
    private datePipe: DatePipe,
    public formatter: NgbDateParserFormatter,
  ) {
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
    this._unsubscribeAll = new Subject();
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.searchValue = val;
    if(this.searchValue.length >= 3){
      let json = {
        "PageNo": 1,
        "PageSize": 10,
        "GlobalSearch": this.searchValue,
        "TimelineDate": new Date(),
        "UserId": parseInt(localStorage.getItem('userId')),
        "CPAId": null,
        "ClientId": null,
        "CPAList": null,
        "ClientList": [],
        "TaskList": [],
        "ProcessList": null,
        "SubProcessList": [],
        "IsDownload":false
        }
      this.worklogsService.getTImelieDate(json);
      this.table.offset = 0;
    }else if(this.searchValue.length == 0){
      let json = {
        "PageNo": 1,
        "PageSize": 10,
        "GlobalSearch": this.searchValue,
        "TimelineDate": new Date(),
        "UserId": parseInt(localStorage.getItem('userId')),
        "CPAId": null,
        "ClientId": null,
        "CPAList": null,
        "ClientList": [],
        "TaskList": [],
        "ProcessList": null,
        "SubProcessList": [],
        "IsDownload":false
        }
      this.worklogsService.getTImelieDate(json);
      this.table.offset = 0;
    }
  }
  async selectDropdown(selectOption) {
    this.selectedOption = parseInt(selectOption);
    this.blockUI.start('Loading...')
    let json = {
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "GlobalSearch": this.searchValue,
      "TimelineDate": new Date(),
      "UserId": parseInt(localStorage.getItem('userId')),
      "CPAId": null,
      "ClientId": null,
      "CPAList": null,
      "ClientList": [],
      "TaskList": [],
      "ProcessList": null,
      "SubProcessList": [],
      "IsDownload":false
    }
    this.worklogsService.getTImelieDate(json);
    this.worklogsService.OnTimeLineChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      if (response.length != 0) {
        this.rows = response?.ResponseData?.List;
        this.totalElements = response?.ResponseData?.TotalCount
        this.totalTime = response?.ResponseData?.TotalEventTime
        this.rows.forEach(data => {
          if (data.ProcessName == null) {
            data['TaskName'] = data.TaskName
          } else {
            data['TaskName'] = data.ProcessName
          }
          data['isManual'] = data.IsManual == true ? "Yes" : 'No'
        })
      }
      this.blockUI.stop()
    });
  }
  exportReport() {
    this.blockUI.start('Loading...');
    let startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(
        Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day)
      );
      startDate = startDate.toISOString();
    } else {
      startDate = null;
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = startDate
    }
    let json = {
      "UserId": null,
      "CPAId": null,
      "ClientId": null,
      "PageNo": 1,
      "PageSize": 10,
      "StartDate": startDate,
      "EndDate": endDate,
      "GlobalSearch": this.searchValue,
      "IsDownload": true
    }
    this.worklogsService.getTImelieDateExport(json, 'blob').subscribe((response) => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "TimeLineReport.xlsx");
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
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }
  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }
  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date));
  }
  searchData() {
    this.blockUI.start('Loading...')
    let startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(
        Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day)
      );
      startDate = startDate.toISOString();
    } else {
      startDate = null;
    }
    var endDate
    if (this.toDate != null || this.toDate != undefined) {
      endDate = new Date(Date.UTC(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
      endDate = endDate.toISOString()
    } else {
      endDate = startDate
    }
    let json = {
      "UserId": null,
      "CPAId": null,
      "ClientId": null,
      "PageNo": 1,
      "PageSize": 10,
      "StartDate": startDate,
      "EndDate": endDate,
      "GlobalSearch": this.searchValue,
      "IsDownload": false
    }
    this.worklogsService.getTImelieDate(json);
    this.blockUI.stop()
  }
  setPage(pageInfo) {
    this.blockUI.start('Loading...');
    let startDate;
    if (this.fromDate != null || this.fromDate != undefined) {
      startDate = new Date(
        Date.UTC(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day)
      );
      startDate = startDate.toISOString();
    } else {
      startDate = null;
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
      "StartDate": startDate,
      "EndDate": endDate,
      "UserId": parseInt(localStorage.getItem('userId')),
      "CPAId": null,
      "ClientId": null,
      "CPAList": null,
      "ClientList": [],
      "TaskList": [],
      "ProcessList": null,
      "SubProcessList": [],
      "IsDownload":false
    }
    this.worklogsService.getTImelieDate(json);
    this.worklogsService.OnTimeLineChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      if (response.length != 0) {
        this.rows = response?.ResponseData?.List;
        this.totalElements = response?.ResponseData?.TotalCount
        this.totalTime = response?.ResponseData?.TotalEventTime
        this.rows.forEach(data => {
          if (data.ProcessName == null) {
            data['TaskName'] = data.TaskName
          } else {
            data['TaskName'] = data.ProcessName
          }
          data['isManual'] = data.IsManual == true ? "Yes" : 'No'
        })
        this.blockUI.stop()
      }
    });
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    var date = new Date();
    this.monthFirstdate = this.datePipe.transform((new Date(date.getFullYear(), date.getMonth(), 1)), 'yyyy-MM-dd');
    this.monthLastDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxtodayDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    let json = {
      "UserId": parseInt(localStorage.getItem('userId')),
      "CPAId": null,
      "ClientId": null,
      "PageNo": 1,
      "PageSize": 10,
      "CPAList": null,
      "ClientList": [],
      "TaskList": [],
      "ProcessList": null,
      "SubProcessList": [],
      "GlobalSearch": null,
      "IsDownload":false
    }
    this.worklogsService.getTImelieDate(json);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.worklogsService.OnTimeLineChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
        if (response.length != 0) {
          this.rows = response?.ResponseData?.List;
          this.totalElements = response?.ResponseData?.TotalCount
          this.totalTime = response?.ResponseData?.TotalEventTime
          this.rows.forEach(data => {
            if (data.ProcessName == null) {
              data['TaskName'] = data.TaskName
            } else {
              data['TaskName'] = data.ProcessName
            }
            data['isManual'] = data.IsManual == true ? "Yes" : 'No'
          })
        }
        setTimeout(() => { this.blockUI.stop() }, 1000)
      });
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}