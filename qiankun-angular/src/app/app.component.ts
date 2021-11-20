import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  Math = Math;

  String = String;

  random = String(Math.random()).slice(-5)

  a = 1
}
