import { Component } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Router } from '@angular/router';

@Component({
  selector: "list",
  templateUrl: "pages/home/home.html",
})
export class HomeComponent {
  public show: boolean = true;

  constructor(private router:Router, private connectService:DdpConnectService) {
    /*
    if (this.connectService.pingStatus) {
      this.router.navigate(['/login']);
    }
    else {
      this.connectService.connectedEvent.subscribe(
        value => {
          if (value) this.router.navigate(['/login']);
        },
        error => console.log(error),
        () => console.log('done')
      );
    }
    */
  }

  onTap() {
    console.log("FirstComponent.Tapped!");
    this.router.navigate(['/home/info']);
  }
  onShare() {
    console.log("Share button tapped!");
  }
}