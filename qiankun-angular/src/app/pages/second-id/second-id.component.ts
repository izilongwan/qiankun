import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestInfoService } from 'src/app/service/test-info.service';
import { ICommonObject } from 'src/app/typings';

@Component({
  selector: 'app-second-id',
  templateUrl: './second-id.component.html',
  styleUrls: ['./second-id.component.scss']
})
export class SecondIdComponent implements OnInit {
  params: { id?: string } = {};
  info:ICommonObject = {}

  constructor(private route: ActivatedRoute, private testInfoService: TestInfoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    })

    this.testInfoService.on(info => this.info = info);
  }
}
