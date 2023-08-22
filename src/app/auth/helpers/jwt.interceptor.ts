import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthenticationService } from 'app/auth/service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
 constructor(private _authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this._authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(environment.apiUserManagementUrl);
    const apiReportUrl = request.url.startsWith(environment.apiReportUrl);
    const apiWorklogsUrl = request.url.startsWith(environment.apiWorklogsUrl);
    const apiSettingsUrl = request.url.startsWith(environment.apiSettingsUrl);
    const apiHelpUrl = request.url.startsWith(environment.apiHelpUrl);
     if ((isLoggedIn ) && (isApiUrl || apiWorklogsUrl || apiReportUrl || apiSettingsUrl || apiHelpUrl)) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}