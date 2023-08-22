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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ClientComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  private _unsubscribeAll: Subject<any>;
  public isActionShow = false;
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[0].TabData[1]
  public totalElements = 0;
  Number = 0;
  size = 10;
  index = 1;
  file: any;
  parsedData: any
  mainArray = [];
  downloadFile: [];
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public settingService: SettingsService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _toastrService: ToastrService,
    private modalService: NgbModal
  ) {
    this._unsubscribeAll = new Subject();
    this.exportReportDownload();
  }

  onFileSelected(event: any) {
    this.mainArray = [];
    let mainArrayData = []
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      mainArrayData = this.parsedData.slice(1).map((row: any) => {
        const obj: { [key: string]: any } = {};
        this.parsedData[0].forEach((header: any, index: number) => {
          obj[header] = row[index];
        });
        return obj;
      });
      this.mainArray = mainArrayData.map((data) => {
        let obj;
        if (data) {
          obj = {
            'ClientName': data?.ClientName ? data.ClientName : null,
            'ProjectName': data.ProjectName ? data.ProjectName : null,
            'TypeOfWork': data.TypeOfWork ? data.TypeOfWork : null,
            'SOP': false
          }
        }
        return obj
      });
    };
    reader.readAsBinaryString(file);
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
          "UserId": data.UserId
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.deletClient(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that._toastrService.success('You have successfully deleted project', 'Success', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.settingService.getDataTableRowsClient(1, that.selectedOption, that.searchValue);
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
  async ConfirmStatusOpen(data) {
    let that = await this;
    let text = !data.IsAvailable ? "Do you really want to Active these record?" : "Do you really want to Inactive these record?";
    Swal.fire({
      title: 'Are you sure?',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, Change it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {
        var json = {
          "Id": data.UserId,
          "IsAvailable": !data.IsAvailable,
          "TableType": 2
        }
        that.blockUI.start('Loading...')
        let response = that.settingService.updateStatus(json).subscribe(res => {
          if (res.ResponseStatus !== 'Failure') {
            that._toastrService.success('You have successfully update status', 'Success', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
            that.settingService.getDataTableRowsClient(1, that.selectedOption, that.searchValue);
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
  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "OrganizationType": 3,
      "Index": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": true,
      "GlobalSearch": this.searchValue,
      "TypeOfWork": null,
      "BillingType": null,
      "ContractedHours": null,
      "IsAvailable": null,
      "IsDownload": true
    }
    this.settingService.getDataTableRowsExportProject(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "ProjectReport.xlsx");
      this.blockUI.stop()
    });
  }
  exportReportDownload() {
    this.settingService.downloadFile().subscribe(res => {
      this.file = res.ResponseData[0].Url
    })
  }
  setPage(pageInfo) {
    this.index = pageInfo.offset + 1;
    this.settingService.getDataTableRowsClient(pageInfo.offset + 1, pageInfo.limit, this.searchValue);
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.searchValue = val;
    if(this.searchValue.length >= 3){
      this.settingService.getDataTableRowsClient(1, 10, val);
    }else if(this.searchValue.length == 0){
      this.settingService.getDataTableRowsClient(1, 10, val);
    }
    this.table.offset = 0;
  }
  toggleSidebar(name, event, data): void {
    data['index'] = this.index;
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.settingService.isEditofclient(event);
    this.settingService.isEditDataofClient(data);
  }
  async selectDropdown(selectOption) {
    this.selectedOption = selectOption;
    this.settingService.getDataTableRowsClient(1, selectOption, this.searchValue);
  }

  SubmitApprove() {
    this.blockUI.start('Loading...');
    this.settingService.importCSVData(this.mainArray).subscribe(res => {
      if (res.ResponseStatus && res.ResponseStatus !== 'Failure') {
        this._toastrService.success('You have successfully Import Data', 'Success', {
          toastClass: 'toast ngx-toastr', closeButton: true});
        this.blockUI.stop();
        this.settingService.getDataTableRowsClient(1, this.selectedOption, this.searchValue);
        this.modalService.dismissAll("");
      } else if (res.ResponseStatus && res.ResponseStatus == 'Failure' && res.ErrorData.ErrorDetail == null) {
        this._toastrService.error(res.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true});
        this.blockUI.stop();
        this.settingService.getDataTableRowsClient(1, this.selectedOption, this.searchValue);
        this.modalService.dismissAll("");
      } else {
        this.downloadFile = res.ErrorData.ErrorDetail;
        this._toastrService.error(res.Message, 'Error!', {
          toastClass: 'toast ngx-toastr', closeButton: true});
        if (this.downloadFile.length > 0) {
          this.DownloadFile(this.downloadFile)
        }
        this.settingService.getDataTableRowsClient(1, this.selectedOption, this.searchValue);
        this.modalService.dismissAll("");
        this.blockUI.stop();
      }
    })
  }
  DownloadFile(downloadFile) {
    this.blockUI.start('Loading...');
    this.settingService.downloadFileExport(downloadFile).subscribe(res => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(res, "InvalidData.xlsx");
      this.blockUI.stop();
    })
  }
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    setTimeout(x => { this.isActionShow = this.settingService.checkUserRole }, 100);
    this.settingService.getDataTableRowsClient(1, 10, null);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.settingService.onClientListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
          });
          this.blockUI.stop()
        }, 450);
      } else {
        this.settingService.onClientListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.rows.forEach(data => {
            data['status'] = data.IsAvailable == true ? 'Active' : 'In-Active'
            data['typeofwork'] = data.TypeOfWorkList[0].Label
          });
          this.settingService.onTotalCountListChanged.subscribe((res) => {
            this.totalElements = res.TotalCount;
          });
          this.blockUI.stop()
        });
      }
    });
  }
  openSaveModel(modalSAVE) {
    this.modalService.open(modalSAVE, { centered: true });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}