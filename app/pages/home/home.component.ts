import { Component } from "@angular/core";
import { DdpConnectService } from "../../shared/ddp/connect.service";
import { Router } from '@angular/router';

@Component({
  selector: "list",
  templateUrl: "pages/home/home.html",
})
export class HomeComponent {
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
}