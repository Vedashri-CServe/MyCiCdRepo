import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../settings.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html'
})
export class AddClientComponent implements OnInit {
  public clientName;
  public typeWork;
  public SOPCheckbox;
  public isEdit;
  public cpaName = "";
  public clientData: any;
  public UserId;
  public cpaList = [];
  public isEditMeg = false;
  public selectBasicLoading = false;
  public OrgId;
  public contentHeader: object;
  public typeOfWorkArray = [];
  public workTypeId;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private _coreSidebarService: CoreSidebarService,
    private SettingsService: SettingsService,
    private _toastrService: ToastrService) {
    this.SettingsService.clientClickedEvent
      .subscribe((data: string) => {
        if (data == 'Edit') {
          this.isEdit = true;
          this.isEditMeg = true;
        } else {
          this.clearObj()
        }
        this.SettingsService.clientEditClickedEvent.subscribe((data: any) => {
          if (data) {
            this.clientData = data;
            if (this.clientData) {
              this.UserId = this.clientData?.UserId;
              this.clientName = this.clientData?.Name;
              this.typeWork = this.clientData?.TypeOfWork;
              this.SOPCheckbox = this.clientData?.SOP;
              this.cpaName = this.clientData?.CPAName;
              this.OrgId = this.clientData?.ParentId;
              if(this.clientData?.TypeOfWorkList){
                this.typeWork = this.clientData?.TypeOfWorkList[0]?.Label;
                this.workTypeId = this.clientData?.TypeOfWorkList[0]?.Value
              }
            }
          }
        })
      });
  }
  clearObj() {
    this.UserId = "";
    this.clientName = "";
    this.typeWork = "";
    this.SOPCheckbox = false;
    this.cpaName = "";
    this.isEdit = false;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }
  private selectBasicMethod() {
    this.selectBasicLoading = true;
    this.SettingsService.onCPAList.subscribe(response => {
      this.cpaList = response.ResponseData;
       if(this.cpaList && this.cpaList.length > 0){
        this.cpaList.forEach(data => {
          data['name'] = data.Label;
          data['id'] = data.Value;
        })
       }
      this.selectBasicLoading = false;
    });
  }

  filterByTypeofWrk(data) {
    this.typeOfWorkArray.forEach(work => {
      if (work.id == data?.CPATypeOfWork) {
        this.typeWork = work.Label
        this.workTypeId = work?.Value
      }
    })
  }
  async submit(form: NgForm) {  
    if (form.controls.cpaName.value.id == undefined) {
      this.OrgId = this.OrgId
    } else {
      this.OrgId = form.controls.cpaName.value.id
    }
    if (form.controls.typeWork.value.id) {
      this.workTypeId = form.controls.typeWork.value.Value
    } else {
      this.workTypeId = this.workTypeId
    }
    if (form.valid) {
      let json = {
        "UserId": !this.isEdit ? 0 : this.UserId,
        "ParentId": this.OrgId,
        "Name": form.controls.clientName.value,
        "TypeOfWork": this.workTypeId,
        "SOP": form.controls.SOPCheckbox.value == true ? 1 : 0,
        "OrganizationType": 3,
        "IsDeleted": 0,
      }
      this.blockUI.start('Loading...')
      let response = await this.SettingsService.addClientData(json).subscribe((res: any) => {
        if (res.ResponseStatus == 'Success') {
          setTimeout(() => {
            if (!this.isEditMeg) {
              this._toastrService.success('You have successfully added Project', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            } else {
              this._toastrService.success('You have successfully update Project', 'Success', {
                toastClass: 'toast ngx-toastr',
                closeButton: true
              });
            }
            this.blockUI.stop()
          }, 1500);
        } else {
          this._toastrService.error(res?.Message, 'Error!', {
            toastClass: 'toast ngx-toastr',
            closeButton: true
          });
          this.blockUI.stop()
        }
        form.resetForm()
        this.clearObj();
        this.toggleSidebar('add-client');
        this.SettingsService.getDataTableRowsClient(this.clientData.index,10,null);
      });
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    this.SettingsService.getAllTypeofWork();
    this.SettingsService.onTypeOfWorkChange.subscribe(res => {
      this.typeOfWorkArray = res;
      this.typeOfWorkArray.forEach(data => {
        data['name'] = data.Label;
        data['id'] = data.Value;
      })
    });
    this.selectBasicMethod();
    this.SettingsService.getCPAListArray();
    this.SettingsService.onCPAList.subscribe(response => {
      this.cpaList = response.ResponseData;
    });
    // content header
    this.contentHeader = {
      headerTitle: 'Select',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Select',
            isLink: false
          }
        ]
      }
    };
  }
}