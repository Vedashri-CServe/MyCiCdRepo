import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RealTimeMenuService } from 'app/menu/real-time-menu.service';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private currentUserRole: BehaviorSubject<boolean>;
  public userData: BehaviorSubject<any>;
  public userDataLogin: BehaviorSubject<any>
  
  constructor(private _http: HttpClient, private _router: Router, private _toastrService: ToastrService, private _realTimeMenuService: RealTimeMenuService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserRole = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('currentUserRole')));
  }
 
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
 
  getValue(): Observable<boolean> {
    return this.currentUserRole.asObservable();
  }
  setValue(newValue): void {
    this.currentUserRole.next(newValue);
  }

  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  get isClient() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  }
 
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUserManagementUrl}/auth/token`, { Username: email, Password: password }).pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.ResponseData && user.ResponseData.Token.Token) {
            user.token = user.ResponseData.Token.Token;
            user.role = 'Admin';
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this._router.navigate(['worklogs']);
            this.getUserDetails().subscribe(res => {
              localStorage.setItem('user_role', res.ResponseData.RoleName[0])
              localStorage.setItem('userData', JSON.stringify(res.ResponseData))
              localStorage.setItem('userId', res.ResponseData.UserId);
              const menuList = res.ResponseData.Menu;
              const selectedMenuList = [];
              for(let menu of menuList) {
                if(menu.IsShow) {
                  selectedMenuList.push({id: menu.DefaultName, title: menu.DisplayName, translate: 'MENU.DASHBOARD.COLLAPSIBLE', icon: menu.Icon, type: 'item', url: menu.RouteLink})
                }
              }
              localStorage.setItem('menu_list', JSON.stringify(selectedMenuList));
              this._realTimeMenuService.sendData(selectedMenuList);
              res.ResponseData.RoleTypeIds.forEach(data => {
                if (data == 3 || data == 1 || data == 2 || data == 4 || data == 5) {
                  localStorage.setItem('currentUserRole', 'true');
                  localStorage.setItem('showReviewCheck', 'true');
                  this.setValue(true)
                } else if (data == 9) {
                  this.setValue(false)
                  localStorage.setItem('currentUserRole', 'false');
                  localStorage.setItem('showReviewCheck', 'false');
                } else {
                  this.setValue(false)
                  localStorage.setItem('currentUserRole', 'false');
                  localStorage.setItem('showReviewCheck', 'true');
                }
              })
            })
          } else { }
          return user;
        })
      );
  }
  
  forgotpassowrd(email: string) {
    return this._http.post<any>(`${environment.apiUserManagementUrl}/auth/forgetpassword`, { UserEmailId: email })
  }

  getUserDetails(): Observable<any> {
    return this._http.get<User[]>(`${environment.apiUserManagementUrl}/auth/getuserdetail`);
  }

  logoutDetails(json) {  
    // remove user from local storage to log user out
    return this._http.post<any>(`${environment.apiUserManagementUrl}/auth/logout`, json).pipe(map(res => {
        this.currentUserSubject.next(null);
        return res;
      })
    );
  }

  setPassword(json) {
    return this._http
      .post<any>(`${environment.apiUserManagementUrl}/auth/setpassword`, json).pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.ResponseData && user.ResponseData.Token.Token) {
          } else { }
          return user;
        })
      );
  }

  checkValidate(json) {
    return this._http
      .post<any>(`${environment.apiUserManagementUrl}/auth/validatetoken`, json)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          return user;
        })
      );
  }
}