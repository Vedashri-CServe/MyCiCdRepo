import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from "../../../@core/components/card-snippet/card-snippet.module";
import { DatatablesModule } from '../tables/datatables/datatables.module';
import { HelpComponent } from './help.component';
import { HelpService } from './help.service';
import { FileUploaderModule } from '../forms/form-elements/file-uploader/file-uploader.module';
import { VideoComponent } from './video/video.component';
import { PlyrModule } from 'ngx-plyr';
import { ExeComponent } from './exe/exe.component';
// routing
const routes: Routes = [
  {
    path: '**',
    component: HelpComponent,
    resolve: {},
    data: { animation: 'chat' }
  }
];
@NgModule({
    declarations: [
        HelpComponent,
        VideoComponent,
        ExeComponent
      ],
    providers: [HelpService, 
    ],
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
        PlyrModule
    ]
})
export class HelpModule {}