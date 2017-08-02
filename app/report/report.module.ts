import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';

import { SearchComponent } from './search.component';
import { ReportBuilderComponent } from './report-builder.component'
import { ReportPreviewComponent } from './report-preview.component'
import { ReportDnDPanelComponent } from './report-dnd.component'
import { ReportModalComponent } from './report-modal.companent'

import { ReportRoutingModule } from './report-routing.module'

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';

import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@NgModule({
    imports: [
        BrowserModule,
        ReportRoutingModule,
        DndModule.forRoot(),
        Ng2Bs3ModalModule,
        HttpModule
    ],

    declarations: [
        SearchComponent,
        ReportBuilderComponent,
        ReportPreviewComponent,
        ReportDnDPanelComponent,
        ReportModalComponent
    ],

    providers: [
        ReportController,
        ReportService
    ],

    bootstrap: [SearchComponent]
})

export class ReportModule { }