import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ReportBuilderComponent } from './report-builder.component'
import { ReportPreviewComponent } from './report-preview.component'

const reportRoutes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'builder', component: ReportBuilderComponent },
    { path: 'preview', component: ReportPreviewComponent }
];

export const ReportRoutingModule = RouterModule.forRoot(reportRoutes);