import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from "../../auth/service/authentication.service"
@Injectable({ providedIn: 'root' })

export class SettingsService {
  public onCPAListChanged: BehaviorSubject<any>;
  public onTotalListChanged: BehaviorSubject<any>;
  public onClientListChanged: BehaviorSubject<any>;
  public onUserListChanged: BehaviorSubject<any>;
  public onTaskListChanged: BehaviorSubject<any>;
  public onProcessListChanged: BehaviorSubject<any>;
  public onSubProcessListChanged: BehaviorSubject<any>;
  public onStatusListChanged: BehaviorSubject<any>;
  public onDepeartmentList: BehaviorSubject<any>;
  public onUserTypetList: BehaviorSubject<any>;
  public onReportingManager: BehaviorSubject<any>;
  public onCPAList: BehaviorSubject<any>;
  public onProcessList: BehaviorSubject<any>;
  public onTypeOfWorkChange: BehaviorSubject<any>;
  public onBillingTypeChange: BehaviorSubject<any>;
  public onRoleBaseDataChange: BehaviorSubject<any>;
  public onTotalCountListChanged: BehaviorSubject<any>;
  public onTotalUserListChanged: BehaviorSubject<any>;
  public onProcessTotalListChanged : BehaviorSubject<any>;
  public onTaskTotalListChanged: BehaviorSubject<any>; 
  
  public rows: any;
  checkUserRole = false;
  constructor(private _httpClient: HttpClient, public authenticationService: AuthenticationService) {
    this.authenticationService.getValue().subscribe((value) => {
      this.checkUserRole = value;
    });
    this.getCPAListArray();
    this.getProcessListArray();
    this.onCPAListChanged = new BehaviorSubject([]);
    this.onTotalListChanged = new BehaviorSubject([]);
    this.onSubProcessListChanged = new BehaviorSubject([]);
    this.onClientListChanged = new BehaviorSubject([]);
    this.onUserListChanged = new BehaviorSubject([]);
    this.onTaskListChanged = new BehaviorSubject([]);
    this.onProcessListChanged = new BehaviorSubject([]);
    this.onStatusListChanged = new BehaviorSubject([]);
    this.onRoleBaseDataChange = new BehaviorSubject([]);
    this.onDepeartmentList = new BehaviorSubject([]);
    this.onUserTypetList = new BehaviorSubject([]);
    this.onCPAList = new BehaviorSubject([]);
    this.onProcessList = new BehaviorSubject([]);
    this.onTypeOfWorkChange = new BehaviorSubject([]);
    this.onBillingTypeChange = new BehaviorSubject([]);
    this.onReportingManager = new BehaviorSubject([]);
    this.onTotalCountListChanged = new BehaviorSubject([]);
    this.onTotalUserListChanged = new BehaviorSubject([]);
    this.onTaskTotalListChanged = new BehaviorSubject([]);
    this.onProcessTotalListChanged =  new BehaviorSubject([]);
  }

