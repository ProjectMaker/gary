"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./layouts/home.component");
var app_routing_1 = require("./app.routing");
var connect_service_1 = require("./shared/ddp/connect.service");
var client_service_1 = require("./shared/ddp/client.service");
var user_service_1 = require("./shared/user/user.service");
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
            home_component_1.HomeLayoutComponent
        ].concat(app_routing_1.navigatableComponents),
        providers: [
            connect_service_1.DdpConnectService,
            client_service_1.DdpClientService,
            user_service_1.UserService,
        ],
        bootstrap: [home_component_1.HomeLayoutComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw2REFBOEQ7QUFDOUQsc0RBQXVFO0FBRXZFLDJEQUErRDtBQUMvRCw2Q0FBOEQ7QUFDOUQsZ0VBQWlFO0FBQ2pFLDhEQUErRDtBQUMvRCwyREFBeUQ7QUFxQnpELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQW5CckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2Q0FBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3pDO1FBQ0QsWUFBWTtZQUNWLG9DQUFtQjtpQkFDaEIsbUNBQXFCLENBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsbUNBQWlCO1lBQ2pCLGlDQUFnQjtZQUNoQiwwQkFBVztTQUNaO1FBQ0QsU0FBUyxFQUFFLENBQUMsb0NBQW1CLENBQUM7S0FDakMsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXRzL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBEZHBDb25uZWN0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2RkcC9jb25uZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2RkcC9jbGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhvbWVMYXlvdXRDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERkcENvbm5lY3RTZXJ2aWNlLFxuICAgIERkcENsaWVudFNlcnZpY2UsXG4gICAgVXNlclNlcnZpY2UsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0hvbWVMYXlvdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19