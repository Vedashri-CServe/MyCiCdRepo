import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthenticationService } from 'app/auth/service/authentication.service';
@Injectable({ providedIn: 'root' })
export class WorklogsService {
  public userProfile;
  public workPlanComments: any[];
  public dailyWork: any[];
  public responsedata: any[];
  public cpaList: any[];
  public listAll: any;
  public onDaliyWorkPlanChange: BehaviorSubject<any>;
  public worklogresponsedata: BehaviorSubject<any>;
  public onDaliyWorkPlanCommentChange: BehaviorSubject<any>;
  public onCpaListChange: BehaviorSubject<any>;
  public onListAllChange: BehaviorSubject<any>;
  public OnTimeLineChange: BehaviorSubject<any>;
  public OnReviewTimeChange: BehaviorSubject<any>;
  public checkUserRole = false;
  //daily work plan module start 
  @Output() dailyworkClickedEvent = new EventEmitter<string>();
  @Output() dailyworkEditClickedEvent = new EventEmitter<string>();
  @Output() dailyWorkplanCheck = new EventEmitter<string>();
  constructor(private _httpClient: HttpClient, public authenticationService: AuthenticationService) {
    this.authenticationService.getValue().subscribe((value) => {
      this.checkUserRole = value;
    });
    this.onDaliyWorkPlanChange = new BehaviorSubject([]);
    this.worklogresponsedata = new BehaviorSubject([]);
    this.onListAllChange = new BehaviorSubject([]);
    this.OnTimeLineChange = new BehaviorSubject([]);
    this.OnReviewTimeChange = new BehaviorSubject([]);
    this.onDaliyWorkPlanCommentChange = new BehaviorSubject([]);
    this.onCpaListChange = new BehaviorSubject([]);
  }
  
  
  isEditofDailyWork(msg: string) {
    this.dailyworkClickedEvent.emit(msg);
  }
  isEditDataofDailyWork(editData: any) {
    this.dailyworkEditClickedEvent.emit(editData)
  }
  isCheckDataForEdit(data: any) {
    this.dailyWorkplanCheck.emit(data)
  }
  //get dailt work plan for show in table
  getWorkPlan(TimelineDate, Index, PageSize) {
    let json = {
      "CPAId": null,
      "ClientId": null,
      "UserId": parseInt(localStorage.getItem('userId')),
      "GlobalSearch": null,
      "Index": 1,
      "PageSize": 50000,
      "TimelineDate": TimelineDate,
      "IsDownload": false,
    }
    const url = `${environment.apiWorklogsUrl}/workplan/getworkplanlist`;
    return new Promise((resolve, reject) => {
      this._httpClient.post(url, json).subscribe((response: any) => {
        this.responsedata = response
        this.dailyWork = response;
        this.onDaliyWorkPlanChange.next(this.dailyWork);
        this.worklogresponsedata.next(this.responsedata);
        resolve(this.dailyWork);
      }, reject);
    });
  }
  getWorkPlanExport(json, responseType): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getworkplanlist`;
    return this._httpClient.post(url, json, { responseType: responseType })
  }
  //get cpalist for add and edit work plan
  getCpaList() {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/organizationuser/getcpalist`, { "CallByDWP": false }).subscribe((response: any) => {
        this.cpaList = response?.ResponseData;
        this.onCpaListChange.next(this.cpaList);
        resolve(this.cpaList);
      }, reject);
    });
  }

  //get task , process and client get by cpa id 
  getAllDataByCpaId(json) {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiWorklogsUrl}/workplan/getclientandtaskandprocesslistByCPA`, json).subscribe((response: any) => {
        this.listAll = response?.ResponseData;
        this.onListAllChange.next(this.listAll);
        resolve(this.listAll);
      }, reject);
    });
  }

  addDailyWorkPlan(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/saveworkplan`;
    return this._httpClient.post(url, json);
  }

  deleteWorkPlan(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/deleteworkplan`;
    return this._httpClient.post(url, json);
  }

  // Get Comments into Workplan
  getWorkplanComments(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getworkplancomment`;
    return this._httpClient.post(url, json);
  }

  addCommentData(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/workplancomment`;
    return this._httpClient.post(url, json);
  }

  //Get Recurring into Workplan
  getWorkplanRecurring(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getworkplanrecurring`;
    return this._httpClient.post(url, json);
  }

  addRecurringData(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/saverecurringplan`;
    return this._httpClient.post(url, json);
  }

  //checklist tab
  getCheckList(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getchecklist`;
    return this._httpClient.post(url, json);
  }

  addCheckListData(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/savechecklist`;
    return this._httpClient.post(url, json);
  }

  deleteCheckList(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/deletechecklistpoint`;
    return this._httpClient.post(url, json);
  }

  // play pause timer 
  startcontinue(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/task/startcontinuelog`;
    return this._httpClient.post(url, json);
  }
  stopworklog(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/task/stopworklog`;
    return this._httpClient.post(url, json);
  }
  refreshTime(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/task/refreshtimeduration`;
    return this._httpClient.post(url, json);
  }
  //TimeLine module
  getTImelieDate(json) {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiWorklogsUrl}/workplan/gettimeloglist`, json).subscribe((response: any) => {
        let data = response;
        this.OnTimeLineChange.next(data);
        resolve(data);
      }, reject);
    });
  }
  getTImelieDateExport(json,responseType): Observable<any>{
    const url = `${environment.apiWorklogsUrl}/workplan/gettimeloglist`;
    return this._httpClient.post(url, json, { responseType: responseType })  
  };
  //brak strat and stop If start EventType - 15 and Stop EventType -16;
  brakStartAndStop(json) {
    const url = `${environment.apiWorklogsUrl}/task/startstopuserbreak`;
    return this._httpClient.post(url, json);
  }

  submitApprove(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/approveworkplan`;
    return this._httpClient.post(url, json);
  }

  getWorkPlanApproveList(json) {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiWorklogsUrl}/workplan/getreviewerlogslist`, json).subscribe((response: any) => {
        let data = response;
        this.OnReviewTimeChange.next(data);
        resolve(data);
      }, reject);
    });
  }

  addSubmitActualHours(json): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/modifiedreviewlogs`;
    return this._httpClient.post(url, json);
  }

  //updated new api 
  getSubProcessById(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/getsubprocesslistbyprocess`;
    return this._httpClient.post(url, json);
  }
  getUserList(): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getemployeedropdown`;
    return this._httpClient.get(url);
  }

  getStatus(): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getapprovalstatusdropdown`;
    return this._httpClient.get(url);
  }

  getWorkPlanApproveListExport(json, responseType): Observable<any> {
    const url = `${environment.apiWorklogsUrl}/workplan/getreviewerlogslist`;
    return this._httpClient.post(url, json, { responseType: responseType })
  }
}