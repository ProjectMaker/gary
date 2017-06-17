import { Component, OnInit } from "@angular/core";
import { NgZone } from "@angular/core";
import { PlaceService } from "../../shared/place/place.service";
import { DdpClientService } from '../../shared/ddp/client.service';
import { Place } from "../../shared/place/place";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
})
export class ListComponent {
  places:Array<Place> = [];

  constructor(private ddpService:DdpClientService, private placeService:PlaceService, private zone:NgZone) {

  }
  
  submit() {
    this.places.push({_id: "oo", name: "ooooo"});
  }

  ngOnInit() {
    this.placeService.getPlaces().subscribe((places) => {
      this.zone.run(() => {
        console.log(JSON.stringify(places)); this.places = places
      });
      //this.ddpService.observe('places').subscribe((event) => console.log(JSON.stringify(event)));
      
    });
  }
}