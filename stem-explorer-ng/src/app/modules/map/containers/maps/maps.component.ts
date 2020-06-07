import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) markerInfo: MapInfoWindow;

  zoom = 12;
  centre: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid'
  };

  markers: MapMarker[] = [];
  infoContent = '';

  constructor(private mapsService: MapsService) {}

  ngOnInit() {
    /**
     * Automatically centres the map at user's current position on first load.
     * Note: User will need to enable browser location for this work.
     */
    navigator.geolocation.getCurrentPosition(position => {
      this.centre = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });

    this.getMarkers();
  }

  /**
   * Function called when a map marker is clicked to open the standard Google Maps info window.
   * @param marker all properties from the marker
   * @param content allows us to pass through customised content
   */
  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.markerInfo.open(marker);
  }

  /**
   * Function to get all map markers and assign to our Marker array.
   * This function is private as it is only able to be used in this component.
   */
  private getMarkers() {
    return this.mapsService.getMarkers().subscribe((res) => {
      this.markers = res['markers'];
    });
  }
}
