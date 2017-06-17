import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { ActionBarComponent } from './pages/places/action-bar.component';
import { routes, navigatableComponents } from "./app.routing";
import { DdpConnectService } from './shared/ddp/connect.service';
import { DdpClientService } from './shared/ddp/client.service';
import { UserService } from "./shared/user/user.service";
import { PlaceService } from "./shared/place/place.service";
import { PlaceMockService } from "./shared/place/place.mock.service";
import { GeolocationService } from './shared/geolocation/geolocation.sercice';
import { Config } from "./shared/config";

declare var GMSServices: any;
import * as platform from "platform";
if (platform.isIOS) { GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs"); }

const provideMyService = () => {
  return { provide: PlaceService, useFactory: (ddpClient:DdpClientService) => new PlaceMockService(ddpClient), deps: [DdpClientService] }
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    ActionBarComponent,
    ...navigatableComponents
  ],
  providers: [
    DdpConnectService,
    DdpClientService,
    UserService,
    GeolocationService,
    provideMyService(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
