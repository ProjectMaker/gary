const sha256 = require('nativescript-toolbox/crypto-js/sha256');
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { CanActivate, Router } from '@angular/router';
import { User } from "./user";
import { Config } from "../config";
import { DdpService } from '../ddp/ddp.service';

@Injectable()
export class UserService implements CanActivate {
  user:User;

  constructor(private http: Http, private router:Router, private ddpService:DdpService) {}

  login(email:string, password:string) {
    const pass = sha256(password).toString();
    const obsLogin:Observable<any> = this.ddpService.callMethod('login', [{user: { email }, password: {digest: pass, algorithm: 'sha-256' }}]);
    const obsUser:Observable<any> = this.ddpService.subscribe('users.current', 'users');

    obsLogin.subscribe((result) => {
      obsUser.subscribe((content) => {
        console.log(JSON.stringify(content));
        this.ddpService.observe('users').subscribe((event) => console.log(JSON.stringify(event)));
      });
    });

    return obsLogin;
  }

  isLoggedIn():boolean {
    return true;
  }
  canActivate() {
    this.router.navigate(['/login']);
    return true;
  }

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
        Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
      )
      .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}