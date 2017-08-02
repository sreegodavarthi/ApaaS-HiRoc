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
var report_filter_1 = require('./report-filter');
var ReportBuilderComponent = (function () {
    function ReportBuilderComponent(activatedRoute, reportController, router) {
        this.activatedRoute = activatedRoute;
        this.reportController = reportController;
        this.router = router;
        this.contButtonClass = 'btn btn-primary';
    }
    ReportBuilderComponent.prototype.ngOnInit = function () {
        var self = this;
        this.name = this.reportController.name;
        this.toc = this.reportController.toc;
        this.filterItem = new report_filter_1.ReportFilter();
        this.filterList = [];
        this.reportController.getPromiseForFIlterListLoad().subscribe(function (resp) {
            self.reportController.setFilter(resp);
            self.filterList = self.reportController.getAllFilters();
            self.filterList.find(function (item) { return item.display.displayName == 'Supplier Name'; }).userInput = self.name;
            self.filterList.find(function (item) { return item.display.displayName == 'Market TOC'; }).userInput = self.toc;
        });
        var trigger = $(".hidden-select-trigger");
        var hiddenMenu = $(".hidden-select-menu li");
        var selectedOpt = '';
        trigger.unbind().on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass("select-open");
        });
        hiddenMenu.unbind().on('click', function () {
            self.selectedOpt = $(this).text();
            self.sortList($(this).attr('data-value'));
            hiddenMenu.removeClass("menu-active");
            $(this).addClass("menu-active");
            $(".hidden-select-trigger span").text(self.selectedOpt);
            $(document).trigger("select-change", [$(this).attr("data-value")]);
        });
        $(document).on("click", function () {
            $("#den-rep-sorting-trigger").removeClass("select-open");
        });
        //TODO:  Use angular2
        $('.report-cards-build .slideUp').removeClass('slideUp');
    };
    ReportBuilderComponent.prototype.sortList = function (orderBy) {
        if (orderBy == 2) {
            this.filterList.sort(function (n1, n2) {
                // First sort by mandatory
                if (n1.display.isMandatory > n2.display.isMandatory)
                    return -1;
                if (n1.display.isMandatory < n2.display.isMandatory)
                    return 1;
                // Then by is set
                if (n1.isSelected > n2.isSelected)
                    return -1;
                if (n1.isSelected < n2.isSelected)
                    return 1;
                // Tehen by id asc
                if (n1.id < n2.id)
                    return -1;
                if (n1.id > n2.id)
                    return 1;
                return 0;
            });
        }
        else if (orderBy == 1) {
            this.filterList.sort(function (n1, n2) {
                if (n1.id < n2.id)
                    return -1;
                if (n1.id > n2.id)
                    return 1;
                return 0;
            });
        }
    };
    ReportBuilderComponent.prototype.preventEnter = function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    };
    ReportBuilderComponent.prototype.showModalFilter = function (data) {
        this.reportModal.updateItem(data);
        this.reportModal.modal.open();
    };
    ReportBuilderComponent.prototype.updateItem = function (data) {
        this.filterList.find(function (c) { return c.id === data.id; }).userInput = data.userInput;
    };
    ReportBuilderComponent.prototype.reportPreview = function (event) {
        var self = this;
        this.contButtonClass = 'btn btn-loading';
        $(".shown,.animate").each(function (index) {
            $(this).removeClass('shown');
            $(this).removeClass('animate');
            var runDelay = (index / 10) + 's';
            this.style.animationDelay = runDelay;
            this.style.WebkitAnimationDelay = runDelay;
            $(this).addClass('animateOut');
        });
        setTimeout(function () {
            self.router.navigate(['/preview']);
        }, 2 * 1000);
    };
    __decorate([
        core_1.ViewChild('templateBuilderModal'), 
        __metadata('design:type', Object)
    ], ReportBuilderComponent.prototype, "reportModal", void 0);
    ReportBuilderComponent = __decorate([
        core_1.Component({
            selector: 'reportbuilder',
            templateUrl: 'denali/app/report/report-builder.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, report_controller_1.ReportController, router_1.Router])
    ], ReportBuilderComponent);
    return ReportBuilderComponent;
}());
exports.ReportBuilderComponent = ReportBuilderComponent;
//# sourceMappingURL=report-builder.component.js.map