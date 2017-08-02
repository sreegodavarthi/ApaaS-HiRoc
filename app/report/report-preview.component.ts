import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportController } from './report.controller';
import { ReportFilter } from './report-filter';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'reportpreview',
    templateUrl: 'denali/app/report/report-preview.component.html'
})
export class ReportPreviewComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    @ViewChild('modalError') modalError: ModalComponent;
    
    submitButtonClass:string = 'btn btn-primary'
    filterList: ReportFilter[];

    constructor(private activatedRoute: ActivatedRoute, private reportController: ReportController, private router: Router) {
        this.filterList = this.reportController.filters.jsonElement.elements[0].elements;
    }


    getSubmitButtonCLass() {
        return this.submitButtonClass;
    }

    ngOnInit() {

    }

    reportSubmit() {
        //this.progressBar.open();
        this.submitButtonClass = 'btn btn-loading';
        this.reportController.submitFilters().subscribe(resp => {
            //this.progressBar.close();
            this.submitButtonClass = 'btn btn-primary';
            if (resp.statusCode === 200) {
                this.modal.open();
            } else {
                this.modalError.open();
            }
        });
        
    }


    reportClose(event) {
        this.modal.close();        
        this.router.navigate(['/search']);
    }
}