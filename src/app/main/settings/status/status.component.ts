import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SettingsService } from '../settings.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public searchValue = '';
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public isActionShow = false;
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[0].TabData[5];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
   constructor(
    private settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _toastrService: ToastrService
  ) {
    this._unsubscribeAll = new Subject();
  }

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    // Reset ng-select on search
    const val = event.target.value.toLowerCase();
    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.StatusName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }

  toggleSidebar(name, event, data): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofStatus(event);
    this.settingService.isEditDataofStatus(data);
  }

  async ConfirmTextOpen(data) {
    let that = await this;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to Delete these record?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {
        var json = {
          "Id": data.StatusId
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.deletStatus(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that._toastrService.success('You have successfully deleted status', 'Success', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.settingService.getDataTableRowsStatus();
            that.blockUI.stop()
          } else {
            that._toastrService.error(res.Message, 'Error!', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.blockUI.stop()
          }
        });
      }
    });
  }
 
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    setTimeout(x => { this.isActionShow = this.settingService.checkUserRole }, 100)
    this.settingService.getDataTableRowsStatus()
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.settingService.onStatusListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
          });
          this.blockUI.stop()
        }, 450);
      } else {
        this.settingService.onStatusListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.tempData = this.rows;
        });
        this.blockUI.stop()
      }
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