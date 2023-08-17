import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { RealTimeMenuService } from 'app/menu/real-time-menu.service';
import { AuthenticationService } from 'app/auth/service';
@Component({
  selector: '[core-menu]',
  templateUrl: './core-menu.component.html',
  styleUrls: ['./core-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreMenuComponent implements OnInit {
  currentUser: any;
  @Input()layout = 'vertical';

  // @Input()
  menu: any = [];
  // Private
  private _unsubscribeAll: Subject<any>;
  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    private _coreMenuService: CoreMenuService,
    private _authenticationService: AuthenticationService,
    private _realTimeMenuService: RealTimeMenuService
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    // this._authenticationService.getUserDetails().subscribe(res => {
    //   this.menu = []
    //   if (res) {
    //     res.ResponseData.Menu.forEach(data => {
    //       if (data.IsShow == true) {
    //         let obj = {
    //           id: data.MenuId,
    //           title: data.DisplayName,
    //           // translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    //           icon: data.Icon,
    //           type: 'item',
    //           url: data.RouteLink
    //         }
    //         this.menu.push(obj)
    //       }
    //     })
    //     setTimeout(() => {
    //       // Register the menu to the menu service
    //       this._coreMenuService.register('main', this.menu);

    //       // Set the main menu as our current menu
    //       this._coreMenuService.setCurrentMenu('main');
    //     }, 2000);
    //     this.menu = this.menu
    //   }
    // })
  }

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Set the menu either from the input or from the service
    this.menu = this.menu || this._coreMenuService.getCurrentMenu();
      
    // Subscribe to the current menu changes
    this._realTimeMenuService.receiveData().subscribe((res) => {
      this.currentUser = this._coreMenuService.currentUser;
      this.menu = res;
      this._changeDetectorRef.markForCheck();
    });
  }
}
