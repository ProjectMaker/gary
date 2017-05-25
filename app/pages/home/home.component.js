"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connect_service_1 = require("../../shared/ddp/connect.service");
var router_1 = require("nativescript-angular/router");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, connectService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.connectService = connectService;
        this.show = true;
        if (this.connectService.pingStatus) {
            this.routerExtensions.navigate(['/login']);
        }
        else {
            this.connectService.connectedEvent.subscribe(function (value) {
                if (value)
                    _this.routerExtensions.navigate(['/login'], { clearHistory: true });
            }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        }
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngOnDestroy = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/home/home.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, connect_service_1.DdpConnectService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxvRUFBcUU7QUFFckUsc0RBQTZEO0FBTTdELElBQWEsYUFBYTtJQUd4Qix1QkFBb0IsZ0JBQWlDLEVBQVUsY0FBZ0M7UUFBL0YsaUJBY0M7UUFkbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUZ4RixTQUFJLEdBQVksSUFBSSxDQUFDO1FBRzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsS0FBSztnQkFDSCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEYsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDM0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQW5CLENBQW1CLENBQzFCLENBQUM7UUFDSixDQUFDO0lBRUgsQ0FBQztJQUNELGdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBQ2IsbUNBQVcsR0FBWCxjQUFlLENBQUM7SUFDbEIsb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQztxQ0FJcUMseUJBQWdCLEVBQXlCLG1DQUFpQjtHQUhwRixhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGRwQ29ubmVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RkcC9jb25uZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBzaG93OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBjb25uZWN0U2VydmljZTpEZHBDb25uZWN0U2VydmljZSkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RTZXJ2aWNlLnBpbmdTdGF0dXMpIHtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbm5lY3RTZXJ2aWNlLmNvbm5lY3RlZEV2ZW50LnN1YnNjcmliZShcbiAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSkgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lJylcbiAgICAgICk7XG4gICAgfVxuXG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuICBuZ09uRGVzdHJveSgpIHt9XG59Il19