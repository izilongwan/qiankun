import { Component, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { HttpService } from 'src/app/service/http.service';
import { TestInfoService } from 'src/app/service/test-info.service';
import { ICommonObject } from 'src/app/typings';

enum E_FETCH_STATE {
  LOADING = 'LOADING...',
  FETCH = 'FETCH'
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  data: [string, string | number][] = this.formatRandomData(this.testInfoService.state$.value)
  btnText = E_FETCH_STATE.FETCH

  constructor(private service: EventService, private http: HttpService, private testInfoService: TestInfoService) { }

  ngOnInit() {
    this.service.on({
      name: 'a',
      cb(info) {
        console.log(info);
      }
    })

    this.data?.length <= 0 && this.getRandomText()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(34, changes);

    // changes.prop contains the old and the new value...
  }

  handleChange(e: Event): void {
    this.getRandomText()
  }

  getRandomText() {
    if (this.btnText === E_FETCH_STATE.LOADING) {
      return
    }

    this.btnText = E_FETCH_STATE.LOADING

    this
      .http
      .request({ url: 'http://letme.site/random_txt' })
      .subscribe(params => {
        this.data = this.formatRandomData(params)
        this.testInfoService.emit(params)
        this.btnText = E_FETCH_STATE.FETCH
      })
  }

  formatRandomData(data: ICommonObject) {
    return Object.entries(data)
  }

  get disabled() {
    return this.btnText === E_FETCH_STATE.LOADING
  }
}
