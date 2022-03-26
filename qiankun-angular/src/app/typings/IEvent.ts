export interface IEventEmit {
  name: string;
  data: any;
}

export interface IEventOn {
  name: string;
  cb: (info: any) => void
}
