import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { ClientComponent } from './client/client.component';
import { CpaComponent } from './cpa/cpa.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { ProcessComponent } from './process/process.component';
import { StatusComponent } from './status/status.component';
import { AddCpaComponent } from './cpa/add-cpa/add-cpa.component';
import { FormsModule } from '@angular/forms';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { AddProcessComponent } from './process/add-process/add-process.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { SubProcessComponent } from './subprocess/subprocess.component';
import { AddSubProcessComponent } from './subprocess/add-subprocess/add-subprocess.component';
import { TooltipsModule } from '../components/tooltips/tooltips.module';
import { BlockUIModule } from 'ng-block-ui';
import { PermissionComponent } from './permission/permission.component';
import { CsvModule } from '@ctrl/ngx-csv';
import { FileUploadModule } from 'ng2-file-upload';
// routing
const routes: Routes = [
  {
    path: '**',component: SettingsComponent,data: { animation: 'chat' }
  } 
];
@NgModule({
  declarations: [
    SettingsComponent,
    ClientComponent,
    CpaComponent,
    UserComponent,
    TaskComponent,
    ProcessComponent,
    SubProcessComponent,
    StatusComponent,
    AddCpaComponent,
    AddClientComponent,
    AddStatusComponent,
    AddTaskComponent,
    AddProcessComponent,
    AddSubProcessComponent,
    AddUserComponent,
    PermissionComponent,
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
    FormsModule,
    ColorPickerModule,
    FileUploadModule,
    TooltipsModule,
    BlockUIModule.forRoot(),
    NgxMaskModule.forRoot(),
    CsvModule
  ],
  providers: [
    SettingsService,
    ]
})
export class SettingsModule { }