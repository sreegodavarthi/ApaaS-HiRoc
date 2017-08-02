import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportDnDPanelComponent } from './report-dnd.component'
import { ActivatedRoute, Router } from '@angular/router';
import { ReportController } from './report.controller';
import { ReportFilter } from './report-filter';
declare var $: any;

@Component({
    selector: 'reportbuilder',
    templateUrl: 'denali/app/report/report-builder.component.html'
})
export class ReportBuilderComponent implements OnInit {
    @ViewChild('templateBuilderModal') reportModal: any;
    name: string;
    toc: string;
    filterList: Array<ReportFilter>;
    filterItem: ReportFilter;
    selectedOpt: string;

    contButtonClass: string = 'btn btn-primary'

    constructor(private activatedRoute: ActivatedRoute, private reportController: ReportController, private router: Router) {

    }


    ngOnInit() {
        let self = this;

        this.name = this.reportController.name;
        this.toc = this.reportController.toc;
        this.filterItem = new ReportFilter();
        this.filterList = [];


        this.reportController.getPromiseForFIlterListLoad().subscribe(resp => {
            self.reportController.setFilter(resp);

            self.filterList = self.reportController.getAllFilters();

            self.filterList.find(item => item.display.displayName == 'Supplier Name').userInput = self.name;
            self.filterList.find(item => item.display.displayName == 'Market TOC').userInput = self.toc;
        }
        );

        var trigger = $(".hidden-select-trigger");
        var hiddenMenu = $(".hidden-select-menu li");
        var selectedOpt = '';

        trigger.unbind().on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass("select-open");
        });

        hiddenMenu.unbind().on('click', function () {
            self.selectedOpt = $(this).text();
            self.sortList($(this).attr('data-value'))
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

    }

    sortList(orderBy: number) {
        if (orderBy == 2) {
            this.filterList.sort((n1, n2) => {
                // First sort by mandatory
                if (n1.display.isMandatory > n2.display.isMandatory) return -1;
                if (n1.display.isMandatory < n2.display.isMandatory) return 1;
                // Then by is set
                if (n1.isSelected > n2.isSelected) return -1;
                if (n1.isSelected < n2.isSelected) return 1;
                // Tehen by id asc
                if (n1.id < n2.id) return -1;
                if (n1.id > n2.id) return 1;

                return 0;
            }
            );
        }
        else if (orderBy == 1) {
            this.filterList.sort((n1, n2) => {
                if (n1.id < n2.id) return -1;
                if (n1.id > n2.id) return 1;

                return 0;
            }
            );
        }
    }

    preventEnter(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    }

    showModalFilter(data: ReportFilter) {
        this.reportModal.updateItem(data);
        this.reportModal.modal.open();
    }

    updateItem(data: ReportFilter) {
        this.filterList.find(c => c.id === data.id).userInput = data.userInput;
    }

    reportPreview(event) {
        let self = this;
        this.contButtonClass = 'btn btn-loading';

        $(".shown,.animate").each(function (index) {
            $(this).removeClass('shown');
            $(this).removeClass('animate');
            let runDelay = (index / 10) + 's';
            this.style.animationDelay = runDelay;
            this.style.WebkitAnimationDelay = runDelay;

            $(this).addClass('animateOut')
        });


        setTimeout(function () {
            self.router.navigate(['/preview']);
        }, 2 * 1000);

    }

}