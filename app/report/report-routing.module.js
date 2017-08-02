"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./search.component');
var report_builder_component_1 = require('./report-builder.component');
var report_preview_component_1 = require('./report-preview.component');
var reportRoutes = [
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'builder', component: report_builder_component_1.ReportBuilderComponent },
    { path: 'preview', component: report_preview_component_1.ReportPreviewComponent }
];
exports.ReportRoutingModule = router_1.RouterModule.forRoot(reportRoutes);
//# sourceMappingURL=report-routing.module.js.map