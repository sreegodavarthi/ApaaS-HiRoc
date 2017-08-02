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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var report_filter_1 = require('./report-filter');
var ReportModalComponent = (function () {
    function ReportModalComponent() {
        this.item = new report_filter_1.ReportFilter();
        this.onClose = new core_1.EventEmitter();
    }
    ReportModalComponent.prototype.close = function () {
        if (this.item.dataCategory === 'Range') {
            this.item.userInput = this.inputMin.nativeElement.value + "," + this.inputMax.nativeElement.value;
            this.item['minValue'] = this.inputMin.nativeElement.value;
            this.item['maxValue'] = this.inputMax.nativeElement.value;
            if (this.item.userInput == ',') {
                this.item.userInput = '';
            }
            this.item.showRangeDiv = true;
        }
        else if (this.item.dataCategory === 'Primitive') {
            var clenRegExp = /(\binsert\b)|(\bwhere\b)|(\bselect\b)|(\bfrom\b)/gi;
            this.item.userInput = this.inputValue.nativeElement.value.replace(clenRegExp, '');
            this.item['inputValue'] = this.item.userInput;
            this.item.showPrimitiveDiv = true;
        }
        this.item.isSelected = 'true';
        this.onClose.emit(this.item);
        this.modal.close();
    };
    ;
    ReportModalComponent.prototype.getPlacholderMin = function () {
        return "Min";
    };
    ReportModalComponent.prototype.getPlacholderMax = function () {
        return "Max";
    };
    ReportModalComponent.prototype.getPlacholderInput = function () {
        return "";
    };
    ReportModalComponent.prototype.validateInput = function (event) {
        if (this.item.dataCategory === 'Range') {
            var pattern = /^(\d?)+(\.)?\d{0,2}$/;
            var inputChar = String.fromCharCode(event.charCode);
            var strTxt = event.target.value.slice(0, event.target.selectionStart) + inputChar + event.target.value.slice(event.target.selectionEnd);
            if (!(strTxt).match(pattern)) {
                event.preventDefault();
            }
        }
    };
    ReportModalComponent.prototype.validateRange = function (event) {
        if (this.item.dataCategory === 'Range') {
            var minVal = "";
            var maxVal = "";
            if (this.inputMin.nativeElement == event.target) {
                minVal = event.target.value;
                maxVal = this.inputMax.nativeElement.value;
            }
            else {
                minVal = this.inputMin.nativeElement.value;
                maxVal = event.target.value;
            }
            if (parseFloat(maxVal.replace(',', '')) < parseFloat(minVal.replace(',', ''))
                || (minVal == "" && maxVal == "" && this.item.userInput == '')
                || (minVal != "" && isNaN(parseFloat(minVal.replace(',', ''))))
                || (maxVal != "" && isNaN(parseFloat(maxVal.replace(',', ''))))) {
                this.submitButton.nativeElement.disabled = true;
            }
            else {
                this.submitButton.nativeElement.disabled = false;
            }
        }
        else if (this.item.dataCategory === 'Primitive') {
            var val = this.inputValue.nativeElement.value;
            if (val === "" && this.item.userInput == '') {
                this.submitButton.nativeElement.disabled = true;
            }
            else {
                this.submitButton.nativeElement.disabled = false;
            }
        }
    };
    ReportModalComponent.prototype.updateItem = function (filterItem) {
        this.inputMin.nativeElement.value = "";
        this.inputMax.nativeElement.value = "";
        this.inputValue.nativeElement.value = "";
        if (filterItem.dataCategory === 'Range') {
            if (filterItem.userInput.length > 0) {
                this.inputMin.nativeElement.value = filterItem['minValue'];
                this.inputMax.nativeElement.value = filterItem['maxValue'];
                this.submitButton.nativeElement.disabled = false;
            }
            else {
                this.submitButton.nativeElement.disabled = true;
            }
        }
        else if (filterItem.dataCategory === 'Primitive') {
            if (filterItem.userInput.length > 0) {
                this.inputValue.nativeElement.value = filterItem['inputValue'];
                this.submitButton.nativeElement.disabled = false;
            }
            else {
                this.submitButton.nativeElement.disabled = true;
            }
        }
        this.item = filterItem;
        this.item.userInput = filterItem.userInput.split(',').join(', ');
        console.log(this.item.userInput);
    };
    ReportModalComponent.prototype.open = function () {
        this.modal.open();
    };
    ReportModalComponent.prototype.ngOnInit = function () {
        this.item.showRangeDiv = false;
        this.item.showPrimitiveDiv = false;
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ReportModalComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', report_filter_1.ReportFilter)
    ], ReportModalComponent.prototype, "item", void 0);
    __decorate([
        core_1.ViewChild('inputMin'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportModalComponent.prototype, "inputMin", void 0);
    __decorate([
        core_1.ViewChild('inputMax'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportModalComponent.prototype, "inputMax", void 0);
    __decorate([
        core_1.ViewChild('inputValue'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportModalComponent.prototype, "inputValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReportModalComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.ViewChild('submitButton'), 
        __metadata('design:type', core_1.ElementRef)
    ], ReportModalComponent.prototype, "submitButton", void 0);
    ReportModalComponent = __decorate([
        core_1.Component({
            selector: 'report-modal',
            templateUrl: 'denali/app/report/report-modal.companent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ReportModalComponent);
    return ReportModalComponent;
}());
exports.ReportModalComponent = ReportModalComponent;
//# sourceMappingURL=report-modal.companent.js.map