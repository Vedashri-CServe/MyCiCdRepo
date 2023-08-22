import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SettingsService } from '../../settings.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-add-subprocess',
    templateUrl: './add-subprocess.component.html',
    styleUrls: ['./add-subprocess.component.scss']
})
export class AddSubProcessComponent implements OnInit {
    public process;
    public subProcess;
    public isEdit = false;
    public processData: any;
    public ProcessId: any;
    public SubprocessId: any;
    public isEditMeg = false;
    public selectBasicLoading = false;
    public processList = [];
    public contentHeader: object;
    constructor(
        private _coreSidebarService: CoreSidebarService,
        private SettingsService: SettingsService,
        private _toastrService: ToastrService
    ) {
        this.SettingsService.subProcessClickedEvent.subscribe((data: string) => {
            if (data == 'Edit') {
                this.isEdit = true;
                this.isEditMeg = true;
            } else {
                this.objectClear();
            }
            this.SettingsService.subProcessEditClickedEvent.subscribe((data: any) => {
                if (data) {
                    this.processData = data;
                    this.ProcessId = this.processData?.ProcessId;
                    this.process = this.processData?.ProcessName;
                    this.subProcess = this.processData?.SubprocessName;
                    this.SubprocessId = this.processData?.SubprocessId;
                }
            })
        });
    }

    private selectBasicMethod() {
        this.selectBasicLoading = true;
        this.SettingsService.onProcessList.subscribe(response => {
            this.processList = response.ResponseData.List;
            this.processList.forEach(data => {
                data['name'] = data.ProcessName;
                data['id'] = data.ProcessId;
            })
            this.selectBasicLoading = false;
        });
    }

    toggleSidebar(name): void {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }

    objectClear() {
        this.process = "",
        this.subProcess = "",
        this.isEdit = false;
        this.ProcessId = "";
    }
   
    async submit(form) {
        if (form.valid) {
            if (form.controls.process.value.ProcessId == undefined) {
                this.ProcessId = this.ProcessId
            } else {
                this.ProcessId = form.controls.process.value.ProcessId
            }
            let json = {
                "SubprocessId": !this.isEdit ? 0 : this.SubprocessId,    // id = 0 for insert, updated id = for modify
                "ProcessId": !this.isEdit ? form.controls.process.value.ProcessId : this.ProcessId,   // process id mapped for sub process
                "SubprocessName": !this.isEdit ? form.controls.subProcess.value : this.subProcess
            }
            let response = await this.SettingsService.addSubProcess(json).subscribe((res: any) => {
                if (res.ResponseStatus == 'Success') {
                    setTimeout(() => {
                        if (!this.isEditMeg) {
                            this._toastrService.success('You have successfully added Sub-Process', 'Success', {
                                toastClass: 'toast ngx-toastr',
                                closeButton: true
                            });
                        } else {
                            this._toastrService.success('You have successfully update Sub-Process', 'Success', {
                                toastClass: 'toast ngx-toastr',
                                closeButton: true
                            });
                        }
                    }, 1500);
                } else {
                    this._toastrService.error(res?.Message, 'Error!', {
                        toastClass: 'toast ngx-toastr',
                        closeButton: true
                    });
                }
                form.resetForm()
                this.objectClear();
                this.toggleSidebar('add-subprocess');
                this.SettingsService.getDataTableRowsSubProcess();
            });
        }
    }
     ngOnInit() {
        this.selectBasicMethod();
        this.SettingsService.getProcessListArray();
        this.SettingsService.onProcessList.subscribe(response => {
            this.processList = response.ResponseData.List
        });
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