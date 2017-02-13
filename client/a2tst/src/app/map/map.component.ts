import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TracksService } from '../shared/tracks.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [TracksService]
})
export class MapComponent implements OnInit, AfterViewInit {
  leafletMap: any;

  loadeddata: GeoJSON.FeatureCollection<any>;
  constructor(private srv: TracksService) { }

  ngOnInit() {
    this.srv.getTrackData().then(data => {
      this.loadeddata = data as GeoJSON.FeatureCollection<any>;
    }).catch(expect => console.log(expect));
  }
  ngAfterViewInit() {
    this.initMapControl();

    const style = {
      'color': '#ff7800',
      'weight': 5,
      'opacity': 0.65
    };
    L.geoJSON(this.loadeddata, style).addTo(this.leafletMap);

  }

  initMapControl() {
    this.leafletMap = L.map('map');
    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    const osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 12, attribution: osmAttrib });
    this.leafletMap.setView(new L.LatLng(48.3, 38.7), 10);
    this.leafletMap.addLayer(osm);
  }
}
