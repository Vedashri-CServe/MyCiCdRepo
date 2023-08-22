import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreConfigService } from '@core/services/config.service';
import { HelpService } from '../help.service';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {
  // Public
  public files: Plyr.Source[] = [];
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)
  // or get it from plyrInit event
  public plyr: PlyrComponent;
  public player: Plyr;
  public plyrOptions = { tooltips: { controls: true } };
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private helpService: HelpService,
    private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.helpService.getAllVideos();
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.helpService.onFileChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.files = response;
          });
        }, 450);
      } else {
        this.helpService.onFileChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          var filesData = response.ResponseData;
          setTimeout(() => {
            if (filesData && filesData.length > 0) {
              filesData.forEach(data => {
                data['obj'] = [{
                  'src': data?.Url,
                  'type': data?.ContentType,
                  'size': 576
                }]
              })
            }
            this.files = filesData
          }, 200);
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}