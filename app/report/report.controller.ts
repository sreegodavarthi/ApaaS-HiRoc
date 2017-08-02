// hold the state of the filters --AC
import { Injectable } from '@angular/core';
import { ReportFilter, ReportFilterData } from './report-filter';
import { MockFilters } from './report-filters.mock';
import { ReportService } from './report.service';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class ReportController {

    filters: ReportFilterData;
    name: string;
    toc: string;
    reloadFilter: boolean;

    nameList: any[] = [];

    constructor(private reportService: ReportService) {
        //this.loadFilters();       
    }




    getAllFilters(): Array<ReportFilter> {
        return this.filters.jsonElement.elements[0].elements;
    }

    setAllFilters(filterData: Array<ReportFilter>) {
        this.filters.jsonElement.elements[0].elements = filterData;
    }

    setFilter(filterData: ReportFilterData) {
        this.filters = filterData;
    }

    submitFilters(): Observable<any> {
        return this.reportService.sendFilterFieldList(this.filters);
    }

    moveFilterTo(from: number, to: number): any {
    }

    getPromiseForFIlterListLoad(): Observable<ReportFilterData> {
        if (this.reloadFilter) {
            this.reloadFilter = false;
            return this.reportService.getFilterFieldsList();
        } else {
            return new Observable<ReportFilterData>((subscriber: Subscriber<ReportFilterData>) => subscriber.next(this.filters));
        }
    }


    private loadFilters() {
        this.reportService.getFilterFieldsList().subscribe(
            resp => this.filters = resp
        );
    }
} 