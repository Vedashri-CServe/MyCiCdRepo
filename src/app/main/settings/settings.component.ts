import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'settings-application' }
})
export class SettingsComponent {
  public data = JSON.parse(localStorage.getItem('userData'))
  public subMenu;
  constructor() {
    setTimeout(() => {
      this.subMenu = JSON.parse(localStorage.getItem('userData'))
      this.subMenu = this.subMenu.Menu[0].TabData;
    }, 100)
  }
}