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
// hold the state of the filters --AC
var core_1 = require('@angular/core');
var report_service_1 = require('./report.service');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var ReportController = (function () {
    function ReportController(reportService) {
        this.reportService = reportService;
        this.nameList = [];
        //this.loadFilters();       
    }
    ReportController.prototype.getAllFilters = function () {
        return this.filters.jsonElement.elements[0].elements;
    };
    ReportController.prototype.setAllFilters = function (filterData) {
        this.filters.jsonElement.elements[0].elements = filterData;
    };
    ReportController.prototype.setFilter = function (filterData) {
        this.filters = filterData;
    };
    ReportController.prototype.submitFilters = function () {
        return this.reportService.sendFilterFieldList(this.filters);
    };
    ReportController.prototype.moveFilterTo = function (from, to) {
    };
    ReportController.prototype.getPromiseForFIlterListLoad = function () {
        var _this = this;
        if (this.reloadFilter) {
            this.reloadFilter = false;
            return this.reportService.getFilterFieldsList();
        }
        else {
            return new Observable_1.Observable(function (subscriber) { return subscriber.next(_this.filters); });
        }
    };
    ReportController.prototype.loadFilters = function () {
        var _this = this;
        this.reportService.getFilterFieldsList().subscribe(function (resp) { return _this.filters = resp; });
    };
    ReportController = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [report_service_1.ReportService])
    ], ReportController);
    return ReportController;
}());
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map