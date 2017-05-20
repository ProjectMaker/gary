"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connect_service_1 = require("../../shared/ddp/connect.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, connectService) {
        var _this = this;
        this.router = router;
        this.connectService = connectService;
        if (this.connectService.pingStatus) {
            this.router.navigate(['/login']);
        }
        else {
            this.connectService.connectedEvent.subscribe(function (value) {
                if (value)
                    _this.router.navigate(['/login']);
            }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxvRUFBcUU7QUFDckUsMENBQXlDO0FBTXpDLElBQWEsYUFBYTtJQUN4Qix1QkFBb0IsTUFBYSxFQUFVLGNBQWdDO1FBQTNFLGlCQWFDO1FBYm1CLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDekUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsS0FBSztnQkFDSCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQzNCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixDQUMxQixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDO3FDQUUyQixlQUFNLEVBQXlCLG1DQUFpQjtHQURoRSxhQUFhLENBZXpCO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGRwQ29ubmVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RkcC9jb25uZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY29ubmVjdFNlcnZpY2U6RGRwQ29ubmVjdFNlcnZpY2UpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0U2VydmljZS5waW5nU3RhdHVzKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbm5lY3RTZXJ2aWNlLmNvbm5lY3RlZEV2ZW50LnN1YnNjcmliZShcbiAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iXX0=