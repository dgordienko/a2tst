import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TracksService } from './shared/tracks.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
