"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var DDPClient = require("nativescript-meteor");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var DdpConnectService = (function () {
    function DdpConnectService(router, http) {
        this.router = router;
        this.http = http;
        this.pingStatus = false;
        this.pingEvent = new core_1.EventEmitter();
        this.connectedStatus = false;
        this.connectedEvent = new core_1.EventEmitter();
        this.pingErrors = [];
        this.schedulePing();
    }
    DdpConnectService.prototype.canActivate = function (route, state) {
        console.log('DdpConnectService, canActivate');
        var activated = this.pingStatus && this.connectedStatus;
        if (!activated)
            this.router.navigate(['/home']);
        return activated;
    };
    DdpConnectService.prototype.schedulePing = function () {
        var _this = this;
        var obs = this.ping().subscribe(function (result) {
            if (result.status === 200) {
                if (!_this.connectedStatus)
                    _this.connect();
                _this.pingStatus = true;
                _this.pingEvent.emit(true);
            }
            else {
                _this.pingStatus = false;
                _this.pingEvent.emit(false);
                _this.connectedStatus = false;
                _this.connectedEvent.emit(false);
            }
        }, function (error) {
            obs.unsubscribe();
            _this.pingStatus = false;
            _this.pingEvent.emit(false);
            setTimeout(_this.schedulePing.bind(_this), 5000);
        }, function (complete) { return console.log('complete', complete); });
    };
    DdpConnectService.prototype.connect = function () {
        var _this = this;
        console.log('ddpService connect');
        this.client = new DDPClient({
            host: "localhost",
            port: 3000,
            ssl: false,
            autoReconnect: true,
            autoReconnectTimer: 15000,
            maintainCollections: true,
            ddpVersion: '1',
            useSockJs: true
        });
        this.client.connect(function (error, wasReconnect) {
            console.log('this.client.connect response');
            if (error) {
                console.log('DDP connection error!');
                _this.connectedStatus = false;
                _this.connectedEvent.emit(false);
                return;
            }
            _this.connectedStatus = true;
            _this.connectedEvent.emit(true);
            if (wasReconnect) {
                console.log('Reestablishment of a connection.');
            }
        });
    };
    DdpConnectService.prototype.socketInfo = function () {
        return this.http.get('http://localhost:3000/sockjs/info')
            .toPromise();
    };
    DdpConnectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DdpConnectService.prototype.ping = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var id = setInterval(function () {
                _this.socketInfo()
                    .then(function (res) {
                    observer.next({ status: 200 });
                    if (_this.pingErrors.length)
                        _this.pingErrors.pop();
                })
                    .catch(function (err) {
                    _this.pingErrors.push(err.message || err);
                    observer.next({ status: 404 });
                    if (_this.pingErrors.length === 10) {
                        observer.error({ status: 500 });
                        clearInterval(id);
                    }
                });
            }, 2000);
        });
    };
    return DdpConnectService;
}());
DdpConnectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], DdpConnectService);
exports.DdpConnectService = DdpConnectService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUErQztBQUMvQywrQ0FBa0Q7QUFDbEQsOENBQTZDO0FBQzdDLDBDQUFtRztBQUduRyxJQUFhLGlCQUFpQjtJQVE1QiwyQkFBb0IsTUFBYSxFQUFVLElBQVM7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLFNBQUksR0FBSixJQUFJLENBQUs7UUFOcEQsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBRzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQzdDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUFBLGlCQXVCQztRQXRCQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUMvQixVQUFDLE1BQU07WUFDTCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFD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IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgRERQQ2xpZW50ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tZXRlb3JcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGRwQ29ubmVjdFNlcnZpY2Uge1xuICBjbGllbnQ6RERQQ2xpZW50O1xuICBwaW5nU3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgcGluZ0V2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25uZWN0ZWRTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25uZWN0ZWRFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcGluZ0Vycm9yczpBcnJheTxudW1iZXI+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgIHRoaXMuc2NoZWR1bGVQaW5nKCk7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBjb25zb2xlLmxvZygnRGRwQ29ubmVjdFNlcnZpY2UsIGNhbkFjdGl2YXRlJylcbiAgICBjb25zdCBhY3RpdmF0ZWQgPSB0aGlzLnBpbmdTdGF0dXMgJiYgdGhpcy5jb25uZWN0ZWRTdGF0dXM7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgcmV0dXJuIGFjdGl2YXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBzY2hlZHVsZVBpbmcoKSB7XG4gICAgY29uc3Qgb2JzID0gdGhpcy5waW5nKCkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZFN0YXR1cykgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5waW5nU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBpbmdFdmVudC5lbWl0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGluZ1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucGluZ0V2ZW50LmVtaXQoZmFsc2UpXG4gICAgICAgICAgdGhpcy5jb25uZWN0ZWRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvbm5lY3RlZEV2ZW50LmVtaXQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIG9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnBpbmdTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5waW5nRXZlbnQuZW1pdChmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zY2hlZHVsZVBpbmcuYmluZCh0aGlzKSwgNTAwMCk7XG4gICAgICB9LFxuICAgICAgKGNvbXBsZXRlKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGUnLGNvbXBsZXRlKVxuXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29ubmVjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGRwU2VydmljZSBjb25uZWN0Jyk7XG4gICAgdGhpcy5jbGllbnQgPSBuZXcgRERQQ2xpZW50KHtcbiAgICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgICBwb3J0OiAzMDAwLFxuICAgICAgc3NsOiBmYWxzZSxcbiAgICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgICBhdXRvUmVjb25uZWN0VGltZXI6IDE1MDAwLFxuICAgICAgbWFpbnRhaW5Db2xsZWN0aW9uczogdHJ1ZSxcbiAgICAgIGRkcFZlcnNpb246ICcxJyxcbiAgICAgIHVzZVNvY2tKczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jbGllbnQuY29ubmVjdCgoZXJyb3IsIHdhc1JlY29ubmVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuY2xpZW50LmNvbm5lY3QgcmVzcG9uc2UnKTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRERQIGNvbm5lY3Rpb24gZXJyb3IhJyk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkRXZlbnQuZW1pdChmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29ubmVjdGVkU3RhdHVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29ubmVjdGVkRXZlbnQuZW1pdCh0cnVlKTtcblxuICAgICAgaWYgKHdhc1JlY29ubmVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVlc3RhYmxpc2htZW50IG9mIGEgY29ubmVjdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc29ja2V0SW5mbygpOlByb21pc2U8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NvY2tqcy9pbmZvJylcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cblxuICBwcml2YXRlIHBpbmcoKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLnNvY2tldEluZm8oKVxuICAgICAgICAgIC50aGVuKChyZXM6UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBzdGF0dXM6IDIwMCB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpbmdFcnJvcnMubGVuZ3RoKSB0aGlzLnBpbmdFcnJvcnMucG9wKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycjphbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGluZ0Vycm9ycy5wdXNoKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5waW5nRXJyb3JzLmxlbmd0aCA9PT0gMTAgKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG4gIH1cblxuXG59Il19