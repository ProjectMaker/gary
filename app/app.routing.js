"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./shared/user/user.service");
var connect_service_1 = require("./shared/ddp/connect.service");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var home_component_1 = require("./pages/home/home.component");
var map_component_1 = require("./modules/map/map.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'list', component: list_component_1.ListComponent, canActivate: [user_service_1.UserService] },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [connect_service_1.DdpConnectService] },
    { path: '', component: map_component_1.MapComponent },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    home_component_1.HomeComponent,
    map_component_1.MapComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCxnRUFBaUU7QUFHakUsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsNkRBQTJEO0FBRTlDLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsV0FBVyxFQUFFLENBQUMsMEJBQVcsQ0FBQyxFQUFFO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxtQ0FBaUIsQ0FBQyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtDQUN0QyxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxnQ0FBYztJQUNkLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYiw0QkFBWTtDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IERkcENvbm5lY3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGRwL2Nvbm5lY3Quc2VydmljZSc7XG5cblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL21hcC9tYXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW1VzZXJTZXJ2aWNlXSB9LFxuICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIGNhbkFjdGl2YXRlOiBbRGRwQ29ubmVjdFNlcnZpY2VdIH0sXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWFwQ29tcG9uZW50IH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBMb2dpbkNvbXBvbmVudCxcbiAgTGlzdENvbXBvbmVudCxcbiAgSG9tZUNvbXBvbmVudCxcbiAgTWFwQ29tcG9uZW50LFxuXTsiXX0=