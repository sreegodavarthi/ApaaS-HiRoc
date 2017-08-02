import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReportModule } from './report/report.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReportModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent] 
})

export class AppModule { }


