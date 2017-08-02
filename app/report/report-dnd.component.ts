import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ReportFilter } from './report-filter';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
declare var $: any;
const docElem: any = window.document.documentElement;

interface IOptions {
    // Minimum and a maximum duration of the animation (random value is chosen)
    minDuration: number;
    maxDuration: number;
    // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
    // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
    // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
    viewportFactor: number;
}

@Component({
    selector: 'report-dnd',
    templateUrl: 'denali/app/report/report-dnd.component.html'
})
export class ReportDnDPanelComponent implements OnInit {

    @Input() modal: any;
    @Input() item: ReportFilter;
    @ViewChild('tooltipIcon') tooltipIcon: ElementRef;
    @ViewChild('tooltipIcon2') tooltipIcon2: ElementRef;
    @ViewChild('dndElement') dndElement: ElementRef;
    @Output() onShowPopup = new EventEmitter<boolean>();
    isReadOnly: boolean = false;

    @Input() itemsRenderedCount: number = 0;
    constructor() {
    }

    options: IOptions = { maxDuration: 1, minDuration: 0.5, viewportFactor: 0 };


    @HostListener('window:scroll', ['$event'])
    showAnimation(event) {
        let self = this;
        if (!$(this.dndElement.nativeElement).hasClass('shown') && !$(this.dndElement.nativeElement).hasClass('animate') && this.inViewport(this.dndElement.nativeElement, this.options.viewportFactor)) {
            setTimeout(function () {
                var perspY = self.scrollY() + self.getViewportH() / 2;
                self.dndElement.nativeElement.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.perspectiveOrigin = '50% ' + perspY + 'px';

                window.removeEventListener('scroll', self.showAnimation);

                if (self.options.minDuration && self.options.maxDuration) {
                    let randDuration = (Math.random() * (self.options.maxDuration - self.options.minDuration) + self.options.minDuration) + 's';
                    self.dndElement.nativeElement.style.WebkitAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.MozAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.animationDuration = randDuration;
                }
                $(self.dndElement.nativeElement).addClass('animate');
                setTimeout(function () {
                    //remove animation class after it is shown
                    $(self.dndElement.nativeElement).removeClass('animate');
                    $(self.dndElement.nativeElement).addClass('shown');

                    let runDelay = (self.itemsRenderedCount / 10) + 's';
                    self.dndElement.nativeElement.style.animationDelay = runDelay;
                    self.dndElement.nativeElement.style.WebkitAnimationDelay = runDelay;
                    
                }, self.options.maxDuration * 1000)
            }, 25);
        }
    }


    scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];

        if (client < inner)
            return inner;
        else
            return client;
    }

    // http://stackoverflow.com/a/5598797/989439
    getOffset(el) {
        var offsetTop = 0, offsetLeft = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while (el = el.offsetParent)

        return {
            top: offsetTop,
            left: offsetLeft
        }
    }

    inViewport(el, h) {
        var elH = el.offsetHeight,
            scrolled = this.scrollY(),
            viewed = scrolled + this.getViewportH(),
            elTop = this.getOffset(el).top,
            elBottom = elTop + elH,
            h = h || 0;

        return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
    }

    changeSelected() {
        if (this.item.display.isMandatory === 'false') {
            this.item.isSelected = this.item.isSelected == 'true' ? 'false' : 'true';
            if (this.item.isSelected === 'false') {
                this.item.userInput = '';
            }
        }
    }


    getSelectionClass(item: ReportFilter) {
        if (item.display.isMandatory === 'true') {
            return 'sprite-mandatory-check';
        } else if (item.isSelected === 'true') {
            return 'sprite-data-selected';
        } else if (item.isSelected != 'true') {
            return 'sprite-data-unselected';
        }
    }

    getFilterClass(item: ReportFilter) {
        if (item.isFilter === 'N') {
            this.isReadOnly = true;
            if (item.userInput.length != 0) {
                return 'sprite-filter-enabled grayout';
            } else {
                return 'sprite-filter-unused grayout';
            }
        }
        else if (item.isFilter === 'Y') {
            if (item.userInput.length != 0) {
                return 'sprite-filter-enabled';
            } else {
                return 'sprite-filter-unused';
            }
        }
        else if (item.isFilter === 'DNE') {
            this.isReadOnly = true;
            return 'sprite-filter-enabled grayout';
        }
    }

    openFilter(item) {
        if (!this.isReadOnly) {
            this.onShowPopup.emit(item);
        }
    }

    ngOnInit() {

        let self = this;

        $(this.tooltipIcon.nativeElement).popover({
            placement: 'top',
            trigger: 'hover',
            // html:true,
            container: 'body',
            //content:'<span style="background-color:white;color:black;padding:8px;">' +this.item.display.description + '</span>'
            content: this.item.display.description

        })

        $(this.tooltipIcon2.nativeElement).popover({
            placement: 'top',
            //content:'This is a mandatory field and cannot be unselected',
            content: this.item.display.isMandatory === 'true' ? 'This is a mandatory field and cannot be unselected' : '',
            trigger: 'hover',
            container: 'body'
        })

        if (this.inViewport(this.dndElement.nativeElement, this.options.viewportFactor)) {
            setTimeout(function () {
                var perspY = self.scrollY() + self.getViewportH() / 2;
                self.dndElement.nativeElement.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                self.dndElement.nativeElement.style.perspectiveOrigin = '50% ' + perspY + 'px';

                window.removeEventListener('scroll', self.showAnimation);

                if (self.options.minDuration && self.options.maxDuration) {
                    let randDuration = self.options.minDuration + 's';
                    self.dndElement.nativeElement.style.WebkitAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.MozAnimationDuration = randDuration;
                    self.dndElement.nativeElement.style.animationDuration = randDuration;

                    let runDelay = (self.itemsRenderedCount / 10) + 's';
                    self.dndElement.nativeElement.style.animationDelay = runDelay;
                    self.dndElement.nativeElement.style.WebkitAnimationDelay = runDelay;
                }
                $(self.dndElement.nativeElement).addClass('animate');
                setTimeout(function () {
                    //remove animation class after it is shown
                    $(self.dndElement.nativeElement).removeClass('animate');
                    $(self.dndElement.nativeElement).addClass('shown');
                }, (self.options.maxDuration + self.itemsRenderedCount / 10) * 1000)
            }, 25); 
        }
    }

}