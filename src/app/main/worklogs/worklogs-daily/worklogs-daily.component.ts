import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent, SelectionType } from "@swimlane/ngx-datatable";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CoreConfigService } from "@core/services/config.service";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";
import { WorklogsService } from "../worklogs.service";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { SettingsService } from "app/main/settings/settings.service";
import { DatePipe } from "@angular/common";
import moment from "moment";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BlockUI, NgBlockUI } from "ng-block-ui";
@Component({
  selector: "app-worklogs-daily",
  templateUrl: "./worklogs-daily.component.html",
  styleUrls: ["./worklogs-daily.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class WorklogsDailyComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public statusValue = "";
  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = "";
  public checkListData = [];
  public commentListData = [];
  public statusList = [];
  public dataPlan;
  public TimelineSelectedDate;
  public TimelineDate = null;
  public isShowStop = false;
  public worklogtotaldata;
  public taskName;
  public reason: any;
  public refreshData: any;
  public breaktype: boolean = false;
  public totalbreaktime;
  public isDateShow: boolean = true;
  private _unsubscribeAll: Subject<any>;
  public basicDPdata;
  public maxtodayDate;
  public currentDateTime;
  playpause: boolean[] = [];
  EventType: number;
  taskid: number;
  selected = [];
  SelectionType = SelectionType;
  headerCheckboxable = true;
  isShowButton: boolean = false;
  IsCreateWorkPlanButtonEnable: boolean = true;
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[1].TabData[1];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  public totalTime: any;
  public totalElements = 10;
  public Number = 0;
  constructor(
    private settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private worklogsService: WorklogsService,
    private toastrService: ToastrService,
    private datePipe: DatePipe,
    private modalService: NgbModal
  ) {
    this._unsubscribeAll = new Subject();
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    selected.forEach(data => {
      if ((data?.ApprovalDetails?.Label != 'SUBMITTED' && data?.ApprovalDetails?.Label != 'APPROVED' && data?.ApprovalDetails?.Label != 'REJECTED')) {
        this.selected.push(data)}
    });
    this.selected = this.selected;
    if (this.selected.length > 0) {
      this.isShowButton = true;
    } else {
      this.isShowButton = false;
    }
  }
  playpausetoggle(data) {
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    if (data.Task.Value == 0) {
      this.taskid = data.Process.Value;
    } else if (data.Process.Value == 0) {
      this.taskid = data.Task.Value;
    }
    if (data.EventType == 0) {
      this.EventType = 11;
    }
    let json = {
      WorkPlanId: data.WorkPlanId,
      TaskId: this.taskid,
      EventTime: utcDate,
      EventType: this.EventType, // (11 - start), (13 - continue), (15 - breakstart)
      EventDuration: data.EventDuration,
    };
    if (data.EventType == 0) {
      json["EventType"] = 11;
      json["EventDuration"] = null;
      if (this.breaktype == true) {
        let json = {
          "UserId": localStorage.getItem('userId'),
          "CreatedOn": utcDate,
          "EventType": 16
        }
        this.worklogsService.brakStartAndStop(json).subscribe((res) => {
          let timeDate;
          if (this.TimelineSelectedDate) {
            timeDate = this.TimelineSelectedDate;
          } else {
            timeDate = this.TimelineDate;
          }
          this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
        });
      }
      this.worklogsService.startcontinue(json).subscribe((res) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      });
      this.rows.forEach((record) => {
        if (data.WorkPlanId != record["WorkPlanId"] && (record["EventType"] == 13 || record["EventType"] == 11)) {
          let trueRecord = {
            WorkPlanId: record["WorkPlanId"],
            TaskId: record["taskid"],
            EventTime: utcDate,
            EventType: record["EventType"] == 13 || record["EventType"] == 11 ? 12 : record["EventType"], // (11 - start), (13 - continue), (15 - breakstart)
            EventDuration: null,
            IsStop: record["IsStop"] == null ? "PAUSE" : record["IsStop"],
          };
          this.worklogsService.stopworklog(trueRecord).subscribe((res) => { });
        }
      });
      // STATUS CHANGE - In progress
      let statusJson = {
        WorkPlanId: parseInt(data.WorkPlanId),
        CPAId: data.CPA.Value,
        ClientId: data.Client.Value,
        TaskId: data.Task.Value == 0 ? null : data.Task.Value,
        ProcessId: data.Process.Value == 0 ? null : data.Process.Value,
        Quantity: data.Quantity,
        StatusId: 27,
        Description: data.Description,
        SubprocessId: data.SubProcess?.Value == 0 ? null : data.SubProcess?.Value
      };
      this.worklogsService.addDailyWorkPlan(statusJson).subscribe((res: any) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      });
    } else if (data.EventType == 12) {
      json["EventType"] = 13;
      json["EventDuration"] = data.EventDuration;
      this.worklogsService.startcontinue(json).subscribe((res) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption).then((res: any) => {
          if (res) {
            this.rows = res.ResponseData.WorkPlanList
            this.rows.forEach((record) => {
              if (data.WorkPlanId != record["WorkPlanId"] && (record["EventType"] == 13 || record["EventType"] == 11)) {
                let trueRecord = {
                  WorkPlanId: record["WorkPlanId"],
                  TaskId: record["taskid"],
                  EventTime: utcDate,
                  EventType: record["EventType"] == 13 || record["EventType"] == 11 ? 12 : record["EventType"], // (11 - start), (13 - continue), (15 - breakstart)
                  EventDuration: null,
                  IsStop: record["IsStop"] == null ? "PAUSE" : record["IsStop"],
                };
                this.worklogsService.stopworklog(trueRecord).subscribe((res) => {
                  if (res) {
                    let timeDate;
                    if (this.TimelineSelectedDate) {
                      timeDate = this.TimelineSelectedDate;
                    } else {
                      timeDate = this.TimelineDate;
                    }
                    this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
                  }
                });
              }
            });
          }
        });
      });
      if (this.breaktype == true) {
        let json = {
          "UserId": localStorage.getItem('userId'),
          "CreatedOn": utcDate,
          "EventType": 16
        }
        this.worklogsService.brakStartAndStop(json).subscribe((res) => {
          let timeDate;
          if (this.TimelineSelectedDate) {
            timeDate = this.TimelineSelectedDate;
          } else {
            timeDate = this.TimelineDate;
          }
          this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
        });
      }
      localStorage.setItem("savebreakrecord", JSON.stringify(data));
    } else if (data.EventType == 11 || data.EventType == 13) {
      json["EventType"] = 12;
      json["EventDuration"] = null;
      this.worklogsService.stopworklog(json).subscribe((res) => {
        if (res) {
          let timeDate;
          if (this.TimelineSelectedDate) {
            timeDate = this.TimelineSelectedDate;
          } else {
            timeDate = this.TimelineDate;
          }
          this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
        }
      });
    }
  }
  breaktoggle() {
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    if (this.breaktype == true) {
      if (this.rows) {
        let data = this.rows.filter((d) => d.EventType === 12 && d.IsStop == 'BREAK');
        if (data.length > 0) {
          let json = {
            WorkPlanId: data[0].WorkPlanId,
            TaskId: data[0].TaskId,
            EventTime: utcDate,
            EventType: 13, // (12 - stop) , (16 - breakstop)
            EventDuration: data[0].EventDuration,
          };
          this.worklogsService.startcontinue(json).subscribe((res) => {
            let timeDate;
            if (this.TimelineSelectedDate) {
              timeDate = this.TimelineSelectedDate;
            } else {
              timeDate = this.TimelineDate;
            }
            this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
          });
        }
      }
      let json = {
        "UserId": localStorage.getItem('userId'),
        "CreatedOn": utcDate,
        "EventType": 16
      }
      this.worklogsService.brakStartAndStop(json).subscribe((res) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      });
    } else if (this.breaktype == false) {
      if (this.rows) {
        let data = this.rows.filter((d) => d.EventType === 11 || d.EventType === 13);
        if (data.length > 0) {
          let json = {
            WorkPlanId: data[0].WorkPlanId,
            TaskId: data[0].TaskId,
            EventTime: utcDate,
            EventType: 12, // (12 - stop) , (16 - breakstop)
            EventDuration: null,
            isStop: "BREAK"
          };
          this.worklogsService.stopworklog(json).subscribe((res) => {
            if (res) {
              let timeDate;
              if (this.TimelineSelectedDate) {
                timeDate = this.TimelineSelectedDate;
              } else {
                timeDate = this.TimelineDate;
              }
              this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
            }
          });
        }
      }
      let json = {
        "UserId": localStorage.getItem('userId'),
        "CreatedOn": utcDate,
        "EventType": 15
      }
      this.worklogsService.brakStartAndStop(json).subscribe((res) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      });
    }
  }
  refreshTime(data) {
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    let trueRecord = {
      WorkPlanId: data.WorkPlanId,
      TimelineDate: utcDate,
    };
    this.worklogsService.refreshTime(trueRecord).subscribe((res) => {
      let timeDate;
      if (this.TimelineSelectedDate) {
        timeDate = this.TimelineSelectedDate;
      } else {
        timeDate = this.TimelineDate;
      }
      this.refreshData = res.ResponseData;
      this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption).then((res) => {
        if (res && res) {
          this.rows.forEach((record) => {
            if (this.refreshData.WorkPlanId == record["WorkPlanId"]) {
              record.eventDuration = this.refreshData.EventDuration;
              record.EventDuration = this.refreshData.EventDuration;
            }
          });
        }
      });
    });
  }
  modalOpenBD(modalBD, modalBDONE, data) {
    this.reason = "";
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    if (data.Task.Value == 0) {
      this.taskid = data.Process.Value;
    } else if (data.Process.Value == 0) {
      this.taskid = data.Task.Value;
    }
    if (data.EventType == null) {
      this.EventType = 11;
    }
    let trueRecord = {
      WorkPlanId: data.WorkPlanId,
      TimelineDate: utcDate,
    };
    this.worklogsService.refreshTime(trueRecord).subscribe((res) => {
      let timeDate;
      if (this.TimelineSelectedDate) {
        timeDate = this.TimelineSelectedDate;
      } else {
        timeDate = this.TimelineDate;
      }
      this.refreshData = res.ResponseData;
      this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption).then((res) => {
        if (res && res) {
          setTimeout(() => {
            this.rows.forEach((d) => {
              if (d.WorkPlanId == data.WorkPlanId) {
                this.dataPlan = d;
              }
            });
            if (data.Task.Value == 0) {
              this.taskName = data.Process.Label;
            } else if (data.Process.Value == 0) {
              this.taskName = data.Task.Label;
            }
            this.rows.forEach((record) => {
              if ((this.refreshData != null) && (this.refreshData.WorkPlanId == record.WorkPlanId)) {
                record.eventDuration = this.refreshData.EventDuration;
                record.EventDuration = this.refreshData.EventDuration;
              }
            });
            if (this.dataPlan.totalTime < this.refreshData.EventDuration) {
              this.modalService.open(modalBD, { backdrop: false, centered: true });
            }
            if (this.dataPlan.totalTime > this.refreshData.EventDuration) {
              this.modalService.open(modalBDONE, {
                backdrop: false, centered: true,
              });
            }
          }, 1000);
        }
      });
    });
  }
  modelCommentOpen(modelComment, data) {
    this.modalService.open(modelComment, { backdrop: false, centered: true });
    let json = {
      "WorkPlanId": data.WorkPlanId
    }
    let response = this.worklogsService.getWorkplanComments(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        this.commentListData = res.ResponseData.CommentList;
      }
    })
  }
  openNextModel(modalBDONE, data) {
    this.modalService.open(modalBDONE, {backdrop: false, centered: true});
  }
  SubmitApprove() {
    let workplanIds = [] // Approved = 20, Rejected = 21, Submitted = 22
    this.selected.forEach(data => {
      let obj = {
        'WorkPlanId': data.WorkPlanId,
        "Status": data.Status.Label == 'Completed' ? 22 : 34,
      }
      workplanIds.push(obj)
    })
    let json = {
      "SelectedArray": workplanIds,
      "RejectedComment": null
    }
    this.blockUI.start('Loading...')
    this.worklogsService.submitApprove(json).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.toastrService.success("You have successfully submitted your task", "Success", {
          toastClass: "toast ngx-toastr", closeButton: true,
        });
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
        this.modalService.dismissAll("");
        this.selected = [];
        this.isShowButton = false;
        this.headerCheckboxable = true
        this.ngOnInit()
        this.blockUI.stop()
      } else {
        this.toastrService.error(res.Message, "Error!", {
          toastClass: "toast ngx-toastr", closeButton: true
        });
        this.blockUI.stop()
      }
    })
  }
  Continuetask() {
    if (this.reason != "") {
      let reasonJson;
      reasonJson = {
        WorkPlanId: this.dataPlan.WorkPlanId,
        Comment: this.reason,
        IsComment: false,
      };
      this.worklogsService.addCommentData(reasonJson).subscribe((res) => { });
    }
    if (this.dataPlan.Task.Value == 0) {
      this.taskid = this.dataPlan.Process.Value;
    } else if (this.dataPlan.Process.Value == 0) {
      this.taskid = this.dataPlan.Task.Value;
    }
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    let json = {
      WorkPlanId: this.dataPlan.WorkPlanId,
      TaskId: this.taskid,
      EventTime: utcDate,
      EventType: 12, // (11 - start), (13 - continue), (15 - breakstart)
      EventDuration: null,
      isStop: "STOP",
    };
    this.worklogsService.stopworklog(json).subscribe((res) => {
      // STATUS CHANGE
      let statusJson = {
        WorkPlanId: parseInt(this.dataPlan.WorkPlanId),
        CPAId: this.dataPlan.CPA.Value,
        ClientId: this.dataPlan.Client.Value,
        TaskId: this.dataPlan.Task.Value == 0 ? null : this.dataPlan.Task.Value,
        ProcessId: this.dataPlan.Process.Value == 0 ? null : this.dataPlan.Process.Value,
        Quantity: this.dataPlan.Quantity,
        StatusId: 17,
        Description: this.dataPlan.Description,
        SubprocessId: this.dataPlan.SubProcess?.Value == 0 ? null : this.dataPlan.SubProcess?.Value
      };
      this.worklogsService.addDailyWorkPlan(statusJson).subscribe((res: any) => {
        let timeDate;
        if (this.TimelineSelectedDate) {
          timeDate = this.TimelineSelectedDate;
        } else {
          timeDate = this.TimelineDate;
        }
        this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      });
    });
    this.modalService.dismissAll("");
  }
  openSaveModel(modalSAVE) {
    this.modalService.open(modalSAVE, {
      backdrop: false, centered: true,
    });
  }
  toggleSidebar(name, event, data): void {
    this._coreSidebarService.getSidebarRegistry('worklogs-daily-sidebar').toggleOpen();
    this.worklogsService.isCheckDataForEdit("isWorkplanDaily");
    this.worklogsService.isEditofDailyWork(event);
    this.worklogsService.isEditDataofDailyWork(data);
  }
  async ConfirmTextOpen(data) {
    let that = await this;
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to Delete these record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7367F0",
      cancelButtonColor: "#E42728",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1",
      },
    }).then(function (result) {
      if (result.value) {
        var json = {
          WorkPlanId: data.WorkPlanId,
        };
        that.blockUI.start('Loading...')
        let response = that.worklogsService.deleteWorkPlan(json).subscribe((res) => {
          if (res.ResponseStatus !== "Failure") {
            that.toastrService.success(
              "You have successfully deleted work plan", "Success", {
              toastClass: "toast ngx-toastr", closeButton: true });
            let timeDate;
            if (that.TimelineSelectedDate) {
              timeDate = that.TimelineSelectedDate;
            } else {
              timeDate = that.TimelineDate;
            }
            that.worklogsService.getWorkPlan(timeDate, 1, that.selectedOption);
            that.blockUI.stop()
          } else {
            that.toastrService.error(res.Message, "Error!", {toastClass: "toast ngx-toastr", closeButton: true});
            that.blockUI.stop()
          }
        });
      }
    });
  }
  exportReport() {
    let timeDate;
    if (this.TimelineSelectedDate) {
      timeDate = this.TimelineSelectedDate
    } else {
      timeDate = this.TimelineDate
    }
    this.blockUI.start('Loading...')
    let json = {
      "CPAId": null,
      "ClientId": null,
      "UserId": parseInt(localStorage.getItem('userId')),
      "GlobalSearch": null,
      "Index": 1,
      "PageSize": 50000,
      "TimelineDate": timeDate,
      "IsDownload": true,
    }
    this.worklogsService.getWorkPlanExport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "DailyWorkPlanReport.xlsx");
      this.blockUI.stop()
    })
  }
  selectDropdownList(selectOption) {
    this.selectedOption = parseInt(selectOption);
    this.worklogsService.getWorkPlan(this.TimelineSelectedDate, 1, this.selectedOption);
  }
  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:00`;
  }
  padTo2Digits(num) { return num.toString().padStart(2, "0"); }
  searchData(data) {
    this.blockUI.start('Loading...')
    this.rows = [];
    this.isShowButton = false;
    this.selected = []
    if (data.year != undefined) {
      const date = new Date(Date.UTC(data.year, data.month - 1, data.day));
      this.TimelineSelectedDate = date;
    } else {
      const date = new Date().toISOString();
      this.TimelineSelectedDate = date;
    }
    this.worklogsService.getWorkPlan(this.TimelineSelectedDate, 1, this.selectedOption);
    let d = new Date();
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    let predate;
    if (data.year != undefined) {
      predate = new Date(data.year, data.month - 1, data.day);
    } else {
      predate = today;
    }
    if (today.getTime() < predate.getTime() || today.getTime() == predate.getTime()) {
      this.isDateShow = true;
    } else {
      this.isDateShow = false
    }
    let filtered = this.rows.filter(data => data?.ApprovalDetails?.Value == 0 && data.isDate);
    if (filtered.length > 0) {
      this.headerCheckboxable = true
    } else {
      this.headerCheckboxable = false
    }
    this.blockUI.stop()
  }
  displayCheck(row) {
    return row.Isdisabled != true && row.isDate && row.EventDuration != null
  }
  ngOnInit(): void {
    const date = new Date();
    this.maxtodayDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    setTimeout(() => {
      this.worklogsService.worklogresponsedata.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
        if (response && response.ResponseData) {
          this.breaktype = response.ResponseData.IsBreak;
          this.totalbreaktime = response.ResponseData.TotalBreakTime;
        }
      });
    }, 450);
    let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
    let timeDate;
    if (this.TimelineSelectedDate) {
      timeDate = this.TimelineSelectedDate
    } else {
      timeDate = this.TimelineDate
    }
    this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption).then(res => { });
    let trueRecord = { TimelineDate: utcDate };
    this.worklogsService.refreshTime(trueRecord).subscribe((res) => {
      let timeDate;
      if (this.TimelineSelectedDate) {
        timeDate = this.TimelineSelectedDate;
      } else {
        timeDate = this.TimelineDate;
      }
      this.refreshData = res.ResponseData;
      this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption).then((res) => {
        if (res && res) {
          setTimeout(() => {
            if (this.rows && this.rows.length > 0) {
              this.rows.forEach((record) => {
                if ((this.refreshData != null) && (this.refreshData?.WorkPlanId == record?.WorkPlanId)) {
                  record.eventDuration = this.refreshData.EventDuration;
                }
              });
            }
            this.blockUI.stop()
          }, 300);
        }
      });
    });
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config) => {
      this.blockUI.start('Loading...')
      setTimeout(() => {
        this.settingService.getDataTableRowsStatus();
        this.settingService.onStatusListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
          this.statusList = response;
        });
        this.worklogsService.onDaliyWorkPlanChange.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
          this.totalTime = response.ResponseData?.TotalEventTime;
          if (response.ResponseData?.WorkPlanList && response.ResponseData?.WorkPlanList.length > 0) {
            this.rows = response.ResponseData?.WorkPlanList;
            this.totalElements = response.ResponseData?.TotalCount;
            this.IsCreateWorkPlanButtonEnable = response.ResponseData?.IsCreateWorkPlanButtonEnable
            this.rows.forEach((d) => {
              d['isDate'] = this.isDateShow
              d["CPAName"] = d.CPA.Label;
              d["clientName"] = d.Client.Label;
              d["statusValue"] = d.Status.Value;
              d["statusLabel"] = d.Status.Label;
              d["Createddate"] = this.datePipe.transform((d.CreatedDate), 'yyyy-MM-dd');
              d["ApprovalStatus"] = d.ApprovalDetails.Label;
              d["IsManualLabel"] = !d.IsManual ? 'Auto' : 'Manual';
              d["Isdisabled"] = d?.ApprovalDetails?.Label == 'SUBMITTED' || d?.ApprovalDetails?.Label == 'APPROVED' || d?.ApprovalDetails?.Label == 'REJECTED' ? true : false;
              if (d.Task.Label != null) {
                d["taskName"] = d.Task.Label;
                d["estimatedTime"] = this.toHoursAndMinutes(d.Task.EstimatedDuration);
                d["totalTime"] = this.toHoursAndMinutes(d.Task.EstimatedDuration * d.Quantity);
              } else {
                d["taskName"] = d.Process.Label;
                d["subProcess"] = d?.SubProcess?.Label != null ? d?.SubProcess?.Label : '';
                d["estimatedTime"] = this.toHoursAndMinutes(d.Process.EstimatedDuration);
                d["totalTime"] = this.toHoursAndMinutes(d.Process.EstimatedDuration * d.Quantity);
              }
              if (d.EventDuration == null) {
                d["eventDuration"] = "NA";
              } else {
                d["eventDuration"] = d.EventDuration;
              }
            });
            this.blockUI.stop();
            let filtered = this.rows.filter(data => data?.ApprovalDetails?.Value == 0 || data?.ApprovalDetails?.Value == 35 || data?.ApprovalDetails?.Value == 34 && data.isDate);
            if (filtered.length > 0) {
              this.headerCheckboxable = true
            } else {
              this.headerCheckboxable = false
            }
          }
        });
      }, 600);
    });
  }
  setPage(pageInfo) {
    let timeDate;
    if (this.TimelineSelectedDate) {
      timeDate = this.TimelineSelectedDate
    } else {
      timeDate = this.TimelineDate
    }
    this.worklogsService.getWorkPlan(timeDate, pageInfo.offset + 1, pageInfo.limit).then(res => { });
  }
  async selectDropdown(id, row) {
    let json = {
      WorkPlanId: parseInt(row.WorkPlanId),
      CPAId: row.CPA.Value,
      ClientId: row.Client.Value,
      TaskId: row.Task.Value == 0 ? null : row.Task.Value,
      ProcessId: row.Process.Value == 0 ? null : row.Process.Value,
      Quantity: row.Quantity,
      StatusId: parseInt(id),
      Description: row.Description,
      SubprocessId: row.SubProcess?.Value == 0 ? null : row.SubProcess?.Value
    };
    this.blockUI.start('Loading...')
    let response = await this.worklogsService.addDailyWorkPlan(json).subscribe((res: any) => {
      if (res.ResponseStatus == "Success") {
        setTimeout(() => {
          this.toastrService.success(
            "You have successfully update Status", "Success", {
            toastClass: "toast ngx-toastr", closeButton: true
          });
          this.blockUI.stop()
        }, 1500);
      } else {
        this.toastrService.error(res?.Message, "Error!", {
          toastClass: "toast ngx-toastr", closeButton: true
        });
        this.blockUI.stop()
      }
      let timeDate;
      if (this.TimelineSelectedDate) {
        timeDate = this.TimelineSelectedDate;
      } else {
        timeDate = this.TimelineDate;
      }
      this.worklogsService.getWorkPlan(timeDate, 1, this.selectedOption);
      this.ngOnInit()
    });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}