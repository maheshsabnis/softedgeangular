import { ChildComponent } from './routingapp/app.child.component';
import { MainComponent } from './routingapp/app.main.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { AboutComponent } from './routingapp/app.about.component';
import { EmployeeReceiverComponent } from './components/componentcommunications/app.employee.component';
import { DepartmentSenderComponent } from './components/componentcommunications/app.department.component';
import { EmployeeFormComponent } from './components/employeeformcomponent/app.employeeform.component';
import { SelectComponent } from './components/reusablecomponents/app.select.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// imporitng HttpClientModule to resolve the HttpClient
import {HttpClientModule} from '@angular/common/http';


// import FormsModule for Two-Way binding [(ngModel)]
// ReactiveFormsModule for ReactiveForms
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeReactiveFormComponent } from "./components/app.employeereactiveform.component";
import {StringUtilityComponent} from './components/stringutilitycomponent/app.stringutility.component';
import {HttpServiceComponent} from './components/httpservicecomponent/app.httpservice.component';
// import the service
import {StringUtilitiesService} from './services/app.utility.service';

// importing the directive
import { ColorDirective  } from "./directives/app.color.directive";
import { HomeComponent } from './routingapp/app.home.component';


// imports: an array, used to import standard Angular Modules and other custom modules
// declarations: an array, used to declare (instantiate) all Angular components, Custom Directives
// and custom pipes
// providers: an array, a DI container in Angular
// used to define the Angular Services in Depednency Injection Container
// bootstrap: an array, used to bootstrap on or more components (load in browser) in browser
@NgModule({
  declarations: [
    AppComponent, EmployeeReactiveFormComponent, StringUtilityComponent,
    HttpServiceComponent, SelectComponent, EmployeeFormComponent,
    DepartmentSenderComponent,EmployeeReceiverComponent,ColorDirective,
    HomeComponent, AboutComponent, ContactComponent, MainComponent,
     ChildComponent

  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  // register the service in DI COntainer
  providers: [StringUtilitiesService],
  bootstrap: [ MainComponent]
})
export class AppModule { }
