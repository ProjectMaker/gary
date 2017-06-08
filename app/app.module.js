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
var geolocation_sercice_1 = require("./shared/geolocation/geolocation.sercice");
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
            geolocation_sercice_1.GeolocationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw2REFBOEQ7QUFDOUQsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyw0RUFBeUU7QUFDekUsNkNBQThEO0FBQzlELGdFQUFpRTtBQUNqRSw4REFBK0Q7QUFDL0QsMkRBQXlEO0FBQ3pELGdGQUE4RTtBQUk5RSxtQ0FBcUM7QUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFBQyxXQUFXLENBQUMsYUFBYSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFBQyxDQUFDO0FBdUI3RixJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFyQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkNBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN6QztRQUNELFlBQVk7WUFDViw0QkFBWTtZQUNaLHlDQUFrQjtpQkFDZixtQ0FBcUIsQ0FDekI7UUFDRCxTQUFTLEVBQUU7WUFDVCxtQ0FBaUI7WUFDakIsaUNBQWdCO1lBQ2hCLDBCQUFXO1lBQ1gsd0NBQWtCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wbGFjZXMvYWN0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgRGRwQ29ubmVjdFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9kZHAvY29ubmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IERkcENsaWVudFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9kZHAvY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdlb2xvY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnNlcmNpY2UnO1xuXG5cbmRlY2xhcmUgdmFyIEdNU1NlcnZpY2VzOiBhbnk7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmlmIChwbGF0Zm9ybS5pc0lPUykgeyBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5QXRSVnZHM0JlM3hYaVpGUjd4cC1LLTloeTRuWjRoTUZzXCIpOyB9XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEFjdGlvbkJhckNvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGRwQ29ubmVjdFNlcnZpY2UsXG4gICAgRGRwQ2xpZW50U2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBHZW9sb2NhdGlvblNlcnZpY2VcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==