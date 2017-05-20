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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUErQztBQUMvQywrQ0FBa0Q7QUFDbEQsOENBQTZDO0FBQzdDLDBDQUFtRztBQUduRyxJQUFhLGlCQUFpQjtJQVE1QiwyQkFBb0IsTUFBYSxFQUFVLElBQVM7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLFNBQUksR0FBSixJQUFJLENBQUs7UUFOcEQsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBRzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBQUEsaUJBdUJDO1FBdEJDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQy9CLFVBQUMsTUFBTTtZQUNMLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMs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QU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsSUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDO2dCQUNyQixLQUFJLENBQUMsVUFBVSxFQUFFO3FCQUNkLElBQUksQ0FBQyxVQUFDLEdBQVk7b0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7d0JBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEdBQU87b0JBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxFQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ2hDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDcEIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdILHdCQUFDO0FBQUQsQ0FBQyxBQXhHRCxJQXdHQztBQXhHWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtxQ0FTZ0IsZUFBTSxFQUFlLFdBQUk7R0FSekMsaUJBQWlCLENBd0c3QjtBQXhHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCBERFBDbGllbnQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1ldGVvclwiKTtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZHBDb25uZWN0U2VydmljZSB7XG4gIGNsaWVudDpERFBDbGllbnQ7XG4gIHBpbmdTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICBwaW5nRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbm5lY3RlZFN0YXR1czpib29sZWFuID0gZmFsc2U7XG4gIGNvbm5lY3RlZEV2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwaW5nRXJyb3JzOkFycmF5PG51bWJlcj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gICAgdGhpcy5zY2hlZHVsZVBpbmcoKTtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGNvbnN0IGFjdGl2YXRlZCA9IHRoaXMucGluZ1N0YXR1cyAmJiB0aGlzLmNvbm5lY3RlZFN0YXR1cztcbiAgICBpZiAoIWFjdGl2YXRlZCkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcbiAgICByZXR1cm4gYWN0aXZhdGVkO1xuICB9XG5cbiAgcHVibGljIHNjaGVkdWxlUGluZygpIHtcbiAgICBjb25zdCBvYnMgPSB0aGlzLnBpbmcoKS5zdWJzY3JpYmUoXG4gICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkU3RhdHVzKSB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLnBpbmdTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGluZ0V2ZW50LmVtaXQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waW5nU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5waW5nRXZlbnQuZW1pdChmYWxzZSlcbiAgICAgICAgICB0aGlzLmNvbm5lY3RlZFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkRXZlbnQuZW1pdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgb2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGluZ1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBpbmdFdmVudC5lbWl0KGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNjaGVkdWxlUGluZy5iaW5kKHRoaXMpLCA1MDAwKTtcbiAgICAgIH0sXG4gICAgICAoY29tcGxldGUpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZScsY29tcGxldGUpXG5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25uZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZHBTZXJ2aWNlIGNvbm5lY3QnKTtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBERFBDbGllbnQoe1xuICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBzc2w6IGZhbHNlLFxuICAgICAgYXV0b1JlY29ubmVjdDogdHJ1ZSxcbiAgICAgIGF1dG9SZWNvbm5lY3RUaW1lcjogMTUwMDAsXG4gICAgICBtYWludGFpbkNvbGxlY3Rpb25zOiB0cnVlLFxuICAgICAgZGRwVmVyc2lvbjogJzEnLFxuICAgICAgdXNlU29ja0pzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWVudC5jb25uZWN0KChlcnJvciwgd2FzUmVjb25uZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5jbGllbnQuY29ubmVjdCByZXNwb25zZScpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdERFAgY29ubmVjdGlvbiBlcnJvciEnKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFdmVudC5lbWl0KGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25uZWN0ZWRTdGF0dXMgPSB0cnVlO1xuICAgICAgdGhpcy5jb25uZWN0ZWRFdmVudC5lbWl0KHRydWUpO1xuXG4gICAgICBpZiAod2FzUmVjb25uZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWVzdGFibGlzaG1lbnQgb2YgYSBjb25uZWN0aW9uLicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb2NrZXRJbmZvKCk6UHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc29ja2pzL2luZm8nKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgcGluZygpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc29ja2V0SW5mbygpXG4gICAgICAgICAgLnRoZW4oKHJlczpSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHN0YXR1czogMjAwIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucGluZ0Vycm9ycy5sZW5ndGgpIHRoaXMucGluZ0Vycm9ycy5wb3AoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyOmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waW5nRXJyb3JzLnB1c2goZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBzdGF0dXM6IDQwNCB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpbmdFcnJvcnMubGVuZ3RoID09PSAxMCApIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoeyBzdGF0dXM6IDUwMCB9KTtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KTtcbiAgfVxuXG5cbn0iXX0=