import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PointsService } from '../shared/points.service';


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
  constructor(private srv: PointsService) {
    this.srv.getPointsData().then(data => {
       this.tablerows = data;
      //console.table(data);
    });
  }
  ngOnInit() {

  }
}
