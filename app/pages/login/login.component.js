"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var client_service_1 = require("../../shared/ddp/client.service");
var LoginComponent = (function () {
    function LoginComponent(ddpService, userService, router, page) {
        this.ddpService = ddpService;
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.error = false;
        this.user = new user_1.User();
        //this.ddpService.hello();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.userService.login(this.user.email, this.user.password)
            .subscribe(function (userOutput) {
            console.log('login results', JSON.stringify(userOutput));
            _this.router.navigate(["/list"]);
        }, function (error) {
            _this.error = error;
            console.log('error', JSON.stringify(error));
        }, function () { console.log('complete'); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function (error) {
            _this.error = error.json();
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'pages/login/login.html',
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    }),
    __metadata("design:paramtypes", [client_service_1.DdpClientService, user_service_1.UserService, router_1.Router, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQStCO0FBQy9CLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCxrRUFBbUU7QUFPbkUsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixVQUEyQixFQUFVLFdBQXVCLEVBQVUsTUFBYSxFQUFVLElBQVM7UUFBdEcsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSDFILGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBRyxLQUFLLENBQUM7UUFHWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsMEJBQTBCO0lBQzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBRS9DLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN4RCxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBTStCLGlDQUFnQixFQUFzQiwwQkFBVyxFQUFpQixlQUFNLEVBQWUsV0FBSTtHQUwvRyxjQUFjLENBMkMxQjtBQTNDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlci91c2VyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGRwQ2xpZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGRwL2NsaWVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3MnLCdwYWdlcy9sb2dpbi9sb2dpbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgZXJyb3IgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRkcFNlcnZpY2U6RGRwQ2xpZW50U2VydmljZSwgcHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHBhZ2U6UGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgLy90aGlzLmRkcFNlcnZpY2UuaGVsbG8oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XG5cbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKVxuICAgICAgLnN1YnNjcmliZSgodXNlck91dHB1dCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVzdWx0cycsIEpTT04uc3RyaW5naWZ5KHVzZXJPdXRwdXQpKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgfSwgKCkgPT4geyBjb25zb2xlLmxvZygnY29tcGxldGUnKX0pO1xuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5qc29uKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==