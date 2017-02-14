import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as L from 'leaflet';
@Injectable()
export class PointsService {

  constructor(private http: Http) { }
  getPointsData() {
    const u = './assets/route.geojson';
    return Promise.resolve((this.http.get(u)
      .map((response: Response) => {
        const loadeddata: GeoJSON.FeatureCollection<any> = response.json();
        const currentPath = loadeddata.features[0].geometry.coordinates;
        const points: Array<L.LatLng> = [];
        currentPath.forEach(x => {
          const p = new L.LatLng(x[1], x[0], x[2]);
          points.push(p);
        });
        return points;
      })).toPromise());
  };
}
