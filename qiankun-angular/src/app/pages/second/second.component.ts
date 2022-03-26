import { Component, OnInit } from '@angular/core';
import { TestInfoService } from 'src/app/service/test-info.service';
import { ICommonObject } from 'src/app/typings';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  info:ICommonObject = {}

  constructor(private testInfoService: TestInfoService) { }

  ngOnInit() {
    this.testInfoService.on(info => {
      this.info = info
    })
  }
}
