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
var place_service_1 = require("./shared/place/place.service");
var place_mock_service_1 = require("./shared/place/place.mock.service");
var geolocation_sercice_1 = require("./shared/geolocation/geolocation.sercice");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
}
var provideMyService = function () {
    return { provide: place_service_1.PlaceService, useFactory: function (ddpClient) { return new place_mock_service_1.PlaceMockService(ddpClient); }, deps: [client_service_1.DdpClientService] };
};
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
            geolocation_sercice_1.GeolocationService,
            provideMyService(),
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw2REFBOEQ7QUFDOUQsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyw0RUFBeUU7QUFDekUsNkNBQThEO0FBQzlELGdFQUFpRTtBQUNqRSw4REFBK0Q7QUFDL0QsMkRBQXlEO0FBQ3pELDhEQUE0RDtBQUM1RCx3RUFBcUU7QUFDckUsZ0ZBQThFO0FBSTlFLG1DQUFxQztBQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUFDLENBQUM7QUFFN0YsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQVksRUFBRSxVQUFVLEVBQUUsVUFBQyxTQUEwQixJQUFLLE9BQUEsSUFBSSxxQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBL0IsQ0FBK0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxpQ0FBZ0IsQ0FBQyxFQUFFLENBQUE7QUFDekksQ0FBQyxDQUFBO0FBd0JELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQXRCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2Q0FBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3pDO1FBQ0QsWUFBWTtZQUNWLDRCQUFZO1lBQ1oseUNBQWtCO2lCQUNmLG1DQUFxQixDQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNULG1DQUFpQjtZQUNqQixpQ0FBZ0I7WUFDaEIsMEJBQVc7WUFDWCx3Q0FBa0I7WUFDbEIsZ0JBQWdCLEVBQUU7U0FDbkI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BsYWNlcy9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBEZHBDb25uZWN0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2RkcC9jb25uZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2RkcC9jbGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3BsYWNlL3BsYWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBsYWNlTW9ja1NlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvcGxhY2UvcGxhY2UubW9jay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHZW9sb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9nZW9sb2NhdGlvbi9nZW9sb2NhdGlvbi5zZXJjaWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL3NoYXJlZC9jb25maWdcIjtcblxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuaWYgKHBsYXRmb3JtLmlzSU9TKSB7IEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBdFJWdkczQmUzeFhpWkZSN3hwLUstOWh5NG5aNGhNRnNcIik7IH1cblxuY29uc3QgcHJvdmlkZU15U2VydmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIHsgcHJvdmlkZTogUGxhY2VTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoZGRwQ2xpZW50OkRkcENsaWVudFNlcnZpY2UpID0+IG5ldyBQbGFjZU1vY2tTZXJ2aWNlKGRkcENsaWVudCksIGRlcHM6IFtEZHBDbGllbnRTZXJ2aWNlXSB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEFjdGlvbkJhckNvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGRwQ29ubmVjdFNlcnZpY2UsXG4gICAgRGRwQ2xpZW50U2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBHZW9sb2NhdGlvblNlcnZpY2UsXG4gICAgcHJvdmlkZU15U2VydmljZSgpLFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19