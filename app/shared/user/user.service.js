"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha256 = require('nativescript-toolbox/crypto-js/sha256');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var config_1 = require("../config");
var client_service_1 = require("../ddp/client.service");
var UserService = (function () {
    function UserService(http, router, ddpService) {
        this.http = http;
        this.router = router;
        this.ddpService = ddpService;
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var pass = sha256(password).toString();
        var obsLogin = this.ddpService.callMethod('login', [{ user: { email: email }, password: { digest: pass, algorithm: 'sha-256' } }]);
        var obsUser = this.ddpService.subscribe('users.current', 'users');
        obsLogin.subscribe(function (result) {
            obsUser.subscribe(function (content) {
                console.log(JSON.stringify(content));
                _this.ddpService.observe('users').subscribe(function (event) { return console.log(JSON.stringify(event)); });
            });
        });
        return obsLogin;
    };
    UserService.prototype.isLoggedIn = function () {
        return true;
    };
    UserService.prototype.canActivate = function () {
        this.router.navigate(['/login']);
        return true;
    };
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, client_service_1.DdpClientService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDaEUsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsMENBQXNEO0FBRXRELG9DQUFtQztBQUNuQyx3REFBeUQ7QUFHekQsSUFBYSxXQUFXO0lBR3RCLHFCQUFvQixJQUFVLEVBQVUsTUFBYSxFQUFVLFVBQTJCO1FBQXRFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFFMUYsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxLQUFZLEVBQUUsUUFBZTtRQUFuQyxpQkFhQztRQVpDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFNLFFBQVEsR0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNJLElBQU0sT0FBTyxHQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBQzVGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ25CO2FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBSWUsV0FBSSxFQUFpQixlQUFNLEVBQXFCLGlDQUFnQjtHQUgvRSxXQUFXLENBa0R2QjtBQWxEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoYTI1NiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC10b29sYm94L2NyeXB0by1qcy9zaGEyNTYnKTtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEZHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vZGRwL2NsaWVudC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICB1c2VyOlVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgZGRwU2VydmljZTpEZHBDbGllbnRTZXJ2aWNlKSB7XG4gICAgXG4gIH1cblxuICBsb2dpbihlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykge1xuICAgIGNvbnN0IHBhc3MgPSBzaGEyNTYocGFzc3dvcmQpLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgb2JzTG9naW46T2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5kZHBTZXJ2aWNlLmNhbGxNZXRob2QoJ2xvZ2luJywgW3t1c2VyOiB7IGVtYWlsIH0sIHBhc3N3b3JkOiB7ZGlnZXN0OiBwYXNzLCBhbGdvcml0aG06ICdzaGEtMjU2JyB9fV0pO1xuICAgIGNvbnN0IG9ic1VzZXI6T2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5kZHBTZXJ2aWNlLnN1YnNjcmliZSgndXNlcnMuY3VycmVudCcsICd1c2VycycpO1xuXG4gICAgb2JzTG9naW4uc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIG9ic1VzZXIuc3Vic2NyaWJlKChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKTtcbiAgICAgICAgdGhpcy5kZHBTZXJ2aWNlLm9ic2VydmUoJ3VzZXJzJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnQpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYnNMb2dpbjtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgQ29uZmlnLmFwaVVybCArIFwiVXNlcnNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgVXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIEVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBQYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgfSksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=