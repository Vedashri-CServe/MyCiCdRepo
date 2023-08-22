import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
import { AuthenticationService } from 'app/auth/service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-forgot-password-v2',
  templateUrl: './auth-forgot-password-v2.component.html',
  styleUrls: ['./auth-forgot-password-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthForgotPasswordV2Component implements OnInit {
  // Public
  public emailVar;
  public coreConfig: any;
  public forgotPasswordForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public error = '';
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   *
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _toastrService: ToastrService
    ) {
    this._unsubscribeAll = new Subject();

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

  // convenience getter for easy access to form fields

  /**
   * On init
   */
  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  get f() {
    return this.forgotPasswordForm.controls;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }else{
      this.loading = true;
      this._router.navigate(['']);
      this._authenticationService.forgotpassowrd(this.f.email.value) .subscribe(
        data => {
          if (data.ResponseStatus == "Success") {
            this.loading = false;
            this._router.navigate(['']);
            this._toastrService.success('Email send successfully !', 'Success', {
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
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
    }
   

      // .pipe(first())
      // .subscribe(
      //   data => {
      //     if (data.ResponseStatus == "Success") {
      //       this._router.navigate(['login-v2']);
      //       this._toastrService.success('Login SuccessFully !', 'Success', {
      //         toastClass: 'toast ngx-toastr',
      //         closeButton: true
      //       });
      //     } else {
      //       this._toastrService.error(data.Message, 'Error!', {
      //         toastClass: 'toast ngx-toastr',
      //         closeButton: true
      //       });
      //     }
      //   },
      //   error => {
      //     this.error = error;
      //   }
      // );
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