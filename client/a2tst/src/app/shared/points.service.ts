import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { IDeliverypoint } from '../interfaces/ideliverypoint';
@Injectable()
export class PointsService {
  constructor(private http: Http) { }
  getPointsData() {
    const u = './assets/ptt.geojson';
    return Promise.resolve((this.http.get(u)
      .map((response: Response) => {
        const loadeddata: GeoJSON.FeatureCollection<any> = response.json();
        const res = [];
        loadeddata.features.forEach(x => {
          const code = {
            id: x.properties['id'],
            code: x.properties['kod'],
            employee: x.properties['kontragenty'],
            position: (x.geometry as GeoJSON.Point).coordinates
          };
          res.push(code);
        });
        const result = {
          points: res,
          features: loadeddata
        };
        return result;
      })).toPromise());
  };
}
