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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var report_controller_1 = require('./report.controller');
var SearchComponent = (function () {
    function SearchComponent(router, reportController) {
        this.router = router;
        this.reportController = reportController;
        this.nameList = {};
        this.seletectedItem = { name: '', toc: '' };
        var self = this;
        // constructs the suggestion engine
        self.nameList = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'number'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            initialize: false,
            local: self.reportController.nameList
        });
        if (this.reportController.nameList.length == 0) {
            d3.csv("/denali/data/Suppliers.csv", function (data) {
                data.forEach(function (element) {
                    self.reportController.nameList.push({ "name": element["MKT_TOC_MER_DBA_NM"], "number": element["MKT_TOC"] });
                });
                self.reportController.nameList.sort(function (obj1, obj2) { return obj1.name.toLowerCase().localeCompare(obj2.name.toLowerCase()); });
                self.nameList.initialize();
            });
        }
        else {
            self.nameList.initialize();
        }
    }
    SearchComponent.prototype.ngAfterContentInit = function () {
        var self = this;
        $('#txtName').typeahead({
            highlight: true,
            hint: false,
        }, {
            name: 'biz-names',
            displayKey: 'name',
            limit: 6,
            source: this.nameList,
            templates: {
                empty: [
                    '<div class="empty-message">',
                    'Unable to find any Business Name or Market TOC from the list',
                    '</div>'
                ].join('\n'),
                suggestion: function (data) {
                    return '<p><span style="text-transform:capitalize">' + data.name + '</span><span style="float:right">' + data.number + '</span></p>';
                }
            }
        });
        $('#txtName').bind('typeahead:select', function (ev, suggestion) {
            self.seletectedItem = suggestion;
            self.continueButton.nativeElement.disabled = false;
        });
    };
    SearchComponent.prototype.checkInputKey = function (event) {
        if (event.keyCode === 13) {
            this.goToReportBuilder(event);
        }
    };
    SearchComponent.prototype.goToReportBuilder = function (event) {
        if (this.seletectedItem.number) {
            this.reportController.name = this.seletectedItem.name;
            this.reportController.toc = this.seletectedItem.number;
            this.reportController.reloadFilter = true;
            this.router.navigate(['/builder']);
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.continueButton.nativeElement.disabled = true;
    };
    __decorate([
        core_1.ViewChild('continueButton'), 
        __metadata('design:type', core_1.ElementRef)
    ], SearchComponent.prototype, "continueButton", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: '/denali/app/report/search.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, report_controller_1.ReportController])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map