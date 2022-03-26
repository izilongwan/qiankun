import { ICommonObject } from '.';

export interface IHttpServiceConfig {
  url: string;
  method?: string;
  headers?: ICommonObject,
  body?: ICommonObject;
}
