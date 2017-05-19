import { Injectable } from "@angular/core";
import { DdpService } from '../ddp/ddp.service';
import {Observable} from "rxjs/Observable";
import { Place } from './place';

@Injectable()
export class PlaceService {
  constructor(private ddpService:DdpService) { }

  getPlace():Observable<Array<Place>> {
    return this.ddpService.subscribe('places', 'places');
  }
}