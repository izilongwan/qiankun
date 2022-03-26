import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpServiceConfig } from '../typings';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private $http: HttpClient) {
  }

  request(config: IHttpServiceConfig) {
    const {
      url = '',
      method = 'GET',
      headers = {},
      body = {}, } = config

    return this.$http.request(
      method,
      url,
      {
        headers: Object.assign({ 'Content-Type': 'text/json' }, headers),
        body: JSON.stringify(body)
      }
    )
  }
}
