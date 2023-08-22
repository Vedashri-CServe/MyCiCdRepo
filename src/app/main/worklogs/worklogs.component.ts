import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'app/auth/service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-worklogs',
  templateUrl: './worklogs.component.html',
  styleUrls: ['./worklogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'worklogs-application' }
})
export class WorklogsComponent {
  public subMenu: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private _authenticationService: AuthenticationService,private _router: Router) {
    this.blockUI.start('Loading...')
    this._authenticationService.getUserDetails().subscribe(res => {

      if (res && res.ResponseData) {
        this.subMenu = res.ResponseData.Menu[1].TabData
        setTimeout(()=>{
          this.blockUI.stop()
        },3000);
      }
    })
  }
}