import {Component, ViewChild, OnInit} from '@angular/core';
import { Page } from 'ui/page';
import {Image} from 'ui/image';
import { ImageSource } from "image-source";
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { GeolocationService } from '../../shared/geolocation/geolocation.sercice';

const style = require('./map-style.json');
const _places = require('../../shared/place/place-search.mock.json');

// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'add-place.component.html',
  //styleUrls: ['map.css'],
})
export class AddPlaceComponent implements OnInit {
  places:any[] = [];
  markers:Array<Marker> = [];
  markerSelected:Marker;
  zoom = 8;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;
  gpsMarker:Marker;
  firstPosition:boolean = true;
  centeredOnLocation:boolean = false;
  lastCamera: String;

  constructor(private geolocation:GeolocationService, private page:Page) {
    _places.forEach((place) => {
      this.places.push({
        location: {
          latitude: place.geometry.location.lat,
          longitude: place.geometry.location.lng,
        },
        title: place.name,
      })
    });
  }

  onItemTap(event) {
    const marker = this.markers.find((marker) => {
      return this.places[event.index].location.latitude === marker.position.latitude
        && this.places[event.index].location.longitude === marker.position.longitude
    })
    let image;
    if (this.markerSelected) {
      image = new Image();
      image.src = 'res://shooting';
      this.markerSelected.icon = image;
    }
    this.markerSelected = marker;
    image = new Image();
    let urlImg = 'http://map.google.com/mapfiles/kml/pushpin/grn-pushpin.png';
    urlImg= 'res://monkey-export';
    image.src = urlImg;
    //image.src = 'http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin';
    console.log('**************************************************', image.imageSource);
    image.width = 25;
    image.height = 25;
    marker.icon = image;
    console.log('onItemTaps', marker.icon);
  }

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
    this.mapView.addMarker(marker);

    marker.title = args.title;
    marker.snippet = args.title;
    const icon = new Image();
    icon.src = 'res://shooting';
    marker.icon = icon;
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
        if (this.firstPosition) {
          this.firstPosition = false;
          this.places.forEach((place) => {
            this.markers.push(this.addMarker(place));
          })
        }

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