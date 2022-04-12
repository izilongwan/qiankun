import { Component, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Loading } from 'src/app/decorators';
import { LoadingService } from 'ng-devui/loading';
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
  data: [string, any, boolean][] = this.formatRandomData(this.testInfoService.state$.value)
  btnText = E_FETCH_STATE.FETCH
  isCollapsed = true
  showLoading = true

  @ViewChild('loadingTemplateRef', { static: true }) loadingTemplateRef: TemplateRef<any> | undefined

  constructor(private service: EventService, private http: HttpService, private testInfoService: TestInfoService, private loadingService: LoadingService) {
  }

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

  beforeToggle = () => {
    console.log(this)
    return true
  };

  @Loading()
  async handleChange(e: Event) {
    await this.getRandomText()
  }

  getRandomText() {
    return new Promise((resolve, reject) => {
      this.btnText = E_FETCH_STATE.LOADING

      this
        .http
        .request({ url: 'http://letme.site/random_txt' })
        .subscribe(params => {
          this.data = this.formatRandomData(params)
          this.testInfoService.emit(params)
          this.btnText = E_FETCH_STATE.FETCH

          resolve(params)
        })
    })
  }

  formatRandomData(data: ICommonObject) {
    return (Object.entries(data).map(o => {
      o.push(false)

      return <unknown> o as [string, any, boolean]
    }))
  }

  get disabled() {
    return this.btnText === E_FETCH_STATE.LOADING
  }
}
