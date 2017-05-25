import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from '@angular/router';
import { NgZone } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Subscription } from 'rxjs/Subscription';
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: "kl-gary-action-bar-places",
  templateUrl: "pages/places/action-bar.html",
})
export class ActionBarComponent implements OnDestroy {
  private id: number = Math.random();
  private subRoute: Subscription;

  @Input() showBack:string;
  @Input() showAdd:string;
  constructor(private routerExtensions:RouterExtensions, private connectService:DdpConnectService, private zone:NgZone) {
    //this.subRoute = this.routerExtensions.events.subscribe((event:any) => {
      //console.log(event.url);
    //});
  }
  ngOnInit() {}

  ngOnDestroy() {}

  onAdd() {
    console.log("Share button tapped!!");
    this.routerExtensions.navigate(['/home/info'], { clearHistory: true });
  }
}