import {Component, ViewChild, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { GeolocationService } from '../../shared/geolocation/geolocation.sercice';

const style = require('./map-style.json');

// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'add-place.component.html',
  //styleUrls: ['map.css'],
})
export class AddPlaceComponent implements OnInit {
  zoom = 8;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;
  gpsMarker:Marker;
  centeredOnLocation:boolean = false;
  lastCamera: String;

  constructor(private geolocation:GeolocationService) { }

  locationReceived(position:Position) {
    console.log('GPS Update Received', JSON.stringify(position));

    if (this.mapView && position && !this.centeredOnLocation) {
      this.mapView.latitude = position.latitude;
      this.mapView.longitude = position.longitude;
      this.mapView.zoom = 16;
      this.centeredOnLocation = true;
    }

    this.removeMarker(this.gpsMarker);
    this.gpsMarker = this.addMarker({
      location: position,
      title: 'GPS Location'
    });
  }

  addMarker(args:AddMarkerArgs) {
    if (!this.mapView || !args || !args.location) return;

    let marker = new Marker();
    marker.position = Position.positionFromLatLng(args.location.latitude, args.location.longitude);
    marker.title = args.title;
    marker.snippet = args.title;
    this.mapView.addMarker(marker);

    return marker;
  }

  removeMarker(marker:Marker) {
    if (this.mapView && marker) {
      this.mapView.removeMarker(marker);
    }
  }

  ngOnInit() {
    this.geolocation.start();
  }

  //Map events
  onMapReady(event) {
    console.log('Map Ready');

    this.mapView = event.object;
    this.mapView.setStyle(style);
    this.geolocation.positionEvent.subscribe(
      (position:Position) => {
        this.locationReceived(position);
      }
    );
  }

  onCoordinateTapped(args) {
    console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
  }

  onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName
      + "' triggered on: " + args.marker.title
      + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
  }

  onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    this.lastCamera = JSON.stringify(args.camera);
  }

}

export class AddMarkerArgs {
  public location:Position;
  public title:string;
}