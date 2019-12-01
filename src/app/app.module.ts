import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgModel, FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
