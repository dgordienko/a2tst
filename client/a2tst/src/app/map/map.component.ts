import { Component, OnInit, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { TracksService } from '../shared/tracks.service';
// load jquery and plugis
import * as L from 'leaflet';
import * as $ from 'jquery';

import '../shared/linq';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [TracksService]
})
export class MapComponent implements OnInit, AfterViewInit {
  leafletMap: any;

  loadeddata: any;
  currentPath: any;
  points: Array<L.LatLng> = [];
  geojsonlayer: L.GeoJSON;
  viewpoint: L.LatLng;

  private nativeElement: Node;
  private trackPoints: Array<L.LatLng>;

  constructor(
    private srv: TracksService,
    private render: Renderer,
    private element: ElementRef) { }

  ngOnInit() {

    this.nativeElement = this.element.nativeElement;
    this.srv.getTrackData().then(data => {
      const style = {
        'color': 'red',
        'weight': 5,
        'opacity': 0.65
      };
      const coordinates = (data.features.AsLinq()
        .FirstOrDefault() as GeoJSONFeature<GeoJSONLineString>)
        .geometry.coordinates[10];
      const posView = new L.LatLng(coordinates[1], coordinates[0]);
      console.log(posView);

      this.leafletMap.setView(posView, 10);
      const glayer = L.geoJSON();
      glayer.addData(data).addTo(this.leafletMap);

    }).catch(expect => console.log(expect));
  }

  ngAfterViewInit() {
    this.leafletMap = L.map('map');
    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // tslint:disable-next-line:max-line-length
    const osmAttrib = 'Map data © <a id="logo" href="http://openstreetmap.org">OpenStreetMap</a> contributors <a id="foo" href="https://github.com/dgordienko/a2tst.source">github</a>';
    const osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 12, attribution: osmAttrib });
    this.leafletMap.addLayer(osm);
    // not angular way!
    // this.nativeElement = this.render.selectRootElement('#logo');
    // const logo = this.nativeElement;
    // jquery way
    const t = $('#foo').prop('href');
    console.log(t);
  }
}
