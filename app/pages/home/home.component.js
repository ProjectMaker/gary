"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connect_service_1 = require("../../shared/ddp/connect.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, connectService) {
        this.router = router;
        this.connectService = connectService;
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/home/home.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, connect_service_1.DdpConnectService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxvRUFBcUU7QUFDckUsMENBQXlDO0FBTXpDLElBQWEsYUFBYTtJQUN4Qix1QkFBb0IsTUFBYSxFQUFVLGNBQWdDO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDekU7Ozs7Ozs7Ozs7Ozs7VUFhRTtJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDO3FDQUUyQixlQUFNLEVBQXlCLG1DQUFpQjtHQURoRSxhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZHBDb25uZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGRwL2Nvbm5lY3Quc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBjb25uZWN0U2VydmljZTpEZHBDb25uZWN0U2VydmljZSkge1xuICAgIC8qXG4gICAgaWYgKHRoaXMuY29ubmVjdFNlcnZpY2UucGluZ1N0YXR1cykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jb25uZWN0U2VydmljZS5jb25uZWN0ZWRFdmVudC5zdWJzY3JpYmUoXG4gICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lJylcbiAgICAgICk7XG4gICAgfVxuICAgICovXG4gIH1cbn0iXX0=