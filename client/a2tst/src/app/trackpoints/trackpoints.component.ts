import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as turf from '@turf/turf';
import { PointsService } from '../shared/points.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-trackpoints',
  templateUrl: './trackpoints.component.html',
  styleUrls: ['./trackpoints.component.css'],
  providers: [PointsService]
})
export class TrackpointsComponent implements OnInit {
  tablerows = [];
  columns = [
    { prop: 'id' },
    { name: 'position' }
  ];
  constructor(
    private srv: PointsService,
    private shared: SharedService) {

    this.shared.point$.subscribe(point => {
      console.log('points list - received from points: ' + point);
    });
    this.srv.getPointsData().then(data => {
      this.tablerows = data.points;

    })
      .catch(ex => console.error(ex));
  }
  ngOnInit() {

  }
  // tslint:disable-next-line:eofline
}