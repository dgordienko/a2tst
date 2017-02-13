import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TracksService {

  constructor(private http: Http) { }
  getTrackData() {
    const u = './assets/route.geojson';
    return Promise.resolve((this.http.get(u)
      .map((response: Response) => response.json()))
      .toPromise());
  }
// tslint:disable-next-line:eofline
}