import { Component } from '@angular/core';
import * as geo from 'geojson';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample vecicle routes view';
  constructor() {
    const featureCollection: GeoJSON.FeatureCollection<any> = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [102.0, 0.5]
          },
          properties: {
            prop0: 'value0'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0]
            ]
          },
          properties: {
            prop0: 'value0',
            prop1: 0.0
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
            ]
          },
          properties: {
            prop0: 'value0',
            prop1: {
              that: 'this'
            }
          }
        }
      ],
      crs: {
        type: 'link',
        properties: {
          href: 'http://example.com/crs/42',
          type: 'proj4'
        }
      }
    };
  }
}


