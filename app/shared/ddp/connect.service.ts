import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from '@angular/http';
import DDPClient = require("nativescript-meteor");
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class DdpConnectService {
  client:DDPClient;
  pingStatus:boolean = false;
  pingEvent:EventEmitter<any> = new EventEmitter();
  connectedStatus:boolean = false;
  connectedEvent:EventEmitter<any> = new EventEmitter();
  pingErrors:Array<number> = [];

  constructor(private router:Router, private http:Http) {
    this.schedulePing();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const activated = this.pingStatus && this.connectedStatus;
    if (!activated) this.router.navigate(['/home']);
    return activated;
  }

  public schedulePing() {
    const obs = this.ping().subscribe(
      (result) => {
        if (result.status === 200) {
          if (!this.connectedStatus) this.connect();
          this.pingStatus = true;
          this.pingEvent.emit(true);
        } else {
          this.pingStatus = false;
          this.pingEvent.emit(false)
          this.connectedStatus = false;
          this.connectedEvent.emit(false);
        }
      },
      (error) => {
        obs.unsubscribe();
        this.pingStatus = false;
        this.pingEvent.emit(false);
        setTimeout(this.schedulePing.bind(this), 5000);
      },
      (complete) => console.log('complete',complete)

    );
  }

  private connect() {
    console.log('ddpService connect');
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
      console.log('this.client.connect response');
      if (error) {
        console.log('DDP connection error!');
        this.connectedStatus = false;
        this.connectedEvent.emit(false);
        return;
      }
      this.connectedStatus = true;
      this.connectedEvent.emit(true);

      if (wasReconnect) {
        console.log('Reestablishment of a connection.');
      }
    });
  }

  private socketInfo():Promise<Response> {
    return this.http.get('http://localhost:3000/sockjs/info')
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private ping() {
    return Observable.create(observer => {
      const id = setInterval(() => {
        this.socketInfo()
          .then((res:Response) => {
            observer.next({ status: 200 });
            if (this.pingErrors.length) this.pingErrors.pop();
          })
          .catch((err:any) => {
            this.pingErrors.push(err.message || err);
            observer.next({ status: 404 });
            if (this.pingErrors.length === 10 ) {
              observer.error({ status: 500 });
              clearInterval(id);
            }
          });
      }, 2000);
    });
  }


}