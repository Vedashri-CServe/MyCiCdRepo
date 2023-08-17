import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SettingsService } from '../settings.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-subprocess',
    templateUrl: './subprocess.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SubProcessComponent implements OnInit {
    // Public
    public sidebarToggleRef = false;
    public rows;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public temp = [];
    public searchValue = '';
    private tempData = [];
    private _unsubscribeAll: Subject<any>;
    public isActionShow = false

    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('tableRowDetails') tableRowDetails: any;
    constructor(
        private settingService: SettingsService,
        private _coreSidebarService: CoreSidebarService,
        private _coreConfigService: CoreConfigService,
        private _toastrService: ToastrService
    ) {
        this._unsubscribeAll = new Subject();
    }



    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.tempData.filter(function (d) {
            return d.SubprocessName.toLowerCase().indexOf(val) !== -1 || !val;
        });
       this.rows = temp;
       this.table.offset = 0;
    }

    toggleSidebar(name, event, data): void {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
        this.settingService.isEditofSubProcess(event);
        this.settingService.isEditDataofSubProcess(data);
    }

    async ConfirmTextOpen(data) {
        let that = await this;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
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
                    "SubprocessId": data.SubprocessId
                }
               let response = that.settingService.deleteSubProcess(json).subscribe(res => {
                    if (res.ResponseStatus !== 'Failure') {
                        that._toastrService.success('You have successfully deleted sub-process', 'Success', {
                            toastClass: 'toast ngx-toastr',
                            closeButton: true
                        });
                        that.settingService.getDataTableRowsSubProcess();
                    } else {
                        that._toastrService.error(res.Message, 'Error!', {
                            toastClass: 'toast ngx-toastr',
                            closeButton: true
                        });
                    }
                });
            }
        });
    }

    ngOnInit(): void {
        setTimeout(x => { this.isActionShow = this.settingService.checkUserRole }, 100)
        this.settingService.getDataTableRowsSubProcess();
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            if (config.layout.animation === 'zoomIn') {
                setTimeout(() => {
                    this.settingService.onSubProcessListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                        this.rows = response;
                        this.tempData = this.rows;
                    });
                }, 450);
            } else {
                this.settingService.onSubProcessListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                    this.rows = response;
                    this.tempData = this.rows;
                });
            }
        });
    }
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
 }