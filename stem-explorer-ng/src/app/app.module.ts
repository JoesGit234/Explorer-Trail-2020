import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigModule } from './config/config.module';
import { MapsComponent } from './modules/map/containers/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { MapsService } from './modules/map/services/maps.service';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [MapsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
