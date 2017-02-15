import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-nearpoints',
  templateUrl: './nearpoints.component.html',
  styleUrls: ['./nearpoints.component.css'],
  providers: []
})
export class NearpointsComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit() {
    // https://embed.plnkr.co/P8xCEwSKgcOg07pwDrlO/
    this.shared.point$.subscribe(data => {
      console.dir(data);
    });
  }
}
