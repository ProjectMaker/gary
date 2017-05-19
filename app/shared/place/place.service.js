"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ddp_service_1 = require("../ddp/ddp.service");
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
    __metadata("design:paramtypes", [ddp_service_1.DdpService])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msa0RBQWdEO0FBS2hELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUFJLENBQUM7SUFFOUMsK0JBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBRW9CLHdCQUFVO0dBRDlCLFlBQVksQ0FNeEI7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGRwU2VydmljZSB9IGZyb20gJy4uL2RkcC9kZHAuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi9wbGFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGFjZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRkcFNlcnZpY2U6RGRwU2VydmljZSkgeyB9XG5cbiAgZ2V0UGxhY2UoKTpPYnNlcnZhYmxlPEFycmF5PFBsYWNlPj4ge1xuICAgIHJldHVybiB0aGlzLmRkcFNlcnZpY2Uuc3Vic2NyaWJlKCdwbGFjZXMnLCAncGxhY2VzJyk7XG4gIH1cbn0iXX0=