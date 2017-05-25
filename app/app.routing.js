"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./shared/user/user.service");
var connect_service_1 = require("./shared/ddp/connect.service");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var home_component_1 = require("./pages/home/home.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'list', component: list_component_1.ListComponent, canActivate: [user_service_1.UserService] },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [connect_service_1.DdpConnectService] },
    { path: '', component: home_component_1.HomeComponent },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    home_component_1.HomeComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCxnRUFBaUU7QUFHakUsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFFL0MsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQywwQkFBVyxDQUFDLEVBQUU7SUFDdEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLG1DQUFpQixDQUFDLEVBQUU7SUFDOUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQ3ZDLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw4QkFBYTtDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IERkcENvbm5lY3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGRwL2Nvbm5lY3Quc2VydmljZSc7XG5cblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbVXNlclNlcnZpY2VdIH0sXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtEZHBDb25uZWN0U2VydmljZV0gfSxcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBMb2dpbkNvbXBvbmVudCxcbiAgTGlzdENvbXBvbmVudCxcbiAgSG9tZUNvbXBvbmVudCxcbl07Il19