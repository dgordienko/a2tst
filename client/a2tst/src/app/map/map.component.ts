import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TracksService } from '../shared/tracks.service';
import * as L from 'leaflet';
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
  constructor(private srv: TracksService) { }

  ngOnInit() {
    this.srv.getTrackData().then(data => {
      const viewpoint = data.AsLinq<L.LatLng>().FirstOrDefault();
      this.leafletMap.setView(viewpoint, 10);
      const style = {
        'color': 'red',
        'weight': 5,
        'opacity': 0.65
      };
      const myLines = {
        'type': 'LineString',
        'coordinates': data
      };
      L.geoJSON(myLines).addTo(this.leafletMap);
      this.geojsonlayer.addData(myLines);
    }).catch(expect => console.log(expect));
  }
  ngAfterViewInit() {
    this.leafletMap = L.map('map');
    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    this.leafletMap.setView(new L.LatLng(0, 0, 0), 10);
    const osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 12, attribution: osmAttrib });
    this.leafletMap.addLayer(osm);
  }
}
