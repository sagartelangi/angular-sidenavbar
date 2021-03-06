import { Component } from '@angular/core';
import * as userData from './userdata.json';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenavbar-exercise';
  data: Users = (userData as any).default;
}