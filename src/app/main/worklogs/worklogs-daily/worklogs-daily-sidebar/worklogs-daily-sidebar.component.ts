import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { WorklogsService } from '../../worklogs.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { arrayToString, stringToArray } from 'cron-converter';
import moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-worklogs-daily-sidebar',
  templateUrl: './worklogs-daily-sidebar.component.html',
  styleUrls: ['./worklogs-daily-sidebar.component.scss']
})
export class WorklogsDailySidebarComponent implements OnInit {
 
  public cpaName;
  public taskName;
  public status;
  public quantity;
  public checkDaily = "day";
  public dayDaily: number = 1;
  public daysetMonth: any = "1";
  public setDaysonWeek: any = "Monday";
  public setDaysRepeat: any = "1";
  public cpaList = [];
  public cpaId;
  public clientList = [];
  public checkInputShow = "";
  public checkValueShow = "Auto";
  public description;
  public Description;
  public taskList = [];
  public processList = [];
  public subProcessList = [];
  public statusList = [];
  public process;
  public clientName;
  public EstimatedDuration;
  public TotalEstimatedTime;
  public isEditMeg = false;
  public isEdit = false;
  public WorkPlanId;
  public cpaid;
  public IsStop;
  public clientId;
  public taskId;
  public statusId;
  public processId;
  public subprocessId;
  public subProcess;
  public checkListData;
  public checkListDescription;
  public commentListData;
  public commentDescription;
  public isEditCheckList = false;
  public isEDitCheckLisData;
  public recurringListData;
  public startDate;
  public endDate;
  public OccuresDay;
  public OccuresOption;
  public weekDays;
  public monthDays;
  public WeekDaysArray = [];
  public estimatedDuration;
  public manualTaskTime;
  public recurringCronExp;
  public recurringArray = [];
  patterns = {'0': { pattern: new RegExp(/[0]/) }, '1': { pattern: new RegExp(/[0-7]/) }, '2': { pattern: new RegExp(/[0-5]/) }, '3': { pattern: new RegExp(/[0-9]/) }};
  public stoplogdisableditem: boolean = false;
  public stopValuedisableditem: boolean = false;
  public dummyMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public dummyWeek = [0, 1, 2, 3, 4, 5, 6];
  public dummyDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  public recurringData;
  public ModifiedId;
  public editTotalTime;
  allcheck = [{
    id: 0,
    name: 'Sunday',
    sname: 'S',
    checked: false
  }, {
    id: 1,
    name: 'Monday',
    sname: 'M',
    checked: false
  }, {
    id: 2,
    name: 'Tuesday',
    sname: 'T',
    checked: false
  }, {
    id: 3,
    name: 'Wednesday',
    sname: 'W',
    checked: false
  }, {
    id: 4,
    name: 'Thursday',
    sname: 'T',
    checked: false
  }, {
    id: 5,
    name: 'Friday',
    sname: 'F',
    checked: false
  }, {
    id: 6,
    name: 'Saturday',
    sname: 'S',
    checked: false
  }];
  myarray = [];
  selected = [];
  submitChecklist: boolean = false;
  active = 1;
  showTaskName;
  editDataDailyWorkplan: any;
  public contentHeader: object;
  public selectBasic: Person[] = [];
  @BlockUI() blockUI: NgBlockUI;
  public selectBasicLoading = false;
  isEditShowDailyPlan: boolean = false;
  isShowEdit: Boolean = false
  public userData = JSON.parse(localStorage.getItem('userData'));
  constructor(private _coreSidebarService: CoreSidebarService,
    private worklogsService: WorklogsService,
    private toastrService: ToastrService,
  ) {
    for (let i = 1; i <= 31; i++) {
      this.WeekDaysArray[i] = i;
    }
    if (this.userData.WorkCategory == 32) {
      this.checkInputShow = 'Process'
    } else {
      this.checkInputShow = 'Task'
    }
    this.worklogsService.dailyWorkplanCheck.subscribe((str: string) => {
      if (str === 'isWorkplanDaily') {
        this.isEditShowDailyPlan = true;
        this.worklogsService.dailyworkClickedEvent.subscribe((data: string) => {
          if (data == 'Edit') {
            this.isEdit = true;
            this.isEditMeg = true;
            this.active = 1;
          } else {
            this.clearObje();
          }
          if (this.isEditShowDailyPlan) {
            this.worklogsService.dailyworkEditClickedEvent.subscribe((data: any) => {
              if (data) {
               this.editDataDailyWorkplan = data;
                if (this.userData.WorkCategory == 32) {
                  this.checkInputShow = 'Process'
                } else {
                  this.checkInputShow = 'Task'
                }
                this.isShowEdit = data.Isdisabled
                //work plan edit data on daily workplan
                if (data.IsManual == false) {
                  this.checkValueShow = 'Auto'
                } else {
                  this.checkValueShow = 'Manual'
                }
                if (data.IsStop == 'STOP' || data.Status.Label == "Completed") {
                  this.stoplogdisableditem = true
                } else {
                  this.stoplogdisableditem = false
                }
                this.WorkPlanId = data.WorkPlanId
                this.cpaName = data.CPAName;
                this.cpaid = data.CPA.Value;
                this.clientName = data.clientName;
                this.clientId = data.Client.Value;
                this.description = data.Description;
                this.status = data.Status.Label;
                this.statusId = data.Status.Value;
                this.taskName = data.Task.Label;
                this.taskId = data.Task.Value;
                this.processId = data.Process.Value;
                this.process = data.Process.Label;
                this.IsStop = data.IsStop;
                this.Description = data.Description;
                let json = {
                  "WorkPlanId": data.WorkPlanId,
                }
                let process = {
                  'Value': data.Process.Value
                }
                this.onProcessChange(process);
                this.onChange(data.CPA, '');
                this.allcheck.forEach(d => {
                  d['checked'] = false;
                })
                this.quantity = data.Quantity;
                if (data.Task.Label != null) {
                  this.showTaskName = data.Task.Label;
                  this.checkInputShow = 'Task'
                } else {
                  this.showTaskName = data.Process.Label;
                  this.subProcess = data.SubProcess.Label;
                  this.subprocessId = data.SubProcess.Value;
                  this.checkInputShow = 'Process'
                }
                if (data.Task.EstimatedDuration == 0) {
                  this.EstimatedDuration = data.Process.EstimatedDuration;
                } else {
                  this.EstimatedDuration = data.Task.EstimatedDuration;
                }
                this.estimatedDuration = this.EstimatedDuration;
                this.TotalEstimatedTime = this.EstimatedDuration * this.quantity;
                this.TotalEstimatedTime = this.toHoursAndMinutes(this.TotalEstimatedTime)
                this.EstimatedDuration = this.toHoursAndMinutes(this.EstimatedDuration);
                this.manualTaskTime = moment(data.EventDuration, "HH:mm:ss").format("HH:mm")
              }
            })
          }
        });
      } else {
        this.isEditShowDailyPlan = false;
        this.worklogsService.dailyworkClickedEvent.subscribe((data: string) => {
          if (data == 'Edit') {
            this.isEdit = true;
            this.isEditMeg = true;
            this.active = 1;
          } else {
            this.clearObje();
          }
          if (!this.isEditShowDailyPlan) {
            this.worklogsService.dailyworkEditClickedEvent.subscribe((data: any) => {
              if (data) {
                if (this.userData.WorkCategory == 32) {
                  this.checkInputShow = 'Process'
                } else {
                  this.checkInputShow = 'Task'
                }
                //work plan edit data reviwe timeline page
                if (data.IsManual == false) {
                  this.checkValueShow = 'Auto'
                } else {
                  this.checkValueShow = 'Manual'
                }
                if (data.TaskName == null) {
                  this.checkInputShow = 'Process'
                } else {
                  this.checkInputShow = 'Task'
                }
                if (data.IsStop == 'STOP') {
                  this.stoplogdisableditem = true
                } else {
                  this.stoplogdisableditem = false
                }
                this.WorkPlanId = data.WorkPlanId
                this.cpaName = data.CPAName;
                this.cpaid = data.CPAId;
                this.clientName = data.ClientName;
                this.clientId = data.ClientId;
                let process = {
                  'Value': data.ProcessId
                }
                this.onProcessChange(process);
                this.allcheck.forEach(d => {
                  d['checked'] = false;
                })
                this.quantity = data.Quantity;
                this.description = data.Description;
                this.status = data.SStatusName;
                this.ModifiedId = data.ModifiedId
                this.statusId = data.StatusId;
                this.taskName = data.TaskName;
                this.taskId = data.TaskId;
                this.processId = data.ProcessId;
                this.process = data.ProcessName
                this.IsStop = data.IsStop;
                this.Description = data.Description;
                if (data.TaskName != null) {
                  this.showTaskName = data.TaskName;
                  this.estimatedDuration = data?.EstimatedDuration;
                } else {
                  this.showTaskName = data.ProcessName;
                  this.subProcess = data.SubprocessName;
                  this.subprocessId = data.SubprocessId;
                  this.estimatedDuration = data?.EstimatedProcessTime;
                }
                if (this.estimatedDuration != 0) {
                  this.TotalEstimatedTime = this.estimatedDuration * this.quantity;
                  this.TotalEstimatedTime = this.toHoursAndMinutes(this.TotalEstimatedTime)
                } else {
                  this.TotalEstimatedTime = "00:00"
                }
                this.EstimatedDuration = this.toHoursAndMinutes(this.estimatedDuration);
                this.manualTaskTime = moment(data.EventDuration, "HH:mm:ss").format("HH:mm")
                this.editTotalTime = moment(data.ModifiedHours, "HH:mm:ss").format("HH:mm");
              }
            })
          }
        });
      }
    })
  }
  submitActualHover(form) {
    let jsonadd = {
      "ModifiedId": this.ModifiedId == null ? null : this.ModifiedId,  // null on insert, Id on update
      "WorkPlanId": this.WorkPlanId,
      "ModifiedHours": moment(this.editTotalTime, "HHmm").format("HH:mm")
    }
    this.blockUI.start('Loading...')
    let response = this.worklogsService.addSubmitActualHours(jsonadd).subscribe(res => {
      if (res.ResponseStatus == 'Success') {
        setTimeout(() => {
          this.toastrService.success('You have successfully updated Edited Time', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
          form.resetForm();
          this.toggleSidebar('worklogs-timesheet-sidebar');
          let json = {
            "Index": 1,
            "PageSize": 50000,
            "ApprovedStatus": null,
            "UserIds": [],   // filter for getting particular user review logs
            "TimelineDate": null
          }
          this.worklogsService.getWorkPlanApproveList(json);
          this.blockUI.stop()
        }, 1500);
      } else {
        this.toastrService.error(res?.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.blockUI.stop()
      }
      let json = {
        "Index": 1,
        "PageSize": 50000,
        "ApprovedStatus": null,
        "UserIds": [],   // filter for getting particular user review logs
        "TimelineDate": new Date()
      }
      this.worklogsService.getWorkPlanApproveList(json)
    })
  }
  toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  clearObje() {
    this.cpaName = "";
    this.cpaid = "";
    this.clientName = "";
    this.clientId = "";
    this.quantity = "";
    this.status = "";
    this.statusId = "";
    this.taskName = "";
    this.taskId = "";
    this.processId = "";
    this.process = "";
    this.EstimatedDuration = 0;
    this.TotalEstimatedTime = "";
    this.isEdit = false;
    if (this.userData.WorkCategory == 32) {
      this.checkInputShow = 'Process'
    } else {
      this.checkInputShow = 'Task'
    }
    this.checkValueShow = 'Auto';
    this.manualTaskTime = "";
    this.description;
    this.active = 1
  }
  onChangeClient() {
    this.quantity = "";
    this.status = "";
    this.taskName = "";
    this.taskId = "";
    this.processId = "";
    this.process = "";
    this.EstimatedDuration = "";
    this.TotalEstimatedTime = "";
    if (this.userData.WorkCategory == 32) {
      this.checkInputShow = 'Process'
    } else {
      this.checkInputShow = 'Task'
    }
  }
  addCheckList() {
    let json;
    if (!this.isEditCheckList) {
      json = {
        "Id": 0,
        "WorkPlanId": this.WorkPlanId,
        "Description": this.checkListDescription,
        "IsChecked": 0,
        "IsDeleted": 0
      }
    } else {
      json = {
        "Id": this.isEDitCheckLisData.Id,
        "WorkPlanId": this.WorkPlanId,
        "Description": this.checkListDescription,
        "IsChecked": this.isEDitCheckLisData.IsChecked == false ? 0 : 1,
        "IsDeleted": 0
      }
    }
    this.blockUI.start('Loading...')
    let response = this.worklogsService.addCheckListData(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        let json = {
          "WorkPlanId": this.WorkPlanId
        }
        this.getChecklistData(json);
        if (!this.isEditCheckList) {
          this.toastrService.success('You have successfully add Check List', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
          this.blockUI.stop()
        } else {
          this.toastrService.success('You have successfully update Check List', 'Success', {
            toastClass: 'toast ngx-toastr', closeButton: true
          });
          this.blockUI.stop()
        }
        this.blockUI.stop()
        this.isEditCheckList = false;
        this.checkListDescription = "";
      }
    })
  }
  editData(edit, data) {
    this.isEditCheckList = true;
    if (data) {
      this.checkListDescription = data.Description;
      this.isEDitCheckLisData = data
    }
  }
  getChecklistData(json) {
    let response = this.worklogsService.getCheckList(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        this.checkListData = res.ResponseData
      }
    })
  }
  getCommentlistData(json) {
    let response = this.worklogsService.getWorkplanComments(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        this.commentListData = res.ResponseData.CommentList;
      }
    })
  }
  getRecurringData(json) {
    this.recurringArray = [];
    this.OccuresOption = 'day';
    this.checkDaily = 'day'
    this.OccuresDay = '1';
    this.monthDays = '';
    this.startDate = '';
    this.endDate = '';
    this.recurringData = {}
    let response = this.worklogsService.getWorkplanRecurring(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        if (res.ResponseData[0]) {
          this.recurringArray = stringToArray(res.ResponseData[0].RecurringCronExp);
          this.recurringData = res.ResponseData[0];
          let date = new Date(this.recurringData.StartDate);
          this.startDate = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
          }
          let dateend = new Date(this.recurringData.EndDate);
          this.endDate = {
            year: dateend.getFullYear(),
            month: dateend.getMonth() + 1,
            day: dateend.getDate()
          }
          if (this.dummyDays.length != this.recurringArray[2].length && this.dummyMonth.length == this.recurringArray[3].length) {
            this.OccuresDay = this.recurringArray[2][0];
            this.OccuresOption = 'day';
          } else if (this.dummyMonth.length != this.recurringArray[3].length) {
            this.OccuresOption = 'month';
            this.monthDays = this.recurringArray[2][0];
            this.checkDaily = 'month'
          } else if (this.dummyWeek.length != this.recurringArray[4].length) {
            this.checkDaily = 'week';
            this.OccuresOption = 'week';
            this.allcheck.forEach(d => {
              for (let i = 0; i <= this.recurringArray[4].length; i++) {
                if (d.id == this.recurringArray[4][i]) {
                  d['checked'] = true;
                }
              }
            })
            this.add_week()
          }
        }
      }
    })
  }
  addComment() {
    let json;
    json = {
      "WorkPlanId": this.WorkPlanId,
      "Comment": this.commentDescription
    }
    this.blockUI.start('Loading...')
    let response = this.worklogsService.addCommentData(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        let json = {
          "WorkPlanId": this.WorkPlanId
        }
        this.getCommentlistData(json);
        this.toastrService.success('You have successfully add comment', 'Success', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.commentDescription = "";
        this.blockUI.stop()
      }
    })
  }
  changeValue(event) {
    let weekvalues = [];
    var index = weekvalues.indexOf(event.target.value)
    if (index >= 0) {
      weekvalues.splice(index, 1);
    } else {
      weekvalues.push(event.target.value)
    }
  }
  addRecurring() {
    let StartDate = this.startDate?.year + "-" + this.startDate?.month + "-" + this.startDate?.day;
    let EndDate = this.endDate?.year + "-" + this.endDate?.month + "-" + this.endDate?.day;
    var weekselarray = this.allcheck.filter(opt => opt.checked).map(opt => opt.id);
    let recurringcron;
    if (this.OccuresOption == 'day') {
      recurringcron = arrayToString([[0], [0], [this.OccuresDay], this.dummyMonth, this.dummyWeek]);
    }
    if (this.OccuresOption == 'week') {
      recurringcron = arrayToString([[0], [0], this.dummyDays, this.dummyMonth, weekselarray]);
    }
    if (this.OccuresOption == 'month') {
      recurringcron = arrayToString([[0], [0], [this.monthDays], [this.startDate?.month, this.endDate?.month], this.dummyWeek]);
    }
    this.blockUI.start('Loading...')
    let json = {
      "RecurringId": !this.recurringData?.RecurringId ? 0 : this.recurringData?.RecurringId,
      "WorkPlanId": this.WorkPlanId,
      "StartDate": StartDate,
      "EndDate": EndDate,
      "RecurringCronExp": recurringcron,
      "OccurrenceDay": this.OccuresDay,
      "OccurrenceOption": this.OccuresOption,
      "WeekDays": this.weekDays,
      "MonthDay": 1
    }
    let response = this.worklogsService.addRecurringData(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        let jsonId = {
          "WorkPlanId": this.WorkPlanId
        }
        this.getCommentlistData(jsonId);
        this.toggleSidebar('worklogs-daily-sidebar');
        var TimelineDate = null;
        this.worklogsService.getWorkPlan(TimelineDate, 1, 10);
        this.toastrService.success('You have successfully add recurring', 'Success', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.blockUI.stop()
      }
    })
  }
  async ConfirmTextOpen(data) {
    let that = await this;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to Delete these record?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {
        var json = {
          "CheckListId": data.Id
        }
        that.blockUI.start('Loading...')
        let response = that.worklogsService.deleteCheckList(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that.toastrService.success('You have successfully deleted Check List', 'Success', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            let json = {
              "WorkPlanId": data.WorkPlanId
            }
            that.worklogsService.getCheckList(json);
            that.blockUI.stop()
          } else {
            that.toastrService.error(res.Message, 'Error!', {
              toastClass: 'toast ngx-toastr', closeButton: true
            });
            that.blockUI.stop()
          }
          let json = {
            "WorkPlanId": data.WorkPlanId
          }
          that.getChecklistData(json);
        });
      }
    });
  }
  toggleSidebar(name): void {
    this.isEdit = false;
    this.active = 1;
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }
  getData(data) {
    let json = {
      "WorkPlanId": this.WorkPlanId,
    }
    if (data == 'Checklist') {
      this.getChecklistData(json);
    } else if (data == 'Comments' || data == 'Reason') {
      this.getCommentlistData(json);
    } else if (data == 'Recurring') {
      this.getRecurringData(json);
    }
  }
  private selectBasicMethod() {
    this.blockUI.start('Loading...')
    this.selectBasicLoading = true;
    this.worklogsService.onCpaListChange.subscribe(response => {
      this.cpaList = response;
      this.cpaList?.forEach(data => {
        data['name'] = data.Label;
        data['id'] = data.id;
      });
      this.blockUI.stop()
    });
    this.selectBasicLoading = false;
  }
  add_week() {
    var t = this.allcheck.filter(opt => opt.checked).map(opt => opt);
    this.selected = t;
  }
  onChange(data, change) {
    this.EstimatedDuration = 0;
    this.clientList = [];
    this.processList = [];
    this.taskList = [];
    this.statusList = [];
    if (change == 'change') {
      this.clientName = "";
      this.clientId = "";
      this.quantity = "";
      this.status = "";
      this.taskName = "";
      this.taskId = "";
      this.processId = "";
      this.process = "";
      this.EstimatedDuration = 0;
      this.subProcess = "";
      this.description = "";
      this.TotalEstimatedTime = ""
    }
    if (data.Value) {
      this.cpaId = data.Value;
      let json = {
        "CPAId": this.cpaId
      }
      this.worklogsService.getAllDataByCpaId(json);
      this.worklogsService.onListAllChange.subscribe(response => {
        if (response) {
          if (response.ClientList) {
            this.clientList = response.ClientList;
            this.clientList?.forEach(data => {
              data['name'] = data.Label;
              data['id'] = data.id;
            })
          }
          if (response.TaskList) {
            this.taskList = response.TaskList;
            this.taskList?.forEach(data => {
              data['name'] = data.Label;
              data['id'] = data.id;
            })
          }
          if (response.ProcessList) {
            this.processList = response.ProcessList;
            this.processList?.forEach(data => {
              data['name'] = data.Label;
              data['id'] = data.id;
            })
          }
          if (response.StatusList) {
            this.statusList = response.StatusList;
            this.statusList?.forEach(data => {
              data['name'] = data.StatusName;
              data['id'] = data.Id;
            })
          }
        }
      });
    }
  }
  onTaskChange(task) {
    this.EstimatedDuration = "";
    this.TotalEstimatedTime = "";
    this.quantity = "";
    if (task) {
      this.EstimatedDuration = task.EstimatedDuration;
      this.estimatedDuration = this.EstimatedDuration
    }
    this.EstimatedDuration = this.toHoursAndMinutes(this.EstimatedDuration)
  }
  onProcessChange(process) {
    this.subProcess = "";
    this.EstimatedDuration = "";
    this.TotalEstimatedTime = "";
    let json = {
      "GlobalSearch": null,
      "SubProcessName": null,
      "ProcessId": process.Value,
      "IsAvailable": null,
      "ClientId": this.cpaId
    }
    this.blockUI.start('Loading...')
    this.worklogsService.getSubProcessById(json).subscribe(res => {
      if (res) {
        this.subProcessList = res.ResponseData.List;
        this.subProcessList.forEach(data => {
          data['name'] = data.SubprocessName;
          data['id'] = data.SubprocessId;
          data['Value'] = data.SubprocessId;
        })
      };
      this.blockUI.stop()
    })
  }
  onSubProcessChange(subprocess) {
    this.EstimatedDuration = "";
    this.TotalEstimatedTime = "";
    this.quantity = ""
    if (subprocess) {
      this.EstimatedDuration = subprocess.EstimatedDuration;
      this.estimatedDuration = this.EstimatedDuration
    }
    this.EstimatedDuration = this.toHoursAndMinutes(this.EstimatedDuration);
  }
  InputChange(quality) {
    if (quality) {
      this.TotalEstimatedTime = this.estimatedDuration * quality;
      this.TotalEstimatedTime = this.toHoursAndMinutes(this.TotalEstimatedTime)
    }
  }
  onChangeInput() {
    this.EstimatedDuration = "";
    this.TotalEstimatedTime = "";
    this.taskName = "";
    this.process = "";
    this.subProcess = ""
  }
  changed(data, checklist) {
    let json = {
      "Id": checklist.Id,
      "WorkPlanId": this.WorkPlanId,
      "Description": checklist.Description,
      "IsChecked": data.target.checked == true ? 1 : 0,
      "IsDeleted": 0
    }
    this.blockUI.start('Loading...')
    let response = this.worklogsService.addCheckListData(json).subscribe(res => {
      if (res.ResponseStatus == "Success") {
        let json = {
          "WorkPlanId": this.WorkPlanId
        }
        this.getChecklistData(json);
        this.toastrService.success('You have successfully update Check List', 'Success', {
          toastClass: 'toast ngx-toastr', closeButton: true
        });
        this.blockUI.stop()
      }
    })
  }
  async submit(form) {
    if (this.checkValueShow == 'Manual' && form.controls.manualTaskTime.value == 0) {
      form.valid = false
    }
    if (this.checkInputShow == 'Task' && this.userData.WorkCategory != 32) {
      if (form.controls.taskName.value.Value == undefined) {
        this.taskId = this.taskId
      } else {
        this.taskId = form.controls.taskName.value.Value
      }
    this.processId = null;
    this.subprocessId = null;
    } else if (this.checkInputShow == 'Process' && (this.userData.WorkCategory == 32 || this.userData.WorkCategory == 33)) {
      this.taskId = null;
      if (form.controls.process.value.Value == undefined) {
        this.processId = this.processId;
      } else {
        this.processId = form.controls.process.value.Value;
      }
      if (form.controls.subProcess.value.Value == undefined) {
        this.subprocessId = this.subprocessId;
      } else {
        this.subprocessId = form.controls.subProcess.value.Value
      }
    }
    if (form.controls.cpaName.value.Value == undefined) {
      this.cpaid = this.cpaId
    } else {
      this.cpaid = form.controls.cpaName.value.Value
    }
    if (form.controls.clientName.value.Value == undefined) {
      this.clientId = this.clientId
    } else {
      this.clientId = form.controls.clientName.value.Value
    }
    if (this.checkValueShow == 'Auto') {
      if (!this.manualTaskTime) {
        this.manualTaskTime = "00:00"
      } else if (this.manualTaskTime == 'Invalid date') {
        this.manualTaskTime = "00:00"
      }
    } else {
      this.manualTaskTime = moment(this.manualTaskTime, "HHmm").format("HH:mm")
    }
    if (form.valid) {
      let json = {
        "WorkPlanId": !this.isEdit ? 0 : this.WorkPlanId,
        "CPAId": this.cpaid,
        "ClientId": this.clientId,
        "TaskId": this.taskId,
        "ProcessId": this.processId,
        "SubprocessId": this.subprocessId,
        "Quantity": form.controls.quantity.value,
        "StatusId": !this.isEdit ? (this.checkValueShow == 'Manual' ? 17 : 18) : this.statusId,
        "IsManual": (this.checkValueShow == 'Manual') ? true : false,
        "Description": this.description,
        "TotalEstimatedTime": this.manualTaskTime,
        "TimelineDate": new Date()
      };
      this.blockUI.start('Loading...')
      let response = await this.worklogsService.addDailyWorkPlan(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this.toastrService.success('You have successfully added workplan', 'Success', {
                toastClass: 'toast ngx-toastr',closeButton: true});
            } else {
              this.toastrService.success('You have successfully update workplan', 'Success', {
                toastClass: 'toast ngx-toastr',closeButton: true});
            }
            this.blockUI.stop()
          }, 1500);
        } else {
          this.toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr', closeButton: true});
          this.blockUI.stop()
        }
        this.clearObje();
        form.resetForm();
        this.toggleSidebar('worklogs-daily-sidebar');
        var TimelineDate = null;
        this.worklogsService.getWorkPlan(TimelineDate, 1, 10);
      });
    }
  }
  ngOnInit() {
    this.selectBasicMethod();
    this.worklogsService.getCpaList();
    this.contentHeader = {
      headerTitle: 'Select',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Select',
            isLink: false
          }
        ]
      }
    };
  }
  onChangeEvent = (value) => { this.checkDaily = value }
}