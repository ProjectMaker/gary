import { Injectable } from "@angular/core";
import { DdpClientService } from '../ddp/client.service';
import {Observable} from "rxjs/Observable";
import { Place } from './place';

@Injectable()
export class PlaceService {
  constructor(private ddpService:DdpClientService) { }

  getPlace():Observable<Array<Place>> {
    return this.ddpService.subscribe('places', 'places');
  }
}