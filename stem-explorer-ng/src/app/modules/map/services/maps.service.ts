import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapsService {
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Service function to get marker info. Replace with API call.
   * @todo: add global api call file for reusable endpoints.
   */
  getMarkers() {
    return this.http.get(`assets/markers.json`);
  }
}
