import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { DatePipe } from "@angular/common";
import { ReportService } from '../reports.service';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SettingsService } from 'app/main/settings/settings.service';
@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserlogComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public dataOflogs = []
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isDisable = true;
  public basicDPdata;
  public maxtodayDate;
  totalElements = 0;
  Number = 0;
  size = 10;
  public searchDate;
  maxDate;
  public userDepartment = [];
  public department;
  public userList = [];
  public userId: any = [];
  userArrayList = [];
  public userLogStatus;
  userLogStatusList = [{
    id: 0,
    name: 'No'
  }, {
    id: 1,
    name: 'Yes'
  }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private reportService: ReportService,
    private datePipe: DatePipe,
    private settingService: SettingsService) {
    const todayDate = new Date();
    this.maxDate = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth() + 1,
      day: todayDate.getDate()
    };
  }
  
  ngOnInit(): void {
    this.blockUI.start('Loading...')
    const date = new Date();
    this.maxtodayDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.basicDPdata = this.datePipe.transform((new Date), 'yyyy-MM-dd');
    let json = {
      "GlobalSearch": "",
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": true,
      "DateFilter": null,
      "IsDownload": false,
      "Users": [],
      "Departments": [],
      "Reporting": null,
      "PresentStatus": null
    }
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
    setTimeout(() => {
      this.settingService.getDepartmentList();
      this.settingService.onDepeartmentList.subscribe(response => {
        this.userDepartment = response.ResponseData;
        if (this.userDepartment && this.userDepartment.length > 0) {
          this.userDepartment.forEach((data) => {
            data["name"] = data.Label;
            data["id"] = data.Value;
          });
        }
      });
      this.reportService.getAllUserList().subscribe(response => {
        this.userList = response.ResponseData;
        if (this.userList && this.userList.length > 0) {
          this.userList.forEach((data) => {
            data["name"] = data.Label;
            data["id"] = data.Value;
          });
        }
      });
    }, 200)
  }

  exportReport() {
    this.blockUI.start('Loading...')
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "Available": null,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "IsDesc": 0,
      "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": true,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Reporting": null,
      "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
    }
    this.reportService.getUserExportReport(json, 'blob').subscribe(response => {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(response, "UserLogReport.xlsx");
      this.blockUI.stop();
    });
  }
  onDateSelection(date: NgbDate) {
    this.isDisable = false
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  isHovered(date: NgbDate) {
    return (this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate));
  }
  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }
  isRange(date: NgbDate) {
    return (date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date));
  }
  applyFilter() {
    this.blockUI.start('Loading...');
    this.userArrayList = []
    this.userId?.forEach(a => {
      this.userArrayList.push(a.Value)
    })
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": true,
      "Available": null,
      "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Reporting": null,
      "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
    };
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  resetFilter() {
    this.blockUI.start('Loading...')
    this.department = null;
    this.userArrayList = [];
    this.userId = []
    let json = {
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "IsDesc": 1,
      "Available": null,
      "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "Users": [],
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "Departments": [],
      "Reporting": [],
      "PresentStatus": null
    };
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  searchData(data) {
    this.blockUI.start('Loading...')
    if (data.year != undefined) {
      this.searchDate = new Date(Date.UTC(data.year, data.month - 1, data.day));
    } else {
      this.searchDate = new Date().toISOString()
    }
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": this.selectedOption,
      "SortColumn": null,
      "IsDesc": true,
      "DateFilter": this.searchDate,
      "Available": null,
      "IsDownload": false,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Reporting": [],
      "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
    }
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
   setPage(pageInfo) {
    this.blockUI.start('Loading...')
    let json = {
      "PageNo": pageInfo.offset + 1,
      "PageSize": pageInfo.limit,
      "GlobalSearch": this.searchValue,
      "SortColumn": null,
      "Available": null,
      "IsDesc": true,
      "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Reporting": [],
      "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
    }
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
  async selectDropdown(selectOption) {
    this.blockUI.start('Loading...')
    this.selectedOption = parseInt(selectOption)
    let json = {
      "GlobalSearch": this.searchValue,
      "PageNo": 1,
      "PageSize": parseInt(selectOption),
      "SortColumn": null,
      "IsDesc": true,
      "Available": null,
      "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
      "IsDownload": false,
      "Users": this.userId.length > 0 ? this.userArrayList : [],
      "Departments": this.department?.Value ? [this.department?.Value] : [],
      "Reporting": [],
      "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
    }
    this.reportService.getAllUserLog(json).subscribe(response => {
      this.rows = response.ResponseData.List;
      this.rows.forEach(data => {
        data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
        data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
        data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
      })
      this.totalElements = response.ResponseData.TotalCount;
      this.blockUI.stop()
    });
  }
filterUpdate(event) {
    if (this.searchValue.length >= 3) {
      this.blockUI.start('Loading...')
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": true,
        "Available": null,
        "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "Reporting": [],
        "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
      }
      this.reportService.getAllUserLog(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.rows.forEach(data => {
          data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
          data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
          data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
        })
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    }else if(this.searchValue.length == 0){
      this.blockUI.start('Loading...')
      let json = {
        "GlobalSearch": this.searchValue,
        "PageNo": 1,
        "PageSize": this.selectedOption,
        "SortColumn": null,
        "IsDesc": true,
        "Available": null,
        "DateFilter": !this.searchDate ? (new Date()).toISOString() : this.searchDate,
        "Departments": this.department?.Value ? [this.department?.Value] : [],
        "Users": this.userId.length > 0 ? this.userArrayList : [],
        "Reporting": [],
        "PresentStatus": this.userLogStatus ? this.userLogStatus.id : null
      }
      this.reportService.getAllUserLog(json).subscribe(response => {
        this.rows = response.ResponseData.List;
        this.rows.forEach(data => {
          data['WebLoginTime'] = this.datePipe.transform((data.LoginTime), 'yyyy-MM-dd HH:mm:ss');
          data['WebLogoutTime'] = this.datePipe.transform((data.LogoutTime), 'yyyy-MM-dd HH:mm:ss');
          data['PresentStatus'] = data.PresentStatus ? 'Yes' : 'No';
        })
        this.totalElements = response.ResponseData.TotalCount;
        this.blockUI.stop()
      });
    }
  }
}