import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { WorklogsComponent } from './worklogs.component';
import { WorklogsService } from './worklogs.service';
import { WorklogsTimelineComponent } from './worklogs-timeline/worklogs-timeline.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WorklogsDailyComponent } from './worklogs-daily/worklogs-daily.component';
import { WorklogsDailySidebarComponent } from './worklogs-daily/worklogs-daily-sidebar/worklogs-daily-sidebar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule } from 'ngx-mask';
import { WorklogsReviewTimeSheetComponent } from './worklogs-reviewtimesheet/worklogs-reviewtimesheet.component';
import { TooltipsModule } from '../components/tooltips/tooltips.module';
import { BlockUIModule } from 'ng-block-ui';
import { CsvModule } from '@ctrl/ngx-csv';
// routing
const routes: Routes = [
  {
    path: '**',component: WorklogsComponent}];
@NgModule({
  declarations: [
    WorklogsComponent,
    WorklogsTimelineComponent,
    WorklogsDailyComponent,
    WorklogsDailySidebarComponent,
    WorklogsReviewTimeSheetComponent
    ],
  imports: [
    CommonModule,
    CoreSidebarModule,
    RouterModule.forChild(routes),
    SweetAlert2Module.forRoot(),
    CoreCommonModule,
    PerfectScrollbarModule,
    NgbModule,
    NgxDatatableModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    TooltipsModule,
    BlockUIModule.forRoot(),
    NgxMaskModule.forRoot(),
    CsvModule
  ],
  providers: [WorklogsService,DatePipe]
})
export class WorklogsModule {}