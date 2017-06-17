import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Place } from './place';
import { PlaceService } from './place.service'
import { DdpClientService } from '../ddp/client.service';

const places = require('./place-list.mock.json');

@Injectable()
export class PlaceMockService extends PlaceService{
  constructor(ddpService:DdpClientService) {
    super(ddpService);
    console.log('********** CONSTRUCTOR PLACE MOCK SERVICE ***********');
  }

  getPlaces():Observable<Array<Place>> {
    return Observable.of(places);
  }
}