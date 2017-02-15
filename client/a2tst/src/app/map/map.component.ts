import { Component, OnInit, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { TracksService } from '../shared/tracks.service';
// load jquery and plugis
import * as L from 'leaflet';
import * as $ from 'jquery';
import * as noty from 'toastr';
import { SharedService } from '../shared/shared.service';
import '../shared/linq';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [TracksService, SharedService]
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
    private shared: SharedService,
    private srv: TracksService,
    private render: Renderer,
    private element: ElementRef) {

    this.shared.point$.subscribe(point => {
      // jquery plugin
      noty.warning('map - received from points: ' + point);
    });
  }

  ngOnInit() {
    this.nativeElement = this.element.nativeElement;
    this.srv.getTrackData().then(data => {
      const coordinates = (data.features.AsLinq()
        .FirstOrDefault() as GeoJSONFeature<GeoJSONLineString>)
        .geometry.coordinates[0];
      const posView = new L.LatLng(coordinates[1], coordinates[0]);
      // subscribe SharedService
      this.leafletMap.setView(posView, 10);
      const glayer = L.geoJSON();
      glayer.addData(data).addTo(this.leafletMap);
      // jquery way dom manipulate
      const t = $('#lg').prop('href');
      noty.warning('use jquery selector: ' + t);
    }).catch(expect => console.exception(expect));
  }

  ngAfterViewInit() {
    this.leafletMap = L.map('map');
    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // tslint:disable-next-line:max-line-length
    const osmAttrib = 'Map data © <a id="logo" href="http://openstreetmap.org">OpenStreetMap</a> contributors <a id="lg" href="https://github.com/dgordienko/a2tst.source">github</a>';
    const osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 20, attribution: osmAttrib });
    this.leafletMap.addLayer(osm);
    // publish data to list component
    this.leafletMap.on('click', (e) => {
      this.shared.publishData(e.latlng);
    });
    // not angular way!
    // this.nativeElement = this.render.selectRootElement('#logo');
    // const logo = this.nativeElement;
  }
}
