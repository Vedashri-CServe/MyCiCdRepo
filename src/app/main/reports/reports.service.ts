import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable()
export class ReportService {
  constructor(private _httpClient: HttpClient) { }
  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  getCpareports(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/cpaReport`;
    return this._httpClient.post(url, json);
  }
  getCpareExportports(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/cpaReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  getClientReports(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/clientReport`;
    return this._httpClient.post(url, json);
  }

  getClientExportReports(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/clientReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }

  getApReports(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/actualPlannedReport`;
    return this._httpClient.post(url, json);
  }

  getApExportReports(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/actualPlannedReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }

  getActivityReports(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/activityReport`;
    return this._httpClient.post(url, json);
  }

  getActivityExportReports(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/activityReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }

  getOtherReport(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/otherReport`;
    return this._httpClient.post(url, json);
  }

  
  getOtherExportReport(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/otherReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }

  getKraReport(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/kraReport`;
    return this._httpClient.post(url, json);
  }

  getKraExportReport(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/kraReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  getAutoManualReport(json): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/autoManualReport`;
    return this._httpClient.post(url, json);
  }
  getAutoManualExportReport(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/autoManualReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  getAllTypeofWork(): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/gettypeofworklist`;
    return this._httpClient.get(url);
  }
  getAllBillingType(): Observable<any> {
    const url = `${environment.apiSettingsUrl}/setting/getbillingtypelist`;
    return this._httpClient.get(url);
  }
  getAllUserList(): Observable<any> {
    const url = `${environment.apiUserManagementUrl}/users/usersForDropdown`;
    return this._httpClient.get(url);
  }
  getAllUserLog(json: any): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/loginLogoutReport`;
    return this._httpClient.post(url, json);
  }
  getUserExportReport(json, responseType): Observable<any> {
    const url = `${environment.apiReportUrl}/reports/loginLogoutReport`;
    return this._httpClient.post(url, json, { responseType: responseType });
  }
  getAuditDataReport(json): Observable<any>{
    const url = `${environment.apiReportUrl}/reports/auditReport`;
    return this._httpClient.post(url, json);
  }
  getAuditDataExportReport(json,responseType): Observable<any>{
    const url = `${environment.apiReportUrl}/reports/auditReport`;
    return this._httpClient.post(url, json,{ responseType: responseType });
  }
}