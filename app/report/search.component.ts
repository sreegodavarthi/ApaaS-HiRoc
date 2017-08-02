import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DraggableComponent } from 'ng2-dnd';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReportController } from './report.controller';
declare var $: any;
declare var Bloodhound: any;
declare var Handlebars: any;
declare var d3: any;

@Component({
    selector: 'search',
    templateUrl: '/denali/app/report/search.component.html'
})
export class SearchComponent implements OnInit {
    @ViewChild('continueButton') continueButton: ElementRef
    nameList: any = {};
    seletectedItem: any = { name: '', toc: '' };

    constructor(private router: Router, private reportController: ReportController) {
        let self = this;

        // constructs the suggestion engine
        self.nameList = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'number'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            initialize: false,
            local: self.reportController.nameList
        });

        if (this.reportController.nameList.length == 0) {
            d3.csv("/denali/data/Suppliers.csv", function (data) {
                data.forEach(element => {
                    self.reportController.nameList.push({ "name": element["MKT_TOC_MER_DBA_NM"], "number": element["MKT_TOC"] });
                });


                self.reportController.nameList.sort((obj1, obj2) => obj1.name.toLowerCase().localeCompare(obj2.name.toLowerCase()));

                self.nameList.initialize(); 
            });
        } else { 
            self.nameList.initialize();
        }
    }

    ngAfterContentInit() {
        let self = this;

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

    }


    checkInputKey(event) {
        if (event.keyCode === 13) {
            this.goToReportBuilder(event);
        }
    }

    goToReportBuilder(event) {
        if (this.seletectedItem.number) {
            this.reportController.name = this.seletectedItem.name;
            this.reportController.toc = this.seletectedItem.number;
            this.reportController.reloadFilter = true;

            this.router.navigate(['/builder']);


        }

    }

    ngOnInit() {
        this.continueButton.nativeElement.disabled = true;
    }

}