import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as L from 'leaflet';
@Injectable()
export class SharedService {

  private point = new Subject<L.LatLng>();
  point$ = this.point.asObservable();
  constructor() { }
  // Service message commands
  publishData(p: L.LatLng) {
    this.point.next(p);
  }
}
