"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var place_service_1 = require("../../shared/place/place.service");
var client_service_1 = require("../../shared/ddp/client.service");
var ListComponent = (function () {
    function ListComponent(ddpService, placeService, zone) {
        this.ddpService = ddpService;
        this.placeService = placeService;
        this.zone = zone;
        this.places = [];
    }
    ListComponent.prototype.submit = function () {
        this.places.push({ _id: "oo", name: "ooooo" });
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeService.getPlaces().subscribe(function (places) {
            _this.zone.run(function () {
                console.log(JSON.stringify(places));
                _this.places = places;
            });
            //this.ddpService.observe('places').subscribe((event) => console.log(JSON.stringify(event)));
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    }),
    __metadata("design:paramtypes", [client_service_1.DdpClientService, place_service_1.PlaceService, core_2.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBdUM7QUFDdkMsa0VBQWdFO0FBQ2hFLGtFQUFtRTtBQVFuRSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFVBQTJCLEVBQVUsWUFBeUIsRUFBVSxJQUFXO1FBQW5GLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFPO1FBRnZHLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0lBSXpCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7WUFDM0QsQ0FBQyxDQUFDLENBQUM7WUFDSCw2RkFBNkY7UUFFL0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDakUsQ0FBQztxQ0FJK0IsaUNBQWdCLEVBQXVCLDRCQUFZLEVBQWUsYUFBTTtHQUg1RixhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYWNlL3BsYWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERkcENsaWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGRwL2NsaWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGFjZS9wbGFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gIHBsYWNlczpBcnJheTxQbGFjZT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRkcFNlcnZpY2U6RGRwQ2xpZW50U2VydmljZSwgcHJpdmF0ZSBwbGFjZVNlcnZpY2U6UGxhY2VTZXJ2aWNlLCBwcml2YXRlIHpvbmU6Tmdab25lKSB7XG5cbiAgfVxuICBcbiAgc3VibWl0KCkge1xuICAgIHRoaXMucGxhY2VzLnB1c2goe19pZDogXCJvb1wiLCBuYW1lOiBcIm9vb29vXCJ9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGxhY2VTZXJ2aWNlLmdldFBsYWNlcygpLnN1YnNjcmliZSgocGxhY2VzKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2VzKSk7IHRoaXMucGxhY2VzID0gcGxhY2VzXG4gICAgICB9KTtcbiAgICAgIC8vdGhpcy5kZHBTZXJ2aWNlLm9ic2VydmUoJ3BsYWNlcycpLnN1YnNjcmliZSgoZXZlbnQpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50KSkpO1xuICAgICAgXG4gICAgfSk7XG4gIH1cbn0iXX0=