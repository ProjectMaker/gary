import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeLayoutComponent } from "./layouts/home.component";
import { routes, navigatableComponents } from "./app.routing";
import { DdpConnectService } from './shared/ddp/connect.service';
import { DdpClientService } from './shared/ddp/client.service';
import { UserService } from "./shared/user/user.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  declarations: [
    HomeLayoutComponent,
    ...navigatableComponents
  ],
  providers: [
    DdpConnectService,
    DdpClientService,
    UserService,
  ],
  bootstrap: [HomeLayoutComponent]
})
export class AppModule {}
