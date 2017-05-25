import { Component } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Router } from '@angular/router';

@Component({
  selector: "list",
  templateUrl: "pages/home/home-info.html",
})
export class HomeInfoComponent {
  public show: boolean = false;

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
  }
  onShare() {
    console.log("Share button tapped!!");
    this.router.navigate(['/home'])
  }
}