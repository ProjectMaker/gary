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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBdUM7QUFDdkMsa0VBQWdFO0FBQ2hFLGtFQUFtRTtBQVduRSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFVBQTJCLEVBQVUsWUFBeUIsRUFBVSxJQUFXO1FBQW5GLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFPO1FBRnZHLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0lBSXpCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDNUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7WUFDM0QsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1FBRTdGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBUnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRTtZQUNULDRCQUFZO1NBQ2I7S0FDRixDQUFDO3FDQUkrQixpQ0FBZ0IsRUFBdUIsNEJBQVksRUFBZSxhQUFNO0dBSDVGLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxhY2UvcGxhY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kZHAvY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYWNlL3BsYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQbGFjZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBwbGFjZXM6QXJyYXk8UGxhY2U+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZHBTZXJ2aWNlOkRkcENsaWVudFNlcnZpY2UsIHByaXZhdGUgcGxhY2VTZXJ2aWNlOlBsYWNlU2VydmljZSwgcHJpdmF0ZSB6b25lOk5nWm9uZSkge1xuXG4gIH1cbiAgXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnBsYWNlcy5wdXNoKHtfaWQ6IFwib29cIiwgbmFtZTogXCJvb29vb1wifSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYWNlU2VydmljZS5nZXRQbGFjZSgpLnN1YnNjcmliZSgocGxhY2VzKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2VzKSk7IHRoaXMucGxhY2VzID0gcGxhY2VzXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGRwU2VydmljZS5vYnNlcnZlKCdwbGFjZXMnKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShldmVudCkpKTtcbiAgICAgIFxuICAgIH0pO1xuICB9XG59Il19