import { Injectable, EventEmitter } from "@angular/core";
import { DdpConnectService } from './connect.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DdpClientService {
  constructor(private connectService:DdpConnectService) { }

  callMethod(name:string, params?:Array<any>):Observable<any> {
    return Observable.create(observer => {
      if (this.connectService.connectedStatus) {
        this.connectService.client.call(name, params, (err, res) => {
          if (err) observer.error(err);
          else observer.next(res);
          observer.complete();
        });
      } else observer.error(new Error('connection down'));
    });
  }

  observe(collection:string): Observable<string> {
    return Observable.create(observer => {
      const obs = this.connectService.client.observe(collection);

      obs.added = (id) => { observer.next({status: 'added', record: this.connectService.client.collections[collection][id]})};
      obs.changed = (id) => { observer.next({status: 'changed', record: this.connectService.client.collections[collection][id]})};
      obs.removed = (id) => { observer.next({status: 'removed', record: { _id: id }})};
    });
  }

  subscribe(name:string, collection:string, params:Array<any> = []): Observable<Array<Object>> {
    return Observable.create(observer => {
      console.log('subscribe, Observable.create');
      if (!this.connectService.connectedStatus) {
        observer.error(new Error('connection down'));
        return false;
      }
      this.connectService.client.subscribe(name, [], () => {
        const objects:Array<Object> = [];
        for (const _id in this.connectService.client.collections[collection]) {
          objects.push(this.connectService.client.collections[collection][_id]);
        }
        observer.next(objects);
      });

    }).catch((error) => {
      console.log('***************************** ERROR');
    });
  }
}