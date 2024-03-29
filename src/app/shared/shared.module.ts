import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule, ModalModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule,
    CalendarModule,
    MDBBootstrapModule.forRoot(),
    ModalModule,
    WavesModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule,
    CalendarModule ,
    MDBBootstrapModule,
    WavesModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
