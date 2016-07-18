"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_log_data_1 = require('./mock-log-data');
var core_1 = require('@angular/core');
var LogsService = (function () {
    function LogsService() {
    }
    LogsService.prototype.getLogs = function () {
        return Promise.resolve(mock_log_data_1.LOGS);
    };
    LogsService.prototype.getLog = function (id) {
        return this.getLogs().then(function (logs) { return logs.filter(function (log) { return log.id === id; })[0]; });
    };
    LogsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LogsService);
    return LogsService;
}());
exports.LogsService = LogsService;
//# sourceMappingURL=logs-service.js.map