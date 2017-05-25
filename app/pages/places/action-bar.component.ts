import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from '@angular/router';
import { NgZone } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "kl-gary-action-bar-places",
  templateUrl: "pages/places/action-bar.html",
})
export class ActionBarComponent implements OnDestroy {
  private id: number = Math.random();
  private subRoute: Subscription;

  @Input() showBack:string;
  @Input() showAdd:string;
  constructor(private router:Router, private connectService:DdpConnectService, private zone:NgZone) {
    this.subRoute = this.router.events.subscribe((event:any) => {
      //console.log(event.url);
    });
  }
  ngOnInit() {
    console.log('CONSTRUCTOR ActionBar', this.id, this.showBack);
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
    console.log('DESTROY ActionBar', this.id, this.showBack);
  }

  onAdd() {
    console.log("Share button tapped!!");
    this.router.navigate(['/home/info'])
  }
}