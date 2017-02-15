import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { TracksService } from './shared/tracks.service';
import { PointsService } from './shared/points.service';
import { SharedService } from './shared/shared.service';

import { TrackpointsComponent } from './trackpoints/trackpoints.component';
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { NearpointsComponent } from './nearpoints/nearpoints.component';
import { MdirDirective } from './mdir.directive';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TrackpointsComponent,
    NearpointsComponent,
    MdirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    MaterialModule.forRoot(),

  ],
  providers: [TracksService, PointsService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
