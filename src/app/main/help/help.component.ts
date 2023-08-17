import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'help-application' }
})
export class HelpComponent {}