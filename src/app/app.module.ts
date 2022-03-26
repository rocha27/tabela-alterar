import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {InputTextModule} from "primeng/inputtext";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {MultiSelectModule} from "primeng/multiselect";
import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {ContextMenuModule} from "primeng/contextmenu";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    ProgressBarModule,
    FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
