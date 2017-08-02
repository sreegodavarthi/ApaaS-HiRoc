// call API --import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import { ReportFilter, ReportFilterData } from './report-filter';

const constReportFiletDefinitions = '/hiroc/v1/definitions';

@Injectable()
export class ReportService {

    constructor(private http: Http) { }

    getFilterFieldsList(): Observable<ReportFilterData> {
        return this.http.get(constReportFiletDefinitions + '?row_key=HIROC').map((res: Response) => res.json())
            .catch(
            (error: any) => Observable.throw(error || 'Server error')
            );
    }

    sendFilterFieldList(list: ReportFilterData): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(constReportFiletDefinitions, list, headers).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
