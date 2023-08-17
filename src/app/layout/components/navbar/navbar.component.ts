import { Component, OnDestroy, OnInit, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from 'app/auth/service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { CoreMediaService } from '@core/services/media.service';

import { User } from 'app/auth/models';

import { coreConfig } from 'app/app-config';
import { Router } from '@angular/router';
import { WorklogsService } from 'app/main/worklogs/worklogs.service';
import moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  public horizontalMenu: boolean;
  public hiddenMenu: boolean;

  public coreConfig: any;
  public currentSkin: string;
  public prevSkin: string;

  public currentUser: User;

  public languageOptions: any;
  public navigation: any;
  public selectedLanguage: any;
  public rotetype

  @HostBinding('class.fixed-top')
  public isFixed = false;

  @HostBinding('class.navbar-static-style-on-scroll')
  public windowScrolled = false;
  @BlockUI() blockUI: NgBlockUI;
  // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding
  public userData = {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) &&
      this.coreConfig.layout.navbar.type == 'navbar-static-top' &&
      this.coreConfig.layout.type == 'horizontal'
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreMediaService} _coreMediaService
   * @param {MediaObserver} _mediaObserver
   * @param {TranslateService} _translateService
   */
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _coreConfigService: CoreConfigService,
    private _coreMediaService: CoreMediaService,
    private _coreSidebarService: CoreSidebarService,
    private _mediaObserver: MediaObserver,
    public _translateService: TranslateService,
    private worklogsService: WorklogsService,
  ) {


    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));

    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      fr: {
        title: 'French',
        flag: 'fr'
      },
      de: {
        title: 'German',
        flag: 'de'
      },
      pt: {
        title: 'Portuguese',
        flag: 'pt'
      }
    };

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }


  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebar(key): void {
    this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
  }

  /**
   * Set the language
   *
   * @param language
   */
  setLanguage(language): void {
    // Set the selected language for the navbar on change
    this.selectedLanguage = language;

    // Use the selected language id for translations
    this._translateService.use(language);

    this._coreConfigService.setConfig({ app: { appLanguage: language } }, { emitEvent: true });
  }

  /**
   * Toggle Dark Skin
   */
  toggleDarkSkin() {
    // Get the current skin
    this._coreConfigService.getConfig().pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
        this.currentSkin = config.layout.skin;
      });
    // Toggle Dark skin with prevSkin skin
    this.prevSkin = localStorage.getItem('prevSkin');
    if (this.currentSkin === 'dark') {
      this._coreConfigService.setConfig(
        { layout: { skin: this.prevSkin ? this.prevSkin : 'default' } },
        { emitEvent: true }
      );
    } else {
      localStorage.setItem('prevSkin', this.currentSkin);
      this._coreConfigService.setConfig({ layout: { skin: 'dark' } }, { emitEvent: true });
    }
  }

  logout() {
    //get daily work plan 
    this.blockUI.start('Loading...')
    this.worklogsService.getWorkPlan(null, 1, 50000).then((res: any) => {
      if (res.ResponseData) {
        if (res.ResponseData.WorkPlanList.length > 0) {
          let utcDate = moment.utc().format("YYYY-MM-DD hh:mm:ss");
          let workdata = res.ResponseData.WorkPlanList;
          workdata.forEach(data => {
            if (data["EventType"] == 11 || data["EventType"] == 13) {
              let trueRecord = {
                WorkPlanId: data["WorkPlanId"],
                TaskId: data["taskid"],
                EventTime: utcDate,
                EventType: data["EventType"] == 13 || data["EventType"] == 11 ? 12 : data["EventType"], // (11 - start), (13 - continue), (15 - breakstart)
                EventDuration: null,
                IsStop: data["IsStop"] == null ? "PAUSE" : data["IsStop"],
              };
              this.worklogsService.stopworklog(trueRecord).subscribe((res) => { });
            }
          })
        }
        let json = {
          "isLogout": true
        }
        this._authenticationService.logoutDetails(json).subscribe(res => {
          if (res.ResponseStatus) {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('userData');
            localStorage.removeItem('userId');
            localStorage.removeItem('user_role');
            localStorage.removeItem('showReviewCheck');
            this._router.navigate(['/pages/authentication/login-v2']);
            this.blockUI.stop()
          };
        });
      }
    })
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // get the currentUser details from localStorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.userData = JSON.parse(localStorage.getItem('userData'));
      this.rotetype = localStorage.getItem('user_role')
    }, 1000)
    // Subscribe to the config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
      this.horizontalMenu = config.layout.type === 'horizontal';
      this.hiddenMenu = config.layout.menu.hidden === true;
      this.currentSkin = config.layout.skin;
      // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
      if (this.coreConfig.layout.type === 'vertical') {
        setTimeout(() => {
          if (this.coreConfig.layout.navbar.type === 'fixed-top') {
            this.isFixed = true;
          }
        }, 0);
      }
    });

    // Horizontal Layout Only: Add class fixed-top to navbar below large screen
    if (this.coreConfig.layout.type == 'horizontal') {
      // On every media(screen) change
      this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
        const isFixedTop = this._mediaObserver.isActive('bs-gt-xl');
        if (isFixedTop) {
          this.isFixed = false;
        } else {
          this.isFixed = true;
        }
      });
    }

    // Set the selected language from default languageOptions
    this.selectedLanguage = _.find(this.languageOptions, {
      id: this._translateService.currentLang
    });
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