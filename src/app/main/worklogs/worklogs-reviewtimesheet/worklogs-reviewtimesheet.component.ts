import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { WorklogsService } from '../worklogs.service';
import { DatePipe } from '@angular/common';
import { SettingsService } from 'app/main/settings/settings.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-worklogs-reviewtimesheet',
  templateUrl: './worklogs-reviewtimesheet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WorklogsReviewTimeSheetComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public basicDPdata;
  public statusList = [];
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[1].TabData[2];
  public maxtodayDate
  private _unsubscribeAll: Subject<any>;
  selected = [];
  SelectionType = SelectionType;
  isShowButton: boolean = false;
  public TimelineDate;
  public userListData = [];
  public statusArray = []
  public headerCheckboxable = true;
  public selectMultiLimitedSelected = [];




  public totalElements = 10;
  public Number = 0;
  public TotalQty;
  public TotalStdHours;
  public TotalModifiedHours;
  totalTime;
  statusChangeId: any = []
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private worklogsService: WorklogsService,
    private _coreConfigService: CoreConfigService,
    private datePipe: DatePipe,
    private settingService: SettingsService,
    private toastrService: ToastrService
  ) {
    this._unsubscribeAll = new Subject();
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    selected.forEach(data => {
      if (data.ApprovalStatus == "SUBMITTED" && data.ApprovalId == 22) {
        this.selected.push(data);
      }
    });
    this.selected = this.selected;
    if (this.selected.length > 0) {
      this.isShowButton = true;
    } else {
      this.isShowButton = false;
    }
  }
  getStatusList() {
    this.worklogsService.getStatus().subscribe(res => {
      this.statusArray = res.ResponseData})
  }
  changeStatus(data) {
    this.statusChangeId = data.target.value ? [parseInt(data.target.value)] : []
  }
  userIdAray = []
  searchData(data, userIds) {
    this.userIdAray = []
    this.blockUI.start('Loading...')
    this.rows = [];
    this.selected = []
    this.isShowButton = false;
    userIds.forEach(user => { this.userIdAray.push(user.id) });
    if (data) {
      const date = new Date(Date.UTC(data?.year, data?.month - 1, data?.day));
      this.TimelineDate = date;
    } else {
      this.TimelineDate = data;
    }
    this.getWorklogReviewData(this.TimelineDate, this.userIdAray, this.statusChangeId, 1, 10);
  }
  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:00`;
  }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  displayCheck(row) {
    return row.ApprovalStatus != "-" && row.ApprovalStatus != 'APPROVED' && row.ApprovalStatus != 'REJECTED' && row.ApprovalStatus != "PARTIALLY SUBMITTED" && row.ApprovalStatus != "NOT SUBMITTED"
  }
  async selectDropdown(selectOption) {
    this.selectedOption = parseInt(selectOption);
    this.blockUI.start('Loading...')
    this.getWorklogReviewData(this.TimelineDate, this.userIdAray, [], 1, this.selectedOption);
  }
  rejectWorkPlan() {
    let workplanIds = []
    this.selected.forEach(data => {
      let obj = {
        'WorkPlanId': data.WorkPlanId,
        "Status": 21,
      }
      workplanIds.push(obj)
    })
    let json = {
      "SelectedArray": workplanIds,
      "RejectedComment": null
    }
    this.blockUI.start('Loading...')
    this.worklogsService.submitApprove(json).subscribe(res => {
      if (res?.ResponseStatus == 'Success') {
        setTimeout(() => {
          this.toastrService.success('You have successfully rejected work plan', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true});
          this.blockUI.stop()
        }, 1500);
      } else {
        this.toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
        this.blockUI.stop()
      }
      if (this.TimelineDate) {
        this.getWorklogReviewData(this.TimelineDate, this.userIdAray, this.statusChangeId, 1, 10)
      } else {
        this.getWorklogReviewData(new Date(), this.userIdAray, this.statusChangeId, 1, 10)
       }
       this.selected = [];
       this.isShowButton = false;
    });
  }
  saveWorkplan() {
    let workplanIds = []
    this.selected.forEach(data => {
      let obj = {
        'WorkPlanId': data.WorkPlanId,
        "Status": 20,
      }
      workplanIds.push(obj)
    })
    let json = {
      "SelectedArray": workplanIds,
      "RejectedComment": null
    }
    this.blockUI.start('Loading...')
    this.worklogsService.submitApprove(json).subscribe(res => {
      if (res?.ResponseStatus == 'Success') {
        setTimeout(() => {
          this.toastrService.success('You have successfully accepted the work. ', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true});
          this.blockUI.stop()
        }, 1500);
      } else {
        this.toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true});
        this.blockUI.stop()
      }
      if (this.TimelineDate) {
        this.getWorklogReviewData(this.TimelineDate, this.userIdAray, this.statusChangeId, 1, 10)
      } else {
        this.getWorklogReviewData(new Date(), this.userIdAray, this.statusChangeId, 1, 10)
      }
      this.selected = [];
      this.isShowButton = false;
     })
  }
  toggleSidebar(name, event, data): void {
    this._coreSidebarService.getSidebarRegistry('worklogs-timesheet-sidebar').toggleOpen();
    this.worklogsService.isCheckDataForEdit("isWorkplanReviewer");
    this.worklogsService.isEditofDailyWork(event);
    this.worklogsService.isEditDataofDailyWork(data);
  }
  getWorklogReviewData(data, userIds, ReviewerStatus, Index, PageSize) {
    let json = {
      "Index": Index,
      "PageSize": PageSize,
      "ApprovedStatus": null,
      "UserIds": userIds,   // filter for getting particular user review logs
      "TimelineDate": data,
      "CPAList": [],
      "ClientList": [],
      "TaskList": [],
      "ProcessList": [],
      "SubProcessList": [],
      "ReviewerStatus": ReviewerStatus.length > 0 ? ReviewerStatus : [],
      "WorkPlanStatus": [],
      "IsManual": null,
      "GlobalSearch": ""
    }
    this.worklogsService.getWorkPlanApproveList(json)
    this.blockUI.start('Loading...')
    this.worklogsService.OnReviewTimeChange.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
      if (response.length != 0) {
        this.rows = response?.ResponseData?.List;
        this.totalTime = response?.ResponseData?.TotalEventTime ? response?.ResponseData?.TotalEventTime : 0;
        this.totalElements = response?.ResponseData?.TotalCount;
        this.TotalQty = response?.ResponseData?.TotalQty ? response?.ResponseData?.TotalQty : 0;
        this.totalElements = response?.ResponseData?.TotalCount ? response?.ResponseData?.TotalCount : 0;
        this.TotalStdHours = response?.ResponseData?.TotalStdHours ? response?.ResponseData?.TotalStdHours : 0;
        this.TotalModifiedHours = response?.ResponseData?.TotalModifiedHours ? response?.ResponseData?.TotalModifiedHours : 0
        this.rows.forEach((d) => {
          if (d.TaskName != null) {
            d["taskName"] = d.TaskName;
            d["totalTime"] = this.toHoursAndMinutes(d.EstimatedDuration * d.Quantity);
            d["estimatedDuration"] = this.toHoursAndMinutes(d.EstimatedDuration);
          } else {
            d["taskName"] = d.ProcessName;
            d["totalTime"] = this.toHoursAndMinutes(d.EstimatedProcessTime * d.Quantity);
            d["estimatedDuration"] = this.toHoursAndMinutes(d.EstimatedProcessTime);
          }
          d["SubprocessName"] = d.SubprocessName == null || d.SubprocessName == "" ? "-" : d.SubprocessName;
          d["EventDuration"] = d.EventDuration == null ? "-" : d.EventDuration;
          console.log('d',d);
          d['isEdit'] = (d.ApprovalStatus == "-" || d.ApprovalStatus == 'APPROVED' || d.ApprovalStatus == 'REJECTED') ? true : false
          d["Reason"] = d.Reason == null ? "-" : d.Reason;
          d["Efficiency"] = d.Efficiency == null ? "-" : d.Efficiency;
          d["ClientName"] = d.ClientName == "" ? "-" : d.ClientName;
          d["CPAName"] = d.CPAName == "" ? "-" : d.CPAName;
          d["ApprovalStatus"] = d.ApprovalStatus == "" ? "-" : d.ApprovalStatus;
          d["Description"] = d.Description == "" ? "-" : d.Description;
          //d["Quantity"] = d.Quantity;
          console.log('d',d);
          d["StatusName"] = d.StatusName == "" ? "-" : d.StatusName;
          d["createddate"] = this.datePipe.transform((d.CreatedDate), 'yyyy-MM-dd HH:mm:ss');
          d["submitteddate"] = this.datePipe.transform((d.SubmittedDate), 'yyyy-MM-dd HH:mm:ss');
          d["startDateTime"] = this.datePipe.transform((d.StartDateTime), 'yyyy-MM-dd HH:mm:ss');
          d["endDateTime"] = this.datePipe.transform((d.EndDateTime), 'yyyy-MM-dd HH:mm:ss');
          d['isManual'] = d.IsManual == true ? "Yes" : 'No'
        });
        let filtered = this.rows.filter(data => data?.ApprovalStatus == 'SUBMITTED');
        if (filtered.length > 0) {
          this.headerCheckboxable = true
        } else {this.headerCheckboxable = false}
        this.blockUI.stop()
      }
    });
  }
  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "Index": 1,
      "PageSize": this.selectedOption,
      "ApprovedStatus": null,
      "UserIds": this.userIdAray.length > 0 ? this.userIdAray : [],   // filter for getting particular user review logs
      "TimelineDate": this.TimelineDate,
      "CPAList": [],
      "ClientList": [],
      "TaskList": [],
      "ProcessList": [],
      "SubProcessList": [],
      "ReviewerStatus": this.statusChangeId.length > 0 ? this.statusChangeId : [],
      "WorkPlanStatus": [],
      "IsManual": null,
      "GlobalSearch": "",
      "IsDownload": true,
    }
    this.worklogsService.getWorkPlanApproveListExport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response,"ReviewTimeSheetReport.xlsx");
      this.blockUI.stop()
    });
  }
  getUserListData() {
    this.worklogsService.getUserList().subscribe(res => {
      this.userListData = res.ResponseData;
      this.userListData.forEach(data => {
        data['name'] = data.Label
        data['id'] = data.Value
      })
    })
  }
  setPage(pageInfo) {
    this.blockUI.start('Loading...')
    const date = new Date();
    this.maxtodayDate = {
      year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()
    };
    if (this.TimelineDate) {
      this.getWorklogReviewData(this.TimelineDate, this.userIdAray, this.statusChangeId, pageInfo.offset + 1, pageInfo.limit);
    } else {
      this.getWorklogReviewData(new Date(), this.userIdAray, this.statusChangeId, pageInfo.offset + 1, pageInfo.limit);
    }
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    const date = new Date();
    this.maxtodayDate = {
      year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()
    };
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config) => {
      setTimeout(() => {
        this.settingService.getDataTableRowsStatus();
        this.settingService.onStatusListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
          this.statusList = response?.ResponseData?.List;
          this.totalTime = response?.ResponseData?.TotalEventTime;
        });
        if (this.TimelineDate) {
          this.getWorklogReviewData(this.TimelineDate, [], [], 1, 10)
        } else {
          this.getWorklogReviewData(new Date(), [], [], 1, 10);
          this.getUserListData()
          this.getStatusList()
        }
      }, 500);
    });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}