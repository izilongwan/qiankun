import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-id',
  templateUrl: './second-id.component.html',
  styleUrls: ['./second-id.component.scss']
})
export class SecondIdComponent implements OnInit {
  params: { id?: string } = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    })
  }
}
