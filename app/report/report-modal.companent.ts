import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReportFilter } from './report-filter';

@Component({
    selector: 'report-modal',
    templateUrl: 'denali/app/report/report-modal.companent.html'
})
export class ReportModalComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    @Input() item: ReportFilter = new ReportFilter();
    @ViewChild('inputMin') inputMin: ElementRef;
    @ViewChild('inputMax') inputMax: ElementRef;
    @ViewChild('inputValue') inputValue: ElementRef;
    @Output() onClose = new EventEmitter<ReportFilter>();
    @ViewChild('submitButton') submitButton: ElementRef;

    constructor() { }

    close() {
        if (this.item.dataCategory === 'Range') {
            this.item.userInput = this.inputMin.nativeElement.value + "," + this.inputMax.nativeElement.value;
            this.item['minValue'] = this.inputMin.nativeElement.value;
            this.item['maxValue'] = this.inputMax.nativeElement.value;
            if (this.item.userInput == ',') {
                this.item.userInput = '';
            }
            this.item.showRangeDiv = true;
        } else if (this.item.dataCategory === 'Primitive') {
            let clenRegExp = /(\binsert\b)|(\bwhere\b)|(\bselect\b)|(\bfrom\b)/gi

            this.item.userInput = this.inputValue.nativeElement.value.replace(clenRegExp, '');
            this.item['inputValue'] = this.item.userInput;
            this.item.showPrimitiveDiv = true;
        }

        this.item.isSelected = 'true';
        this.onClose.emit(this.item);
        this.modal.close();
    };

    getPlacholderMin() {
        return "Min";
    }

    getPlacholderMax() {
        return "Max";
    }

    getPlacholderInput() {
        return "";
    }

    validateInput(event) {
        if (this.item.dataCategory === 'Range') {
            const pattern = /^(\d?)+(\.)?\d{0,2}$/;
            let inputChar = String.fromCharCode(event.charCode);
            let strTxt = event.target.value.slice(0, event.target.selectionStart) + inputChar + event.target.value.slice(event.target.selectionEnd);
            if (!(strTxt).match(pattern)) {
                event.preventDefault();
            }
        }
    }

    validateRange(event) {
        if (this.item.dataCategory === 'Range') {
            let minVal = "";
            let maxVal = "";
            if (this.inputMin.nativeElement == event.target) {
                minVal = event.target.value;
                maxVal = this.inputMax.nativeElement.value;
            } else {
                minVal = this.inputMin.nativeElement.value;
                maxVal = event.target.value;
            }


            if (parseFloat(maxVal.replace(',', '')) < parseFloat(minVal.replace(',', ''))
                || (minVal == "" && maxVal == "" && this.item.userInput == '')
                || (minVal != "" && isNaN(parseFloat(minVal.replace(',', ''))))
                || (maxVal != "" && isNaN(parseFloat(maxVal.replace(',', ''))))
            ) {
                this.submitButton.nativeElement.disabled = true;
            } else {
                this.submitButton.nativeElement.disabled = false;
            }
        } else if (this.item.dataCategory === 'Primitive') {
            let val = this.inputValue.nativeElement.value;
            if(val === "" && this.item.userInput == ''){
                this.submitButton.nativeElement.disabled = true;
            }
            else{
                this.submitButton.nativeElement.disabled = false;
            }
            
        }
    }

    updateItem(filterItem: ReportFilter) {
        this.inputMin.nativeElement.value = "";
        this.inputMax.nativeElement.value = "";
        this.inputValue.nativeElement.value = "";

        if (filterItem.dataCategory === 'Range') {
            if (filterItem.userInput.length > 0) {
                this.inputMin.nativeElement.value = filterItem['minValue'];
                this.inputMax.nativeElement.value = filterItem['maxValue'];
                this.submitButton.nativeElement.disabled = false;
            } else {
                this.submitButton.nativeElement.disabled = true;
            }
        } else if (filterItem.dataCategory === 'Primitive') {
            if (filterItem.userInput.length > 0) {
                this.inputValue.nativeElement.value = filterItem['inputValue'];
                 this.submitButton.nativeElement.disabled = false;
            }
            else{
                 this.submitButton.nativeElement.disabled = true;
            }
           
        }
        this.item = filterItem;
        this.item.userInput = filterItem.userInput.split(',').join(', ');
        console.log(this.item.userInput);
    }

    public open() {

        this.modal.open();
    }

    ngOnInit() {

        this.item.showRangeDiv = false;
        this.item.showPrimitiveDiv = false;
    }
}