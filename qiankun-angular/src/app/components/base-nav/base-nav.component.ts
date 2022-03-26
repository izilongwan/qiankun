import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent implements OnInit {
  routes = [
    { path: '/first', text: 'First' },
    { path: '/second', text: 'Second' },
    { path: '/second/1', text: 'Second-1' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
