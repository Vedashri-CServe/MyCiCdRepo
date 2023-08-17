import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HelpService {
  public onFileChanged: BehaviorSubject<any>;
  public files: any;
  constructor(private _httpClient: HttpClient) {
    this.onFileChanged = new BehaviorSubject([]);
  }
  getAllVideos(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get(`${environment.apiHelpUrl}/tutorial/getAllBlobs?isOnlyVideos=true`)
        .subscribe((response: any) => {
          this.files = response;
          this.onFileChanged.next(this.files);
          resolve(this.files);
        }, reject);
    });
  }
  getAllFiles(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get(`${environment.apiHelpUrl}/tutorial/getAllBlobs?isOnlyVideos=false`)
        .subscribe((response: any) => {
          this.files = response;
          this.onFileChanged.next(this.files);
          resolve(this.files);
        }, reject);
    });
  }
}