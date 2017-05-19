"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha256 = require('nativescript-toolbox/crypto-js/sha256');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var config_1 = require("../config");
var ddp_service_1 = require("../ddp/ddp.service");
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
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, ddp_service_1.DdpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDaEUsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsMENBQXNEO0FBRXRELG9DQUFtQztBQUNuQyxrREFBZ0Q7QUFHaEQsSUFBYSxXQUFXO0lBR3RCLHFCQUFvQixJQUFVLEVBQVUsTUFBYSxFQUFVLFVBQXFCO1FBQWhFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUFHLENBQUM7SUFFeEYsMkJBQUssR0FBTCxVQUFNLEtBQVksRUFBRSxRQUFlO1FBQW5DLGlCQWFDO1FBWkMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLElBQU0sUUFBUSxHQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0ksSUFBTSxPQUFPLEdBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRixRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUN4QixPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7WUFDNUYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDbkI7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJZSxXQUFJLEVBQWlCLGVBQU0sRUFBcUIsd0JBQVU7R0FIekUsV0FBVyxDQStDdkI7QUEvQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGEyNTYgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9vbGJveC9jcnlwdG8tanMvc2hhMjU2Jyk7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGRwU2VydmljZSB9IGZyb20gJy4uL2RkcC9kZHAuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgdXNlcjpVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGRkcFNlcnZpY2U6RGRwU2VydmljZSkge31cblxuICBsb2dpbihlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykge1xuICAgIGNvbnN0IHBhc3MgPSBzaGEyNTYocGFzc3dvcmQpLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgb2JzTG9naW46T2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5kZHBTZXJ2aWNlLmNhbGxNZXRob2QoJ2xvZ2luJywgW3t1c2VyOiB7IGVtYWlsIH0sIHBhc3N3b3JkOiB7ZGlnZXN0OiBwYXNzLCBhbGdvcml0aG06ICdzaGEtMjU2JyB9fV0pO1xuICAgIGNvbnN0IG9ic1VzZXI6T2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5kZHBTZXJ2aWNlLnN1YnNjcmliZSgndXNlcnMuY3VycmVudCcsICd1c2VycycpO1xuXG4gICAgb2JzTG9naW4uc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIG9ic1VzZXIuc3Vic2NyaWJlKChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKTtcbiAgICAgICAgdGhpcy5kZHBTZXJ2aWNlLm9ic2VydmUoJ3VzZXJzJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnQpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYnNMb2dpbjtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICBDb25maWcuYXBpVXJsICsgXCJVc2Vyc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBVc2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgICApXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufSJdfQ==