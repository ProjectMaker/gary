import { Injectable } from "@angular/core";
import DDPClient = require("nativescript-meteor");
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DdpService {
  client:DDPClient;
  connected:boolean = false;

  constructor() {
    this.client = new DDPClient({
      host: "localhost",
      port: 3000,
      ssl: false,
      autoReconnect: true,
      autoReconnectTimer: 15000,
      maintainCollections: true,
      ddpVersion: '1',
      useSockJs: true
    });

    this.client.connect((error, wasReconnect) => {
      if (error) {
        console.log('DDP connection error!');
        this.connected = false;
        return;
      }
      this.connected = true;

      if (wasReconnect) {
        console.log('Reestablishment of a connection.');
      }

      //console.log('CONNECTED');
    });
  }

  waitConnection(cb) {
    if (this.connected) cb(true);
    let count = 0;
    const interval:number = setInterval(() => {
      if (this.connected) {
        clearInterval(interval);
        cb(true);
      } else if (count => 10) {
        clearInterval(interval);
        cb(false);
      }
      count++
    }, 500);
  }

  callMethod(name:string, params?:Array<any>):Observable<any> {
    return Observable.create(observer => {
      this.waitConnection((connected) => {
        if (connected) {
          this.client.call(name, params, (err, res) => {
            console.log(connected);
            if (err) observer.error(err);
            else observer.next(res);
            observer.complete();
          });
        } else observer.error(new Error('server not found'));
      });
    });
  }

  observe(collection:string): Observable<string> {
    return Observable.create(observer => {
      const obs = this.client.observe(collection);

      obs.added = (id) => { observer.next({status: 'added', record: this.client.collections[collection][id]})};
      obs.changed = (id) => { observer.next({status: 'changed', record: this.client.collections[collection][id]})};
      obs.removed = (id) => { observer.next({status: 'removed', record: { _id: id }})};
    });
  }

  subscribe(name:string, collection:string, params:Array<any> = []): Observable<Array<Object>> {
    return Observable.create(observer => {
      this.waitConnection((connected) => {
        if (!connected) return;
        console.log('BEFORE SUBSCRIBE');
        this.client.subscribe(name, [], () => {
          console.log('SUBSCRIBE', name);
          const objects:Array<Object> = [];
          for (const _id in this.client.collections[collection]) {
            objects.push(this.client.collections[collection][_id]);
          }
          observer.next(objects);

        });
      });
    }).catch((error) => {
      console.log('***************************** ERROR');
    });
  }
}