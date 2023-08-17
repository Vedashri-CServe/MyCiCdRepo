import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { first } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';

import { colors } from 'app/colors.const';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service';
// import { DashboardService } from 'app/main/dashboard/dashboard.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements OnInit {
  // Decorator
  // @ViewChild('gainedChartRef') gainedChartRef: any;
  // @ViewChild('orderChartRef') orderChartRef: any;
  // @ViewChild('avgSessionChartRef') avgSessionChartRef: any;
   @ViewChild('supportChartRef') supportChartRef: any;
  // @ViewChild('salesChartRef') salesChartRef: any;

  // Public
  public data: any;
  public currentUser: any;
  public loading = false;
  public users: User[] = [];
  public supportChartoptions;
  public puChartoptions;
  public clientChartoptions;
  public billingChartoptions;
  public workChartoptions;
  public isMenuToggled = true;

  // Private
  private $primary = '#7367F0';
  private $warning = '#FF9F43';
  private $info = '#00cfe8';
  private $info_light = '#1edec5';
  private $strok_color = '#b9c3cd';
  private $label_color = '#e7eef7';
  private $white = '#fff';
  private $textHeadingColor = '#5e5873';
  private $c1 = '#0CC6AA';
  private $c2 = '#FF829D';
  private $c3 = '#FDB663';
  private $c4 = '#5EB5EF';

  /**
   * Constructor
   *
   * @param {UserService} _userService
   * @param {DashboardService} _dashboardService
   * @param {CoreConfigService} _coreConfigService
   *
   */
  constructor(
    private _userService: UserService,
    // private _dashboardService: DashboardService,
    private _coreConfigService: CoreConfigService
  ) {


    // Productive Chart
    this.puChartoptions = {
      chart: {
        type: 'pie',
        height: 345,
        toolbar: {
          show: false
        }
      },
      labels: ['Unproductive', 'Productive'],
      dataLabels: {
        enabled: false
      },
      legend: {  show: true,position: 'bottom'  },
      stroke: {
        width: 4
      },
      colors: [this.$c2,this.$c1]
    };

    // Client Chart
    this.clientChartoptions = {
      chart: {
        type: 'pie',
        height: 345,
        toolbar: {
          show: false
        }
      },
      labels: ['In-Active', 'On Hold','Active'],
      dataLabels: {
        enabled: false
      },
      legend: {  show: true,position: 'bottom'  },
      stroke: {
        width: 4
      },
      colors: [this.$c2,this.$c4,this.$c1]
    };

    // Billing Chart
    this.billingChartoptions = {
      chart: {
        type: 'pie',
        height: 345,
        toolbar: {
          show: false
        }
      },
      labels: ['By Account', 'Per Return', 'FTE'],
      dataLabels: {
        enabled: false
      },
      legend: {  show: true,position: 'bottom'  },
      stroke: {
        width: 4
      },
      colors: [this.$c2,this.$c4,this.$c1]
    };

    // work Chart
    this.workChartoptions = {
      chart: {
        type: 'pie',
        height: 345,
        toolbar: {
          show: false
        }
      },
      labels: ['Taxation','Both', 'Accounting'],
      dataLabels: {
        enabled: false
      },
      legend: { show: true,position: 'bottom' },
      stroke: {
        width: 4
      },
      colors: [this.$c2,this.$c3,this.$c1]
    };
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // get the currentUser details from localStorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    /**
     * Get the secure api service (based on user role) (Admin Only secure API)
     * For example purpose
     */
    this.loading = true;
    this._userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.loading = false;
        this.users = users;
      });

    }

  /**
   * After View Init
   */
  ngAfterViewInit() {
    // Subscribe to core config changes
    this._coreConfigService.getConfig().subscribe(config => {
      // If Menu Collapsed Changes
      if (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) {
        setTimeout(() => {
          // Get Dynamic Width for Charts
          this.isMenuToggled = false;
          //this.supportChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
          this.puChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
          this.clientChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
          this.billingChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
          this.workChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
        }, 1000);
      }
    });
  }
}
