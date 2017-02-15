import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as L from 'leaflet';

@Injectable()
export class TracksService {

  constructor(private http: Http) { }
  getTrackData() {
    const u = './assets/route.geojson';
    return Promise.resolve((this.http.get(u)
      .map((response: Response) => {
        const loadeddata: GeoJSON.FeatureCollection<any> = response.json();
        return loadeddata;
      })).toPromise());
  }
// tslint:disable-next-line:eofline
}