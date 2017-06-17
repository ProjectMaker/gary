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
        //this.schedulePing();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUErQztBQUMvQywrQ0FBa0Q7QUFDbEQsOENBQTZDO0FBQzdDLDBDQUFtRztBQUduRyxJQUFhLGlCQUFpQjtJQVE1QiwyQkFBb0IsTUFBYSxFQUFVLElBQVM7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLFNBQUksR0FBSixJQUFJLENBQUs7UUFOcEQsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBRzVCLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQzdDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUFBLGlCQXVCQztRQXRCQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUMvQixVQUFDLE1BQU07WUFDTCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUs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bnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgRERQQ2xpZW50ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tZXRlb3JcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGRwQ29ubmVjdFNlcnZpY2Uge1xuICBjbGllbnQ6RERQQ2xpZW50O1xuICBwaW5nU3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgcGluZ0V2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25uZWN0ZWRTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25uZWN0ZWRFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcGluZ0Vycm9yczpBcnJheTxudW1iZXI+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgIC8vdGhpcy5zY2hlZHVsZVBpbmcoKTtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGNvbnNvbGUubG9nKCdEZHBDb25uZWN0U2VydmljZSwgY2FuQWN0aXZhdGUnKVxuICAgIGNvbnN0IGFjdGl2YXRlZCA9IHRoaXMucGluZ1N0YXR1cyAmJiB0aGlzLmNvbm5lY3RlZFN0YXR1cztcbiAgICBpZiAoIWFjdGl2YXRlZCkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcbiAgICByZXR1cm4gYWN0aXZhdGVkO1xuICB9XG5cbiAgcHVibGljIHNjaGVkdWxlUGluZygpIHtcbiAgICBjb25zdCBvYnMgPSB0aGlzLnBpbmcoKS5zdWJzY3JpYmUoXG4gICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkU3RhdHVzKSB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLnBpbmdTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGluZ0V2ZW50LmVtaXQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waW5nU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5waW5nRXZlbnQuZW1pdChmYWxzZSlcbiAgICAgICAgICB0aGlzLmNvbm5lY3RlZFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkRXZlbnQuZW1pdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgb2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGluZ1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBpbmdFdmVudC5lbWl0KGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNjaGVkdWxlUGluZy5iaW5kKHRoaXMpLCA1MDAwKTtcbiAgICAgIH0sXG4gICAgICAoY29tcGxldGUpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZScsY29tcGxldGUpXG5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25uZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZHBTZXJ2aWNlIGNvbm5lY3QnKTtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBERFBDbGllbnQoe1xuICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBzc2w6IGZhbHNlLFxuICAgICAgYXV0b1JlY29ubmVjdDogdHJ1ZSxcbiAgICAgIGF1dG9SZWNvbm5lY3RUaW1lcjogMTUwMDAsXG4gICAgICBtYWludGFpbkNvbGxlY3Rpb25zOiB0cnVlLFxuICAgICAgZGRwVmVyc2lvbjogJzEnLFxuICAgICAgdXNlU29ja0pzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWVudC5jb25uZWN0KChlcnJvciwgd2FzUmVjb25uZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5jbGllbnQuY29ubmVjdCByZXNwb25zZScpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdERFAgY29ubmVjdGlvbiBlcnJvciEnKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFdmVudC5lbWl0KGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25uZWN0ZWRTdGF0dXMgPSB0cnVlO1xuICAgICAgdGhpcy5jb25uZWN0ZWRFdmVudC5lbWl0KHRydWUpO1xuXG4gICAgICBpZiAod2FzUmVjb25uZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWVzdGFibGlzaG1lbnQgb2YgYSBjb25uZWN0aW9uLicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb2NrZXRJbmZvKCk6UHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc29ja2pzL2luZm8nKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgcGluZygpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc29ja2V0SW5mbygpXG4gICAgICAgICAgLnRoZW4oKHJlczpSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHN0YXR1czogMjAwIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucGluZ0Vycm9ycy5sZW5ndGgpIHRoaXMucGluZ0Vycm9ycy5wb3AoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyOmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waW5nRXJyb3JzLnB1c2goZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBzdGF0dXM6IDQwNCB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpbmdFcnJvcnMubGVuZ3RoID09PSAxMCApIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoeyBzdGF0dXM6IDUwMCB9KTtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KTtcbiAgfVxuXG5cbn0iXX0=