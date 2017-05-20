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
    __metadata("design:paramtypes", [client_service_1.DdpClientService, place_service_1.PlaceService, core_2.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBdUM7QUFDdkMsa0VBQWdFO0FBQ2hFLGtFQUFtRTtBQVduRSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFVBQTJCLEVBQVUsWUFBeUIsRUFBVSxJQUFXO1FBQW5GLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFPO1FBRnZHLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0lBSXpCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM1QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7UUFFN0YsQ0FBQyxDQUFDLENBQUM7UUFHSCwySUFBMkk7UUFDM0ksdUhBQXVIO1FBQ3ZILHFGQUFxRjtRQUNyRixtREFBbUQ7UUFDbkQsZ0RBQWdEO1FBQ2hEOzs7OztVQUtFO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxhQUFhO0lBUnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRTtZQUNULDRCQUFZO1NBQ2I7S0FDRixDQUFDO3FDQUkrQixpQ0FBZ0IsRUFBdUIsNEJBQVksRUFBZSxhQUFNO0dBSDVGLGFBQWEsQ0FpQ3pCO0FBakNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxhY2UvcGxhY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kZHAvY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYWNlL3BsYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQbGFjZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBwbGFjZXM6QXJyYXk8UGxhY2U+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZHBTZXJ2aWNlOkRkcENsaWVudFNlcnZpY2UsIHByaXZhdGUgcGxhY2VTZXJ2aWNlOlBsYWNlU2VydmljZSwgcHJpdmF0ZSB6b25lOk5nWm9uZSkge1xuXG4gIH1cbiAgXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnBsYWNlcy5wdXNoKHtfaWQ6IFwib29cIiwgbmFtZTogXCJvb29vb1wifSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYWNlU2VydmljZS5nZXRQbGFjZSgpLnN1YnNjcmliZSgocGxhY2VzKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2VzKSk7IHRoaXMucGxhY2VzID0gcGxhY2VzXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGRwU2VydmljZS5vYnNlcnZlKCdwbGFjZXMnKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShldmVudCkpKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gICAgXG4gICAgLy9jb25zdCBzdWIgPSB0aGlzLnBsYWNlcy5zdWJzY3JpYmUoKHZhbHVlOk9iamVjdCkgPT4geyBpZiAocGFyc2VJbnQodmFsdWVbJ19pZCddKSA9PT0gMTApIHN1Yi51bnN1YnNjcmliZSgpO2NvbnNvbGUubG9nKHZhbHVlWyduYW1lJ10pIH0pO1xuICAgIC8vY29uc3Qgc3ViID0gb2JzLnN1YnNjcmliZSgodmFsdWU6UGxhY2UpID0+IHsgaWYgKHBhcnNlSW50KHZhbHVlLl9pZCkgPT09IDQpIHN1Yi51bnN1YnNjcmliZSgpO2NvbnNvbGUubG9nKHZhbHVlKTsgfSk7XG4gICAgLy9jb25zdCBzdWIgPSBvYnMuc3Vic2NyaWJlKCh4KSA9PiB7IGlmICh4ID09PSA0KSBzdWIudW5zdWJzY3JpYmUoKTtjb25zb2xlLmxvZyh4KX0pO1xuICAgIC8vdGhpcy52ZWhpY2xlcy5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ29vJykpO1xuICAgIC8vdGhpcy5yYWNlcy5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ29rJykpO1xuICAgIC8qXG4gICAgdGhpcy5wbGFjZVNlcnZpY2UuZ2V0UGxhY2UoKS5zdWJzY3JpYmUocGxhY2VzID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSBwbGFjZXM7XG4gICAgICBjb25zdCBpZDpudW1iZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pdGVtcyA9IFtdO2NsZWFyVGltZW91dChpZCkgfSwgMjAwMCk7XG4gICAgfSk7XG4gICAgKi9cbiAgfVxufSJdfQ==