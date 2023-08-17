import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { ReportService } from '../reports.service';
import { SchedulerComponent, SchedulerViews, SchedulerViewType, SchedulerGroupOrientation, SchedulerResource } from '@smart-webcomponents-angular/scheduler';
import moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
    selector: 'app-worklogs',
    templateUrl: './worklogs.component.html',
    styleUrls: ['./worklogs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WorklogsReportComponent implements OnInit {
    // Public
    public sidebarToggleRef = false;
    public rows;
    public userName;
    private _unsubscribeAll: Subject<any>;
    targetEvent = null;
    eventEditors = null;
    view: SchedulerViewType = 'timelineDay';
    groupOrientation: SchedulerGroupOrientation = 'vertical';
    groups: string[] = ['roomId'];
    dataSource: any = []
    demoarray: any = [];
    breakArry: any = []
    // Decorator
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @BlockUI() blockUI: NgBlockUI;
    constructor(
        private reportService: ReportService,
        private _coreConfigService: CoreConfigService
    ) {
        this._unsubscribeAll = new Subject();
    }

    resources: SchedulerResource[] = [
        {
            label: 'Rooms',
            value: 'roomId',
            dataSource: []
        }]

    today: any

    ngOnInit(): void {
        this.today = new Date().toISOString()
        this.getWorkLog(this.today)
    }


    getWorkLog(selectDate) {
        this.blockUI.start('Loading...')
        this.dataSource = []
        this.demoarray = [];
        var breakArry = []
        this.resources = [
            {
                label: 'Rooms',
                value: 'roomId',
                dataSource: []
            }]
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            let json = {
                "GlobalSearch": "",
                "PageNo": 1,
                "PageSize": 50000,
                "SortColumn": null,
                "IsDesc": 0,
                "StartDate": selectDate,
                "EndDate": selectDate
            }
            this.reportService.getOtherReport(json).subscribe(response => {
                this.rows = response.ResponseData.List;
                this.rows.forEach(data => {
                    let obj = {
                        label: data.UserName,
                        id: data.UserId,
                        type: 'Conference',
                        capacity: 10,
                    }
                    this.resources[0].dataSource.push(obj);
                    let objvar;
                    let objbreak;
                    data.DateTimeLogs.forEach(logs => {

                        if (logs.UserId == data.UserId) {
                            logs.WorkTimes.forEach(data => {
                                const today = new Date(selectDate),
                                    year = today.getFullYear(),
                                    month = today.getMonth(),
                                    date = today.getDate();
                                today.getMinutes()
                                if (data.StartTime != null) {
                                    var startHours = new Date(data.StartTime).getHours();
                                    var startMinute = new Date(data.StartTime).getMinutes()
                                    var endHours = new Date(data.EndTime).getHours()
                                    var endtMinute = new Date(data.EndTime).getMinutes()
                                    objvar = {
                                        dateStart: new Date(year, month, date, startHours, startMinute),
                                        dateEnd: new Date(year, month, date, endHours, endtMinute),
                                        roomId: logs.UserId,
                                        backgroundColor: '#4fd6c1'
                                    }
                                    this.demoarray.push(objvar)
                                }
                            })
                        }
                        if (logs.BreakTimes.length > 0) {
                            logs.BreakTimes.forEach(brak => {
                                const today = new Date(selectDate),
                                    year = today.getFullYear(),
                                    month = today.getMonth(),
                                    date = today.getDate();
                                today.getMinutes()
                                if (brak.StartTime != null) {
                                    var startHours = new Date(brak.StartTime).getHours();
                                    var startMinute = new Date(brak.StartTime).getMinutes()
                                    var endHours = new Date(brak.EndTime).getHours()
                                    var endtMinute = new Date(brak.EndTime).getMinutes()
                                    objbreak = {
                                        //label: 'Break Time',
                                        dateStart: new Date(year, month, date, startHours, startMinute),
                                        dateEnd: new Date(year, month, date, endHours, endtMinute),
                                        roomId: logs.UserId,
                                        backgroundColor: '#82868b'
                                    }
                                    breakArry.push(objbreak);
                                }
                            })
                        }
                    })
                    var ArrayDemo = [].concat(this.demoarray, breakArry);
                    this.dataSource = (() => {
                        const today = new Date(), year = today.getFullYear(), month = today.getMonth(), date = today.getDate();
                        let dataWithGroups: any = []
                        dataWithGroups = ArrayDemo
                        return dataWithGroups
                    })();
                    this.blockUI.stop();
                })
            });
        });
    }

    handleSchedulerEvent(data) {
        var target = data.detail.oldValue;
        const date = new Date(target);
        //const TimelineDate = date.toISOString();
        const TimelineDate = moment(new Date(date)).format('YYYY-MM-DD');
        this.getWorkLog(TimelineDate)
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        const scheduler = document.querySelector('smart-scheduler');
        scheduler.addEventListener('contextMenuOpening', function (e) {
            e.preventDefault()
        });
    }
}