import { Component, OnInit } from "@angular/core";
import { NgZone } from "@angular/core";
import { PlaceService } from "../../shared/place/place.service";
import { DdpService } from '../../shared/ddp/ddp.service';
import { Place } from "../../shared/place/place";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [
    PlaceService,
  ],
})
export class ListComponent {
  places:Array<Place> = [];

  constructor(private ddpService:DdpService, private placeService:PlaceService, private zone:NgZone) {

  }
  
  submit() {
    this.places.push({_id: "oo", name: "ooooo"});
  }

  ngOnInit() {
    this.placeService.getPlace().subscribe((places) => {
      this.zone.run(() => {
        console.log(JSON.stringify(places)); this.places = places
      });
      this.ddpService.observe('places').subscribe((event) => console.log(JSON.stringify(event)));
      
    });

    
    //const sub = this.places.subscribe((value:Object) => { if (parseInt(value['_id']) === 10) sub.unsubscribe();console.log(value['name']) });
    //const sub = obs.subscribe((value:Place) => { if (parseInt(value._id) === 4) sub.unsubscribe();console.log(value); });
    //const sub = obs.subscribe((x) => { if (x === 4) sub.unsubscribe();console.log(x)});
    //this.vehicles.subscribe(() => console.log('oo'));
    //this.races.subscribe(() => console.log('ok'));
    /*
    this.placeService.getPlace().subscribe(places => {
      this.items = places;
      const id:number = setTimeout(() => { this.items = [];clearTimeout(id) }, 2000);
    });
    */
  }
}