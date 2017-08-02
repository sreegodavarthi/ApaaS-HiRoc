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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_dnd_1 = require('ng2-dnd');
var search_component_1 = require('./search.component');
var report_builder_component_1 = require('./report-builder.component');
var report_preview_component_1 = require('./report-preview.component');
var report_dnd_component_1 = require('./report-dnd.component');
var report_modal_companent_1 = require('./report-modal.companent');
var report_routing_module_1 = require('./report-routing.module');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var http_1 = require('@angular/http');
var report_controller_1 = require('./report.controller');
var report_service_1 = require('./report.service');
var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                report_routing_module_1.ReportRoutingModule,
                ng2_dnd_1.DndModule.forRoot(),
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                http_1.HttpModule
            ],
            declarations: [
                search_component_1.SearchComponent,
                report_builder_component_1.ReportBuilderComponent,
                report_preview_component_1.ReportPreviewComponent,
                report_dnd_component_1.ReportDnDPanelComponent,
                report_modal_companent_1.ReportModalComponent
            ],
            providers: [
                report_controller_1.ReportController,
                report_service_1.ReportService
            ],
            bootstrap: [search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportModule);
    return ReportModule;
}());
exports.ReportModule = ReportModule;
//# sourceMappingURL=report.module.js.map