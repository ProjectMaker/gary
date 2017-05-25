import { Component, OnInit, OnDestroy } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Router } from '@angular/router';
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: "list",
  templateUrl: "pages/home/home.html",
})
export class HomeComponent {
  public show: boolean = true;

  constructor(private routerExtensions:RouterExtensions, private connectService:DdpConnectService) {
    if (this.connectService.pingStatus) {
      this.routerExtensions.navigate(['/login']);
    }
    else {
      this.connectService.connectedEvent.subscribe(
        value => {
          if (value) this.routerExtensions.navigate(['/login'], { clearHistory: true });
        },
        error => console.log(error),
        () => console.log('done')
      );
    }

  }
  ngOnInit() {}
  ngOnDestroy() {}
}