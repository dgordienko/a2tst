import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PointsService } from '../shared/points.service';

@Component({
  selector: 'app-trackpoints',
  templateUrl: './trackpoints.component.html',
  styleUrls: ['./trackpoints.component.css'],
  providers: [PointsService]
})
export class TrackpointsComponent implements OnInit {
  rows = [];
  expanded = {};
  timeout: any;

  constructor(private srv: PointsService) {
    this.fetch((data) => {
      this.rows = data;
    });
  }
  ngOnInit() {
    // this.srv.getPointsData().then(data => {
    //   this.rows = data;
    // });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/100k.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
