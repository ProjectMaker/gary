"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connect_service_1 = require("./connect.service");
var Observable_1 = require("rxjs/Observable");
var DdpClientService = (function () {
    function DdpClientService(connectService) {
        this.connectService = connectService;
    }
    DdpClientService.prototype.callMethod = function (name, params) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (_this.connectService.connectedStatus) {
                _this.connectService.client.call(name, params, function (err, res) {
                    if (err)
                        observer.error(err);
                    else
                        observer.next(res);
                    observer.complete();
                });
            }
            else
                observer.error(new Error('connection down'));
        });
    };
    DdpClientService.prototype.observe = function (collection) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var obs = _this.connectService.client.observe(collection);
            obs.added = function (id) { observer.next({ status: 'added', record: _this.connectService.client.collections[collection][id] }); };
            obs.changed = function (id) { observer.next({ status: 'changed', record: _this.connectService.client.collections[collection][id] }); };
            obs.removed = function (id) { observer.next({ status: 'removed', record: { _id: id } }); };
        });
    };
    DdpClientService.prototype.subscribe = function (name, collection, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return Observable_1.Observable.create(function (observer) {
            console.log('subscribe, Observable.create');
            if (!_this.connectService.connectedStatus) {
                observer.error(new Error('connection down'));
                return false;
            }
            _this.connectService.client.subscribe(name, [], function () {
                var objects = [];
                for (var _id in _this.connectService.client.collections[collection]) {
                    objects.push(_this.connectService.client.collections[collection][_id]);
                }
                observer.next(objects);
            });
        }).catch(function (error) {
            console.log('***************************** ERROR');
        });
    };
    return DdpClientService;
}());
DdpClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [connect_service_1.DdpConnectService])
], DdpClientService);
exports.DdpClientService = DdpClientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxxREFBc0Q7QUFDdEQsOENBQTZDO0FBRzdDLElBQWEsZ0JBQWdCO0lBQzNCLDBCQUFvQixjQUFnQztRQUFoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7SUFBSSxDQUFDO0lBRXpELHFDQUFVLEdBQVYsVUFBVyxJQUFXLEVBQUUsTUFBa0I7UUFBMUMsaUJBVUM7UUFUQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztvQkFDckQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLElBQUk7d0JBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJO2dCQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxVQUFpQjtRQUF6QixpQkFRQztRQVBDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTNELEdBQUcsQ0FBQyxLQUFLLEdBQUcsVUFBQyxFQUFFLElBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUM7WUFDeEgsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFDLEVBQUUsSUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQztZQUM1SCxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsRUFBRSxJQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLElBQVcsRUFBRSxVQUFpQixFQUFFLE1BQXNCO1FBQWhFLGlCQWtCQztRQWxCeUMsdUJBQUEsRUFBQSxXQUFzQjtRQUM5RCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDekMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQzdDLElBQU0sT0FBTyxHQUFpQixFQUFFLENBQUM7Z0JBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQU0sR0FBRyxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLENBQUM7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUV3QixtQ0FBaUI7R0FEekMsZ0JBQWdCLENBNEM1QjtBQTVDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGRwQ29ubmVjdFNlcnZpY2UgfSBmcm9tICcuL2Nvbm5lY3Quc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERkcENsaWVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbm5lY3RTZXJ2aWNlOkRkcENvbm5lY3RTZXJ2aWNlKSB7IH1cblxuICBjYWxsTWV0aG9kKG5hbWU6c3RyaW5nLCBwYXJhbXM/OkFycmF5PGFueT4pOk9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbm5lY3RTZXJ2aWNlLmNvbm5lY3RlZFN0YXR1cykge1xuICAgICAgICB0aGlzLmNvbm5lY3RTZXJ2aWNlLmNsaWVudC5jYWxsKG5hbWUsIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICBlbHNlIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZG93bicpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9ic2VydmUoY29sbGVjdGlvbjpzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBvYnMgPSB0aGlzLmNvbm5lY3RTZXJ2aWNlLmNsaWVudC5vYnNlcnZlKGNvbGxlY3Rpb24pO1xuXG4gICAgICBvYnMuYWRkZWQgPSAoaWQpID0+IHsgb2JzZXJ2ZXIubmV4dCh7c3RhdHVzOiAnYWRkZWQnLCByZWNvcmQ6IHRoaXMuY29ubmVjdFNlcnZpY2UuY2xpZW50LmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dW2lkXX0pfTtcbiAgICAgIG9icy5jaGFuZ2VkID0gKGlkKSA9PiB7IG9ic2VydmVyLm5leHQoe3N0YXR1czogJ2NoYW5nZWQnLCByZWNvcmQ6IHRoaXMuY29ubmVjdFNlcnZpY2UuY2xpZW50LmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dW2lkXX0pfTtcbiAgICAgIG9icy5yZW1vdmVkID0gKGlkKSA9PiB7IG9ic2VydmVyLm5leHQoe3N0YXR1czogJ3JlbW92ZWQnLCByZWNvcmQ6IHsgX2lkOiBpZCB9fSl9O1xuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKG5hbWU6c3RyaW5nLCBjb2xsZWN0aW9uOnN0cmluZywgcGFyYW1zOkFycmF5PGFueT4gPSBbXSk6IE9ic2VydmFibGU8QXJyYXk8T2JqZWN0Pj4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlLCBPYnNlcnZhYmxlLmNyZWF0ZScpO1xuICAgICAgaWYgKCF0aGlzLmNvbm5lY3RTZXJ2aWNlLmNvbm5lY3RlZFN0YXR1cykge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZG93bicpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25uZWN0U2VydmljZS5jbGllbnQuc3Vic2NyaWJlKG5hbWUsIFtdLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdHM6QXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IF9pZCBpbiB0aGlzLmNvbm5lY3RTZXJ2aWNlLmNsaWVudC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXSkge1xuICAgICAgICAgIG9iamVjdHMucHVzaCh0aGlzLmNvbm5lY3RTZXJ2aWNlLmNsaWVudC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXVtfaWRdKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5uZXh0KG9iamVjdHMpO1xuICAgICAgfSk7XG5cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFUlJPUicpO1xuICAgIH0pO1xuICB9XG59Il19