import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import { IEventEmit, IEventOn } from '../typings';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events$ = new Subject<any>();

  constructor() { }

  emit(emitInfo: IEventEmit) {
    this.events$.next(emitInfo)
  }

  on(onInfo: IEventOn) {
    this.events$
    .pipe(
      filter((e: IEventEmit) => e.name === onInfo.name),
      map((e: IEventEmit) => e.data)
    )
    .subscribe((info) => onInfo.cb(info))
  }
}
