import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TracksService } from './shared/tracks.service';
import { PointsService } from './shared/points.service';

import { TrackpointsComponent } from './trackpoints/trackpoints.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TrackpointsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    MaterialModule.forRoot(),

  ],
  providers: [TracksService, PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
