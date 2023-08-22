import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CoreConfigService } from '@core/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/auth/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss']
})
export class SetNewPasswordComponent implements OnInit {
  public resetPasswordForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public confPasswordTextType: boolean;
  public loading = false;
  public token: any
  public type: any;
  coreConfig: any;

  /**
  * Constructor
  *
  * @param {CoreConfigService} _coreConfigService
  * @param {FormBuilder} _formBuilder
  */
  // Private
  private _unsubscribeAll: Subject<any>;
  constructor(private _coreConfigService: CoreConfigService,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService,
    private _router: Router,
    private _toastrService: ToastrService) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params['token'];
      this.type = params['type'];
    });
    this._unsubscribeAll = new Subject();
    this.checkValidateToken()
    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  ngOnInit(): void {
    this.resetPasswordForm = this._formBuilder.group({
      newPassword: ['', [Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
      confirmPassword: ['', [Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]]
    });
    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  checkValidateToken() {
    let json = {
      "Token": this.token,
      "TokenType": this.type
    }
    this.authenticationService.checkValidate(json).subscribe((res) => {
      if (res.ResponseStatus == "Failure") {
        // this._router.navigate(['/pages/authentication/login-v2']);
        this._toastrService.error(res.ErrorData.Error, 'Error!', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
      }
    })
  }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }
    if (this.f.newPassword.value != this.f.confirmPassword.value) {
      return;
    }
    let json = {
      "Token": this.token,
      "Password": this.f.newPassword.value,
      "TokenType": this.type
    }
    let response = await this.authenticationService.setPassword(json).subscribe(data => {
      if (data.ResponseStatus == "Success") {
        localStorage.removeItem('currentUser');
        this.loading = false;
        localStorage.removeItem('currentUser');
        this._router.navigate(['/pages/authentication/login-v2']);
        this._toastrService.success('Password has been successfully update !', 'Success', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
      } else {
        this.loading = false;
        this._toastrService.error(data.Message, 'Error!', {
          toastClass: 'toast ngx-toastr',
          closeButton: true
        });
      }
    })
  }

  get f() {
    return this.resetPasswordForm.controls;
  }
  /**
  * Toggle password
  */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * Toggle confirm password
   */
  toggleConfPasswordTextType() {
    this.confPasswordTextType = !this.confPasswordTextType;
  }
  /**
     * On destroy
     */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}