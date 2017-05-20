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
    { path: '', component: login_component_1.LoginComponent, canActivate: [connect_service_1.DdpConnectService] },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    home_component_1.HomeComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCxnRUFBaUU7QUFHakUsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFFL0MsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQywwQkFBVyxDQUFDLEVBQUU7SUFDdEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLG1DQUFpQixDQUFDLEVBQUU7SUFDOUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLG1DQUFpQixDQUFDLEVBQUU7Q0FDMUUsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsZ0NBQWM7SUFDZCw4QkFBYTtJQUNiLDhCQUFhO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRwQ29ubmVjdFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9kZHAvY29ubmVjdC5zZXJ2aWNlJztcblxuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtVc2VyU2VydmljZV0gfSxcbiAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0RkcENvbm5lY3RTZXJ2aWNlXSB9LFxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0RkcENvbm5lY3RTZXJ2aWNlXSB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIExpc3RDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG5dOyJdfQ==