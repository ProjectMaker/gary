"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var place_service_1 = require("../../shared/place/place.service");
var ddp_service_1 = require("../../shared/ddp/ddp.service");
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
        this.placeService.getPlace().subscribe(function (places) {
            _this.zone.run(function () {
                console.log(JSON.stringify(places));
                _this.places = places;
            });
            _this.ddpService.observe('places').subscribe(function (event) { return console.log(JSON.stringify(event)); });
        });
        //const sub = this.places.subscribe((value:Object) => { if (parseInt(value['_id']) === 10) sub.unsubscribe();console.log(value['name']) });
        //const sub = obs.subscribe((value:Place) => { if (parseInt(value._id) === 4) sub.unsubscribe();console.log(value); });
        //const sub = obs.subscribe((x) => { if (x === 4) sub.unsubscribe();console.log(x)});
        //this.vehicles.subscribe(() => console.log('oo'));
        //this.races.subscribe(() => console.log('ok'));
        /*
        this.placeService.getPlace().subscribe(places => {
          this.items = places;
          const id:number = setTimeout(() => { this.items = [];clearTimeout(id) }, 2000);
        });
        */
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [
            place_service_1.PlaceService,
        ],
    }),
    __metadata("design:paramtypes", [ddp_service_1.DdpService, place_service_1.PlaceService, core_2.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBdUM7QUFDdkMsa0VBQWdFO0FBQ2hFLDREQUEwRDtBQVcxRCxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFVBQXFCLEVBQVUsWUFBeUIsRUFBVSxJQUFXO1FBQTdFLGVBQVUsR0FBVixVQUFVLENBQVc7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU87UUFGakcsV0FBTSxHQUFnQixFQUFFLENBQUM7SUFJekIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1lBQzNELENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUU3RixDQUFDLENBQUMsQ0FBQztRQUdILDJJQUEySTtRQUMzSSx1SEFBdUg7UUFDdkgscUZBQXFGO1FBQ3JGLG1EQUFtRDtRQUNuRCxnREFBZ0Q7UUFDaEQ7Ozs7O1VBS0U7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtLQUNGLENBQUM7cUNBSStCLHdCQUFVLEVBQXVCLDRCQUFZLEVBQWUsYUFBTTtHQUh0RixhQUFhLENBaUN6QjtBQWpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYWNlL3BsYWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERkcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGRwL2RkcC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGFjZS9wbGFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUGxhY2VTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgcGxhY2VzOkFycmF5PFBsYWNlPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGRwU2VydmljZTpEZHBTZXJ2aWNlLCBwcml2YXRlIHBsYWNlU2VydmljZTpQbGFjZVNlcnZpY2UsIHByaXZhdGUgem9uZTpOZ1pvbmUpIHtcblxuICB9XG4gIFxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5wbGFjZXMucHVzaCh7X2lkOiBcIm9vXCIsIG5hbWU6IFwib29vb29cIn0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wbGFjZVNlcnZpY2UuZ2V0UGxhY2UoKS5zdWJzY3JpYmUoKHBsYWNlcykgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBsYWNlcykpOyB0aGlzLnBsYWNlcyA9IHBsYWNlc1xuICAgICAgfSk7XG4gICAgICB0aGlzLmRkcFNlcnZpY2Uub2JzZXJ2ZSgncGxhY2VzJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnQpKSk7XG4gICAgICBcbiAgICB9KTtcblxuICAgIFxuICAgIC8vY29uc3Qgc3ViID0gdGhpcy5wbGFjZXMuc3Vic2NyaWJlKCh2YWx1ZTpPYmplY3QpID0+IHsgaWYgKHBhcnNlSW50KHZhbHVlWydfaWQnXSkgPT09IDEwKSBzdWIudW5zdWJzY3JpYmUoKTtjb25zb2xlLmxvZyh2YWx1ZVsnbmFtZSddKSB9KTtcbiAgICAvL2NvbnN0IHN1YiA9IG9icy5zdWJzY3JpYmUoKHZhbHVlOlBsYWNlKSA9PiB7IGlmIChwYXJzZUludCh2YWx1ZS5faWQpID09PSA0KSBzdWIudW5zdWJzY3JpYmUoKTtjb25zb2xlLmxvZyh2YWx1ZSk7IH0pO1xuICAgIC8vY29uc3Qgc3ViID0gb2JzLnN1YnNjcmliZSgoeCkgPT4geyBpZiAoeCA9PT0gNCkgc3ViLnVuc3Vic2NyaWJlKCk7Y29uc29sZS5sb2coeCl9KTtcbiAgICAvL3RoaXMudmVoaWNsZXMuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdvbycpKTtcbiAgICAvL3RoaXMucmFjZXMuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdvaycpKTtcbiAgICAvKlxuICAgIHRoaXMucGxhY2VTZXJ2aWNlLmdldFBsYWNlKCkuc3Vic2NyaWJlKHBsYWNlcyA9PiB7XG4gICAgICB0aGlzLml0ZW1zID0gcGxhY2VzO1xuICAgICAgY29uc3QgaWQ6bnVtYmVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaXRlbXMgPSBbXTtjbGVhclRpbWVvdXQoaWQpIH0sIDIwMDApO1xuICAgIH0pO1xuICAgICovXG4gIH1cbn0iXX0=