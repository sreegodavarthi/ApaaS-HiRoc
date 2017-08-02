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
var report_filter_1 = require('./report-filter');
var docElem = window.document.documentElement;
var ReportDnDPanelComponent = (function () {
    function ReportDnDPanelComponent() {
        this.onShowPopup = new core_1.EventEmitter();
        this.isReadOnly = false;
        this.itemsRenderedCount = 0;
        this.options = { maxDuration: 1, minDuration: 0.5, viewportFactor: 0 };
    }
    ReportDnDPanelComponent.prototype.showAnimation = function (event) {
        var self = this;
        if (!$(this.dndElement.nativeElement).hasClass('shown') && !$(this.dndElement.nativeElement).hasClass('animate') && this.inViewport(this.dndElement.nativeElement, this.options.viewportFactor)) {
            setTimeout(function () {
                var perspY = self.scrollY() + self.getViewportH() / 2;
                self.dndElement.nativeElement.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.perspectiveOrigin = '50% ' + perspY + 'px';
                window.removeEventListener('scroll', self.showAnimation);
                if (self.options.minDuration && self.options.maxDuration) {
                    var randDuration = (Math.random() * (self.options.maxDuration - self.options.minDuration) + self.options.minDuration) + 's';
                    self.dndElement.nativeElement.style.WebkitAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.MozAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.animationDuration = randDuration;
                }
                $(self.dndElement.nativeElement).addClass('animate');
                setTimeout(function () {
                    //remove animation class after it is shown
                    $(self.dndElement.nativeElement).removeClass('animate');
                    $(self.dndElement.nativeElement).addClass('shown');
                    var runDelay = (self.itemsRenderedCount / 10) + 's';
                    self.dndElement.nativeElement.style.animationDelay = runDelay;
                    self.dndElement.nativeElement.style.WebkitAnimationDelay = runDelay;
                }, self.options.maxDuration * 1000);
            }, 25);
        }
    };
    ReportDnDPanelComponent.prototype.scrollY = function () {
        return window.pageYOffset || docElem.scrollTop;
    };
    ReportDnDPanelComponent.prototype.getViewportH = function () {
        var client = docElem['clientHeight'], inner = window['innerHeight'];
        if (client < inner)
            return inner;
        else
            return client;
    };
    // http://stackoverflow.com/a/5598797/989439
    ReportDnDPanelComponent.prototype.getOffset = function (el) {
        var offsetTop = 0, offsetLeft = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while (el = el.offsetParent);
        return {
            top: offsetTop,
            left: offsetLeft
        };
    };
    ReportDnDPanelComponent.prototype.inViewport = function (el, h) {
        var elH = el.offsetHeight, scrolled = this.scrollY(), viewed = scrolled + this.getViewportH(), elTop = this.getOffset(el).top, elBottom = elTop + elH, h = h || 0;
        return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
    };
    ReportDnDPanelComponent.prototype.changeSelected = function () {
        if (this.item.display.isMandatory === 'false') {
            this.item.isSelected = this.item.isSelected == 'true' ? 'false' : 'true';
            if (this.item.isSelected === 'false') {
                this.item.userInput = '';
            }
        }
    };
    ReportDnDPanelComponent.prototype.getSelectionClass = function (item) {
        if (item.display.isMandatory === 'true') {
            return 'sprite-mandatory-check';
        }
        else if (item.isSelected === 'true') {
            return 'sprite-data-selected';
        }
        else if (item.isSelected != 'true') {
            return 'sprite-data-unselected';
        }
    };
    ReportDnDPanelComponent.prototype.getFilterClass = function (item) {
        if (item.isFilter === 'N') {
            this.isReadOnly = true;
            if (item.userInput.length != 0) {
                return 'sprite-filter-enabled grayout';
            }
            else {
                return 'sprite-filter-unused grayout';
            }
        }
        else if (item.isFilter === 'Y') {
            if (item.userInput.length != 0) {
                return 'sprite-filter-enabled';
            }
            else {
                return 'sprite-filter-unused';
            }
        }
        else if (item.isFilter === 'DNE') {
            this.isReadOnly = true;
            return 'sprite-filter-enabled grayout';
        }
    };
    ReportDnDPanelComponent.prototype.openFilter = function (item) {
        if (!this.isReadOnly) {
            this.onShowPopup.emit(item);
        }
    };
    ReportDnDPanelComponent.prototype.ngOnInit = function () {
        var self = this;
        $(this.tooltipIcon.nativeElement).popover({
            placement: 'top',
            trigger: 'hover',
            // html:true,
            container: 'body',
            //content:'<span style="background-color:white;color:black;padding:8px;">' +this.item.display.description + '</span>'
            content: this.item.display.description
        });
        $(this.tooltipIcon2.nativeElement).popover({
            placement: 'top',
            //content:'This is a mandatory field and cannot be unselected',
            content: this.item.display.isMandatory === 'true' ? 'This is a mandatory field and cannot be unselected' : '',
            trigger: 'hover',
            container: 'body'
        });
        if (this.inViewport(this.dndElement.nativeElement, this.options.viewportFactor)) {
            setTimeout(function () {
                var perspY = self.scrollY() + self.getViewportH() / 2;
                self.dndElement.nativeElement.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.perspectiveOrigin = '50% ' + perspY + 'px';
                window.removeEventListener('scroll', self.showAnimation);
                if (self.options.minDuration && self.options.maxDuration) {
                    var randDuration = self.options.minDuration + 's';
                    self.dndElement.nativeElement.style.WebkitAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.MozAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.animationDuration = randDuration;
                    var runDelay = (self.itemsRenderedCount / 10) + 's';
                    self.dndElement.nativeElement.style.animationDelay = runDelay;
                    self.dndElement.nativeElement.style.WebkitAnimationDelay = runDelay;
                }
                $(self.dndElement.nativeElement).addClass('animate');
                setTimeout(function () {
                    //remove animation class after it is shown
                    $(self.dndElement.nativeElement).removeClass('animate');
                    $(self.dndElement.nativeElement).addClass('shown');
                }, (self.options.maxDuration + self.itemsRenderedCount / 10) * 1000);
            }, 25);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReportDnDPanelComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', report_filter_1.ReportFilter)
    ], ReportDnDPanelComponent.prototype, "item", void 0);
    __decorate([
        core_1.ViewChild('tooltipIcon'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportDnDPanelComponent.prototype, "tooltipIcon", void 0);
    __decorate([
        core_1.ViewChild('tooltipIcon2'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportDnDPanelComponent.prototype, "tooltipIcon2", void 0);
    __decorate([
        core_1.ViewChild('dndElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportDnDPanelComponent.prototype, "dndElement", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReportDnDPanelComponent.prototype, "onShowPopup", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReportDnDPanelComponent.prototype, "itemsRenderedCount", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ReportDnDPanelComponent.prototype, "showAnimation", null);
    ReportDnDPanelComponent = __decorate([
        core_1.Component({
            selector: 'report-dnd',
            templateUrl: 'denali/app/report/report-dnd.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ReportDnDPanelComponent);
    return ReportDnDPanelComponent;
}());
exports.ReportDnDPanelComponent = ReportDnDPanelComponent;
//# sourceMappingURL=report-dnd.component.js.map