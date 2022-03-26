import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ICommonObject } from '../typings';

@Injectable({
  providedIn: 'root'
})
export class TestInfoService {
  state$ = new BehaviorSubject<ICommonObject>({})

  constructor() { }

  emit(object: ICommonObject) {
    this.state$.next(object)
  }

  on(cb: (object: ICommonObject) => void) {
    this.state$.subscribe(cb)
  }

  select(selector: (state: any) => any): Observable<any> {
    return this.state$.pipe(map(selector))
  }
}
