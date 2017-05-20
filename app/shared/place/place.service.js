"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var client_service_1 = require("../ddp/client.service");
var PlaceService = (function () {
    function PlaceService(ddpService) {
        this.ddpService = ddpService;
    }
    PlaceService.prototype.getPlace = function () {
        return this.ddpService.subscribe('places', 'places');
    };
    return PlaceService;
}());
PlaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [client_service_1.DdpClientService])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msd0RBQXlEO0FBS3pELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBSSxDQUFDO0lBRXBELCtCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQUVvQixpQ0FBZ0I7R0FEcEMsWUFBWSxDQU14QjtBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vZGRwL2NsaWVudC5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tICcuL3BsYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYWNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGRwU2VydmljZTpEZHBDbGllbnRTZXJ2aWNlKSB7IH1cblxuICBnZXRQbGFjZSgpOk9ic2VydmFibGU8QXJyYXk8UGxhY2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuZGRwU2VydmljZS5zdWJzY3JpYmUoJ3BsYWNlcycsICdwbGFjZXMnKTtcbiAgfVxufSJdfQ==