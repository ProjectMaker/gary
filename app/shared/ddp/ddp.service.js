"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DDPClient = require("nativescript-meteor");
var Observable_1 = require("rxjs/Observable");
var DdpService = (function () {
    function DdpService() {
        var _this = this;
        this.connected = false;
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
            if (error) {
                console.log('DDP connection error!');
                _this.connected = false;
                return;
            }
            _this.connected = true;
            if (wasReconnect) {
                console.log('Reestablishment of a connection.');
            }
            //console.log('CONNECTED');
        });
    }
    DdpService.prototype.waitConnection = function (cb) {
        var _this = this;
        if (this.connected)
            cb(true);
        var count = 0;
        var interval = setInterval(function () {
            if (_this.connected) {
                clearInterval(interval);
                cb(true);
            }
            else if (function (count) { return 10; }) {
                clearInterval(interval);
                cb(false);
            }
            count++;
        }, 500);
    };
    DdpService.prototype.callMethod = function (name, params) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.waitConnection(function (connected) {
                if (connected) {
                    _this.client.call(name, params, function (err, res) {
                        console.log(connected);
                        if (err)
                            observer.error(err);
                        else
                            observer.next(res);
                        observer.complete();
                    });
                }
                else
                    observer.error(new Error('server not found'));
            });
        });
    };
    DdpService.prototype.observe = function (collection) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var obs = _this.client.observe(collection);
            obs.added = function (id) { observer.next({ status: 'added', record: _this.client.collections[collection][id] }); };
            obs.changed = function (id) { observer.next({ status: 'changed', record: _this.client.collections[collection][id] }); };
            obs.removed = function (id) { observer.next({ status: 'removed', record: { _id: id } }); };
        });
    };
    DdpService.prototype.subscribe = function (name, collection, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return Observable_1.Observable.create(function (observer) {
            _this.waitConnection(function (connected) {
                if (!connected)
                    return;
                console.log('BEFORE SUBSCRIBE');
                _this.client.subscribe(name, [], function () {
                    console.log('SUBSCRIBE', name);
                    var objects = [];
                    for (var _id in _this.client.collections[collection]) {
                        objects.push(_this.client.collections[collection][_id]);
                    }
                    observer.next(objects);
                });
            });
        }).catch(function (error) {
            console.log('***************************** ERROR');
        });
    };
    return DdpService;
}());
DdpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DdpService);
exports.DdpService = DdpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrQ0FBa0Q7QUFDbEQsOENBQTZDO0FBSTdDLElBQWEsVUFBVTtJQUlyQjtRQUFBLGlCQTBCQztRQTVCRCxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBR3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDMUIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLFlBQVk7WUFDdEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFdEIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCwyQkFBMkI7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQWMsR0FBZCxVQUFlLEVBQUU7UUFBakIsaUJBYUM7UUFaQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsRUFBRSxDQUFD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c0I7UUFDOUQsTUFBTSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtZQUMvQixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQUMsU0FBUztnQkFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMvQixJQUFNLE9BQU8sR0FBaUIsRUFBRSxDQUFDO29CQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFNLEdBQUcsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekQsQ0FBQztvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzRkQsSUEyRkM7QUEzRlksVUFBVTtJQUR0QixpQkFBVSxFQUFFOztHQUNBLFVBQVUsQ0EyRnRCO0FBM0ZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgRERQQ2xpZW50ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tZXRlb3JcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGRwU2VydmljZSB7XG4gIGNsaWVudDpERFBDbGllbnQ7XG4gIGNvbm5lY3RlZDpib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jbGllbnQgPSBuZXcgRERQQ2xpZW50KHtcbiAgICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgICBwb3J0OiAzMDAwLFxuICAgICAgc3NsOiBmYWxzZSxcbiAgICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgICBhdXRvUmVjb25uZWN0VGltZXI6IDE1MDAwLFxuICAgICAgbWFpbnRhaW5Db2xsZWN0aW9uczogdHJ1ZSxcbiAgICAgIGRkcFZlcnNpb246ICcxJyxcbiAgICAgIHVzZVNvY2tKczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jbGllbnQuY29ubmVjdCgoZXJyb3IsIHdhc1JlY29ubmVjdCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdERFAgY29ubmVjdGlvbiBlcnJvciEnKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAod2FzUmVjb25uZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWVzdGFibGlzaG1lbnQgb2YgYSBjb25uZWN0aW9uLicpO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKCdDT05ORUNURUQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHdhaXRDb25uZWN0aW9uKGNiKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdGVkKSBjYih0cnVlKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IGludGVydmFsOm51bWJlciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2IodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50ID0+IDEwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBjYihmYWxzZSk7XG4gICAgICB9XG4gICAgICBjb3VudCsrXG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGNhbGxNZXRob2QobmFtZTpzdHJpbmcsIHBhcmFtcz86QXJyYXk8YW55Pik6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy53YWl0Q29ubmVjdGlvbigoY29ubmVjdGVkKSA9PiB7XG4gICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLmNsaWVudC5jYWxsKG5hbWUsIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb25uZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKGVycikgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGVsc2Ugb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcignc2VydmVyIG5vdCBmb3VuZCcpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb2JzZXJ2ZShjb2xsZWN0aW9uOnN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IG9icyA9IHRoaXMuY2xpZW50Lm9ic2VydmUoY29sbGVjdGlvbik7XG5cbiAgICAgIG9icy5hZGRlZCA9IChpZCkgPT4geyBvYnNlcnZlci5uZXh0KHtzdGF0dXM6ICdhZGRlZCcsIHJlY29yZDogdGhpcy5jbGllbnQuY29sbGVjdGlvbnNbY29sbGVjdGlvbl1baWRdfSl9O1xuICAgICAgb2JzLmNoYW5nZWQgPSAoaWQpID0+IHsgb2JzZXJ2ZXIubmV4dCh7c3RhdHVzOiAnY2hhbmdlZCcsIHJlY29yZDogdGhpcy5jbGllbnQuY29sbGVjdGlvbnNbY29sbGVjdGlvbl1baWRdfSl9O1xuICAgICAgb2JzLnJlbW92ZWQgPSAoaWQpID0+IHsgb2JzZXJ2ZXIubmV4dCh7c3RhdHVzOiAncmVtb3ZlZCcsIHJlY29yZDogeyBfaWQ6IGlkIH19KX07XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUobmFtZTpzdHJpbmcsIGNvbGxlY3Rpb246c3RyaW5nLCBwYXJhbXM6QXJyYXk8YW55PiA9IFtdKTogT2JzZXJ2YWJsZTxBcnJheTxPYmplY3Q+PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIHRoaXMud2FpdENvbm5lY3Rpb24oKGNvbm5lY3RlZCkgPT4ge1xuICAgICAgICBpZiAoIWNvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnQkVGT1JFIFNVQlNDUklCRScpO1xuICAgICAgICB0aGlzLmNsaWVudC5zdWJzY3JpYmUobmFtZSwgW10sICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU1VCU0NSSUJFJywgbmFtZSk7XG4gICAgICAgICAgY29uc3Qgb2JqZWN0czpBcnJheTxPYmplY3Q+ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBfaWQgaW4gdGhpcy5jbGllbnQuY29sbGVjdGlvbnNbY29sbGVjdGlvbl0pIHtcbiAgICAgICAgICAgIG9iamVjdHMucHVzaCh0aGlzLmNsaWVudC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXVtfaWRdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChvYmplY3RzKTtcblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEVSUk9SJyk7XG4gICAgfSk7XG4gIH1cbn0iXX0=