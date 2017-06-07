"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var action_bar_component_1 = require("./pages/places/action-bar.component");
var app_routing_1 = require("./app.routing");
var connect_service_1 = require("./shared/ddp/connect.service");
var client_service_1 = require("./shared/ddp/client.service");
var user_service_1 = require("./shared/user/user.service");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
        ],
        declarations: [
            app_component_1.AppComponent,
            action_bar_component_1.ActionBarComponent
        ].concat(app_routing_1.navigatableComponents),
        providers: [
            connect_service_1.DdpConnectService,
            client_service_1.DdpClientService,
            user_service_1.UserService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw2REFBOEQ7QUFDOUQsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyw0RUFBeUU7QUFDekUsNkNBQThEO0FBQzlELGdFQUFpRTtBQUNqRSw4REFBK0Q7QUFDL0QsMkRBQXlEO0FBS3pELG1DQUFxQztBQUVyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUFDLENBQUM7QUF1QjdGLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQXJCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2Q0FBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBRXpDO1FBQ0QsWUFBWTtZQUNWLDRCQUFZO1lBQ1oseUNBQWtCO2lCQUNmLG1DQUFxQixDQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNULG1DQUFpQjtZQUNqQixpQ0FBZ0I7WUFDaEIsMEJBQVc7U0FDWjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGxhY2VzL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IERkcENvbm5lY3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGRwL2Nvbm5lY3Quc2VydmljZSc7XG5pbXBvcnQgeyBEZHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGRwL2NsaWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IE1hcE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9tYXAvbWFwLm1vZHVsZSc7XG5cbmRlY2xhcmUgdmFyIEdNU1NlcnZpY2VzOiBhbnk7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaWYgKHBsYXRmb3JtLmlzSU9TKSB7IEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBdFJWdkczQmUzeFhpWkZSN3hwLUstOWh5NG5aNGhNRnNcIik7IH1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIC8vTWFwTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQWN0aW9uQmFyQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEZHBDb25uZWN0U2VydmljZSxcbiAgICBEZHBDbGllbnRTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19