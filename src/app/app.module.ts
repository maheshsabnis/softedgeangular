import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import FormsModule for Two-Way binding [(ngModel)]
// ReactiveFormsModule for ReactiveForms
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeReactiveFormComponent } from "./components/app.employeereactiveform.component";


// imports: an array, used to import standard Angular Modules and other custom modules
// declarations: an array, used to declare (instantiate) all Angular components, Custom Directives
// and custom pipes
// providers: an array, a DI container in Angular
// used to define the Angular Services in Depednency Injection Container
// bootstrap: an array, used to bootstrap on or more components (load in browser) in browser
@NgModule({
  declarations: [
    AppComponent, EmployeeReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeReactiveFormComponent]
})
export class AppModule { }
