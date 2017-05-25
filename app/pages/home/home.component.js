"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connect_service_1 = require("../../shared/ddp/connect.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, connectService) {
        this.router = router;
        this.connectService = connectService;
        this.show = true;
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
    HomeComponent.prototype.onTap = function () {
        console.log("FirstComponent.Tapped!");
        this.router.navigate(['/home/info']);
    };
    HomeComponent.prototype.onShare = function () {
        console.log("Share button tapped!");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxvRUFBcUU7QUFDckUsMENBQXlDO0FBTXpDLElBQWEsYUFBYTtJQUd4Qix1QkFBb0IsTUFBYSxFQUFVLGNBQWdDO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFGcEUsU0FBSSxHQUFZLElBQUksQ0FBQztRQUcxQjs7Ozs7Ozs7Ozs7OztVQWFFO0lBQ0osQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwrQkFBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDO3FDQUkyQixlQUFNLEVBQXlCLG1DQUFpQjtHQUhoRSxhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZHBDb25uZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGRwL2Nvbm5lY3Quc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBzaG93OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY29ubmVjdFNlcnZpY2U6RGRwQ29ubmVjdFNlcnZpY2UpIHtcbiAgICAvKlxuICAgIGlmICh0aGlzLmNvbm5lY3RTZXJ2aWNlLnBpbmdTdGF0dXMpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY29ubmVjdFNlcnZpY2UuY29ubmVjdGVkRXZlbnQuc3Vic2NyaWJlKFxuICAgICAgICB2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZG9uZScpXG4gICAgICApO1xuICAgIH1cbiAgICAqL1xuICB9XG5cbiAgb25UYXAoKSB7XG4gICAgY29uc29sZS5sb2coXCJGaXJzdENvbXBvbmVudC5UYXBwZWQhXCIpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvaW5mbyddKTtcbiAgfVxuICBvblNoYXJlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2hhcmUgYnV0dG9uIHRhcHBlZCFcIik7XG4gIH1cbn0iXX0=