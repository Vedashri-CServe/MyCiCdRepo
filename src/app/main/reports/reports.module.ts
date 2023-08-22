import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { ReportService } from './reports.service';
import { ReportComponent } from './reports.component';
import { CpaReportComponent } from './cpa-report/cpa-report.component';
import { WorkloadComponent } from './workload/workload.component';
import { UserReportComponent } from './user-report/user-report.component';
import { WorklogsReportComponent } from './worklogs/worklogs.component';
import { ActivityComponent } from './activity/activity.component';
import { ApReportComponent } from './ap-report/ap-report.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ClientReportComponent } from './client-report/client-report.component';
import { CardSnippetModule } from "../../../@core/components/card-snippet/card-snippet.module";
import { DatatablesModule } from '../tables/datatables/datatables.module';
import { KraReportComponent } from './kra-report/kra-report.component';
import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';
import { WindowModule } from '@smart-webcomponents-angular/window';
import { DatePickerI18nModule } from '../forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module';
import { BlockUIModule } from 'ng-block-ui';
import { CsvModule } from '@ctrl/ngx-csv';
import { AmReportComponent } from './am-report/am-report.component';
import { UserlogComponent } from './userlog/userlog.component';
import { AuditComponent } from './audit/audit.component';
const routes: Routes = [{ path: '**', component: ReportComponent, data: { animation: 'chat' } }];
  @NgModule({
    declarations: [
        ReportComponent,
        CpaReportComponent,
        WorkloadComponent,
        WorklogsReportComponent,
        UserReportComponent,
        ActivityComponent,
        ApReportComponent,
        AmReportComponent,
        ApprovalsComponent,
        TimesheetComponent,
        ClientReportComponent,
        KraReportComponent,
        UserlogComponent,
        AuditComponent,
        ],
    providers: [ReportService, DatePipe],
    imports: [
        CommonModule,
        CoreSidebarModule,
        RouterModule.forChild(routes),
        CoreCommonModule,
        PerfectScrollbarModule,
        NgbModule,
        NgxDatatableModule,
        NgSelectModule,
        Ng2FlatpickrModule,
        CardSnippetModule,
        DatatablesModule,
        SchedulerModule,
        BlockUIModule.forRoot(),
        WindowModule,
        DatePickerI18nModule,
        CsvModule ]
})
export class ReportModule {}