  //CPA Module 
  @Output() cpaClickedEvent = new EventEmitter<string>();
  @Output() cpaEditClickedEvent = new EventEmitter<string>();
  isEditofCpa(msg: string) {
    this.cpaClickedEvent.emit(msg);
  }
  isEditDataofCpa(editData: any) {
    this.cpaEditClickedEvent.emit(editData)
  }
  getDataTableRows(index, pageSize, GlobalSearch): Promise<any[]> {
    let json = {
      "OrganizationType": 2,
      "Index": index,
      "PageSize": pageSize,
      "SortColumn": null,
      "IsDesc": true,
      "GlobalSearch": GlobalSearch,
      "TypeOfWork": null,
      "BillingType": null,
      "ContractedHours": null,
      "IsAvailable": null,
      "IsDownload": false
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/organizationuser/list`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onCPAListChanged.next(this.rows);
          this.onTotalListChanged.next(response.ResponseData)
          resolve(this.rows);
        }
      }, reject);
    });
  };
  getDataTableRowsExportClient(json, responseType) {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/list`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  //add cpa data on add time
  addCpaData(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/save`;
    return this._httpClient.post(url, json);
  }
  deletCPA(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/delete`;
    return this._httpClient.post(url, json);
  }
  //Client Module
  @Output() clientClickedEvent = new EventEmitter<string>();
  @Output() clientEditClickedEvent = new EventEmitter<string>();
  isEditofclient(msg: string) {
    this.clientClickedEvent.emit(msg);
  }
  isEditDataofClient(editData: any) {
    this.clientEditClickedEvent.emit(editData)
  }
  //Get all client data for client tab
  getDataTableRowsClient(index, pageSize, GlobalSearch): Promise<any[]> {
    let json = {
      "OrganizationType": 3,
      "Index": index,
      "PageSize": pageSize,
      "SortColumn": null,
      "IsDesc": true,
      "GlobalSearch": GlobalSearch,
      "TypeOfWork": null,
      "BillingType": null,
      "ContractedHours": null,
      "IsAvailable": null,
      "IsDownload": false
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/organizationuser/list`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onClientListChanged.next(this.rows);
          this.onTotalCountListChanged.next(response.ResponseData);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  getDataTableRowsExportProject(json, responseType) {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/list`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  //Add client data on add time
  addClientData(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/save`;
    return this._httpClient.post(url, json);
  }
  //Delete client
  deletClient(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/organizationuser/delete`;
    return this._httpClient.post(url, json);
  }
  getAllTypeofWork() {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiSettingsUrl}/setting/gettypeofworklist`;
      this._httpClient.get(url).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData;
          this.onTypeOfWorkChange.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    })
  }
  getAllBillingType() {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiSettingsUrl}/setting/getbillingtypelist`;
      this._httpClient.get(url).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData;
          this.onBillingTypeChange.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    })
  }
  //user module 
  //get all user data for client tab
  getDataTableRowsUser(index, PageSize, GlobalSearch): Promise<any[]> {
    let json = {
      "GlobalSearch": GlobalSearch,
      "RoleTypeId": null,
      "DepartmentId": null,
      "PageNo": index,
      "PageSize": PageSize,
      "SortColumn": null,
      "IsDesc": true,
      "IsAvailable": null,
      "IsDownload": false
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiUserManagementUrl}/user/list`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onUserListChanged.next(this.rows);
          this.onTotalUserListChanged.next(response.ResponseData);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  getDataTableRowsExportUser(json, responseType) {
    const url = `${environment.apiUserManagementUrl}/user/list`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  //get all department data
  getDepartmentList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUserManagementUrl}/user/departmentdropdown`).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response;
          this.onDepeartmentList.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  //get all department data
  getCPAListArray(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/organizationuser/getcpalist`, { "CallByDWP": false }).subscribe((response: any) => {
        this.rows = response;
        this.onCPAList.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
  //get user type data
  getUserTypeList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUserManagementUrl}/user/usertypedropdown`).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response;
          this.onUserTypetList.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  //get user type data
  getReportingManager(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUserManagementUrl}/user/getreportingmanagerdropdown`).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          var reportingData = response;
          this.onReportingManager.next(reportingData);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  //delete user data 
  deleteUser(json): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/delete`;
    return this._httpClient.post(url, json);
  }
  // Add User Data
  addUserData(json): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/save`;
    return this._httpClient.post(url, json);
  }
  getProcessListMaster(): Observable<any>{
     const url = `${environment.apiSettingsUrl}/process/masterlist`;
    return this._httpClient.get(url);
  }
  //Change User Status
  updateStatus(json): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/InActiveAccount`;
    return this._httpClient.post(url, json);
  }
  // Task Module
  @Output() taskClickedEvent = new EventEmitter<string>();
  @Output() taskEditClickedEvent = new EventEmitter<string>();
  isEditofTask(msg: string) {
    this.taskClickedEvent.emit(msg);
  }
  isEditDataofTask(editData: any) {
    this.taskEditClickedEvent.emit(editData)
  }
  //Get all task data
  getDataTableRowsTask(index, PageSize, GlobalSearch): Promise<any[]> {
    let json = {
      "GlobalSearch": GlobalSearch,
      "PageNo": index,
      "PageSize": PageSize,
      "TaskName": null,
      "IsAvailable": null,
      "IsDownload": false
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/gettasklist`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onTaskListChanged.next(this.rows);
          this.onTaskTotalListChanged.next(response.ResponseData);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  getDataTableRowsExportTask(json, responseType) {
    const url = `${environment.apiSettingsUrl}/setting/gettasklist`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  // Add Task Data
  addTask(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/savetask`;
    return this._httpClient.post(url, json);
  }
  //Delete Task data 
  deleteTask(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/deleteTask`;
    return this._httpClient.post(url, json);
  }
  // Process Module
  @Output() processClickedEvent = new EventEmitter<string>();
  @Output() processEditClickedEvent = new EventEmitter<string>();
  isEditofProcess(msg: string) {
    this.processClickedEvent.emit(msg);
  }
  isEditDataofProcess(editData: any) {
    this.processEditClickedEvent.emit(editData)
  }
  //Get all Process data
  getDataTableRowsProcess(index,PageSize,GlobalSearch): Promise<any[]> {
    let json = {
      "GlobalSearch": GlobalSearch,
      "ProcessName": null,
      "EstimatedDuration": null,
      "PageNo": index,
      "PageSize": PageSize,
      "SortColumn": null,
      "IsDesc": true,
      "IsAvailable": null,
      "IsDownload": false
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/process/list`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onProcessListChanged.next(this.rows);
          this.onProcessTotalListChanged.next(response.ResponseData);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  getDataTableRowsExportProcess(json, responseType) {
    const url = `${environment.apiSettingsUrl}/process/list`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  // Add Process Data
  addProcess(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/save`;
    return this._httpClient.post(url, json);
  }
  //Delete Process data 
  deleteProcess(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/delete`;
    return this._httpClient.post(url, json);
  }
  // Sub Process Module
  @Output() subProcessClickedEvent = new EventEmitter<string>();
  @Output() subProcessEditClickedEvent = new EventEmitter<string>();
  isEditofSubProcess(msg: string) {
    this.subProcessClickedEvent.emit(msg);
  }
  isEditDataofSubProcess(editData: any) {
    this.subProcessEditClickedEvent.emit(editData)
  }
  //Get all Sub Process data
  getDataTableRowsSubProcess(): Promise<any[]> {
    let json = {
      "GlobalSearch": null,
      "SubProcessName": null,
      "PageNo": 1,
      "PageSize": 50000,
      "SortColumn": null,
      "IsDesc": 1,
      "ProcessId": null,
      "IsAvailable": null
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/process/getsubprocesslist`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onSubProcessListChanged.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  //get all Process List data
  getProcessListArray(): Promise<any[]> {
    let processJson = {
      "GlobalSearch": null,
      "ProcessName": null,
      "EstimatedDuration": null,
      "PageNo": 1,
      "PageSize": 50000,
      "SortColumn": null,
      "IsDesc": true,
      "IsAvailable": null
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/process/list`, processJson).subscribe((response: any) => {
        this.rows = response;
        this.onProcessList.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
  // Add SubProcess Data
  addSubProcess(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/savesubprocess`;
    return this._httpClient.post(url, json);
  }
  //Delete SubProcess data 
  deleteSubProcess(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/deletesubprocess`;
    return this._httpClient.post(url, json);
  }
  addCPAProcess(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/process/saveCpaProcesses`;
    return this._httpClient.post(url, json);
  }
  getCPAProcess(json): Observable<any>{
    const url = `${environment.apiSettingsUrl}/process/getCpaProcesses`;
    return this._httpClient.post(url, json);
  } 
  // Status Module
  @Output() statusClickedEvent = new EventEmitter<string>();
  @Output() statusEditClickedEvent = new EventEmitter<string>();
  isEditofStatus(msg: string) {
    this.statusClickedEvent.emit(msg);
  }
  isEditDataofStatus(editData: any) {
    this.statusEditClickedEvent.emit(editData)
  }
  //Get all Process data
  getDataTableRowsStatus(): Promise<any[]> {
    let json = {
      "Index": 1,
      "PageSize": 50000
    }
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiSettingsUrl}/setting/getstatuslist`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData.List;
          this.onStatusListChanged.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  //add Status data
  addStatusData(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/savestatus`;
    return this._httpClient.post(url, json);
  }
  //Delete Status
  deletStatus(json): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/deletestatus`;
    return this._httpClient.post(url, json);
  }
  //permission module
  getRoleBaseData(json) {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.apiUserManagementUrl}/user/getusermenulist`, json).subscribe((response: any) => {
        if (response && response.ResponseData !== null) {
          this.rows = response.ResponseData;
          this.onRoleBaseDataChange.next(this.rows);
          resolve(this.rows);
        }
      }, reject);
    });
  }
  updateUserMenuList(json): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/updatemenulist`;
    return this._httpClient.post(url, json);
  }
  addRoleBaseData(json): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/saveroletypeforpermission`;
    return this._httpClient.post(url, json);
  }
  getUserListDataPermission(): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/user/getpermissionrolelist`;
    return this._httpClient.get(url);
  }
  deleteRoleBase(json): Observable<any>{
    const url = `${environment.apiUserManagementUrl}/user/deleteroletype`;
    return this._httpClient.post(url,json);
  }
  importCSVData(json): Observable<any>{
    const url = `${environment.apiSettingsUrl}/import/projectexcel`;
    return this._httpClient.post(url,json);
  }
  downloadFileExport(json): Observable<any>{
    const url = `${environment.apiSettingsUrl}/import/DownloadInvalidRecodes`;
    return this._httpClient.post(url,json,{ responseType: 'blob'});
  }
  downloadFile(): Observable<any>{
    const url = `${environment.apiHelpUrl}/tutorial/getGeneralFile`;
    return this._httpClient.get(url);
  }
  addPrcessName(json): Observable<any>{
    const url = `${environment.apiSettingsUrl}/process/saveandeditprocess`;
    return this._httpClient.post(url,json); 
  }
  deleteProcesswithSubProcess(json): Observable<any>{
    const url = `${environment.apiSettingsUrl}/process/deleteprocesswithsubProcess`;
    return this._httpClient.post(url,json); 
  }

}