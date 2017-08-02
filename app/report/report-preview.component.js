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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var ReportPreviewComponent = (function () {
    function ReportPreviewComponent(activatedRoute, reportController, router) {
        this.activatedRoute = activatedRoute;
        this.reportController = reportController;
        this.router = router;
        this.submitButtonClass = 'btn btn-primary';
        this.filterList = this.reportController.filters.jsonElement.elements[0].elements;
    }
    ReportPreviewComponent.prototype.getSubmitButtonCLass = function () {
        return this.submitButtonClass;
    };
    ReportPreviewComponent.prototype.ngOnInit = function () {
    };
    ReportPreviewComponent.prototype.reportSubmit = function () {
        var _this = this;
        //this.progressBar.open();
        this.submitButtonClass = 'btn btn-loading';
        this.reportController.submitFilters().subscribe(function (resp) {
            //this.progressBar.close();
            _this.submitButtonClass = 'btn btn-primary';
            if (resp.statusCode === 200) {
                _this.modal.open();
            }
            else {
                _this.modalError.open();
            }
        });
    };
    ReportPreviewComponent.prototype.reportClose = function (event) {
        this.modal.close();
        this.router.navigate(['/search']);
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ReportPreviewComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChild('modalError'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ReportPreviewComponent.prototype, "modalError", void 0);
    ReportPreviewComponent = __decorate([
        core_1.Component({
            selector: 'reportpreview',
            templateUrl: 'denali/app/report/report-preview.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, report_controller_1.ReportController, router_1.Router])
    ], ReportPreviewComponent);
    return ReportPreviewComponent;
}());
exports.ReportPreviewComponent = ReportPreviewComponent;
//# sourceMappingURL=report-preview.component.js.map