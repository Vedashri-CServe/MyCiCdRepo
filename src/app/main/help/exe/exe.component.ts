import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CoreConfigService } from "@core/services/config.service";
import { HelpService } from "../help.service";
import { PlyrComponent } from "ngx-plyr";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-exe",
  templateUrl: "./exe.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class ExeComponent implements OnInit {
  // Public
  public files: any;
  @BlockUI() blockUI: NgBlockUI;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private helpService: HelpService,
    private _toastrService: ToastrService,
    private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.helpService.getAllFiles();
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        if (config.layout.animation === "zoomIn") {
          setTimeout(() => {
            this.helpService.onFileChanged
              .pipe(takeUntil(this._unsubscribeAll))
              .subscribe((response) => {
                this.files = response;
              });
          }, 450);
        } else {  
          this.helpService.onFileChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response) => {
              console.log(response);
              if(response.ResponseData[0].ContentType != 'video/mp4'){
                this.files = response.ResponseData[0].Url;
              }
              
            });
        }
      });
  }

  // async downloadMyFile() {
  //   debugger;
  //   let Json = {
  //     FileName: this.files[0].FileName,
  //   };
  //   this.blockUI.start("Loading...");
  //   debugger;
  //   let response = await this.helpService
  //     .downloadExe(Json)
  //     .subscribe((res: any) => {
  //       if (res.ResponseStatus == "Success") {
  //         setTimeout(() => {
  //           this._toastrService.success(
  //             "You have successfully download latest Exe",
  //             "Success",
  //             {
  //               toastClass: "toast ngx-toastr",
  //               closeButton: true,
  //             }
  //           );
  //           this.blockUI.stop();
  //         }, 1500);
  //       } else {
  //         this._toastrService.error(res?.Message, "Error!", {
  //           toastClass: "toast ngx-toastr",
  //           closeButton: true,
  //         });
  //         this.blockUI.stop();
  //       }
  //     });
  // }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
