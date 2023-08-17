import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'reports-application' }
})
export class ReportComponent {
  public subMenu = JSON.parse(localStorage.getItem('userData')).Menu[2].TabData;
}