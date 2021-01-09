# Project Files specifications

1. package.json
Contains all runtime packages and development time packages, that includes
standard angular packages foer runtime and packages for testing at development time
1a. Angular Depedencies at runtime
tslib.js, used for transpilation of TypeScript code into JavaScript and manage the 'polyfills' for browser compatibility
Polyfills, will make sure that the transpiled code is executed across all browsers
1b. zone.js, log the stacktrace and error handling in the browser while the Angular app executes in browser.
1c. rxjs, React Extension for JavaScript, used when the Angular app makes external AJAX calls and want to perform state management.


2. tsconfig.json, its variations tsconfig.app.json, tsconfig.spec.json
tsconfig.json, the TypeScript Configurations for Transpilations, VAriable Declaration Strict Mode and the Module Resolutions using Node.js.
tsconfig.app.json, use the tsconfig.js and load the polyfills to execute code across all browsers and set the entry point for Application's source code tp transpile
tsconfig.spec.json, used to load the Testing Script to test Angular Application.

3. karma.config.js, contains the Testing-Engine Automation to run testscripts

4. angular.json, the file for Build, Production and Testing
============================================================================================================================================
@angular/common/http
- HttpClientModule
  - Provides platform for Http Communication to REST APIs
  - HttpClient
    - Class used to make http requests using following method
      - get<T>() / post<T>() / put<T>() / delete<T>()
        - returns promise(?) object
          - Obaservable<T> is used from 'rxjs'
          - T is a response type expected from the service call
          - Observable is a store wher the responses from external HTTP Calls or other data calls are stored and observbale notified to the client about the data received (Suceess / Failure)
    - Import HttpCLientModule from @angular/common/http in @NgModule inports:[] array
    - Create a Anguar Service (?) class and inject HttpClient in its constructor 
      - What is Angular Service(?)
        - It is class that is decorated with @Injectable() decorator
            - Injectable declrator is a class that contains 'providedIn' property having value as one of from 'root', 'platform', 'any'   
              - The 'root', indicated that the Angular service us injected in root @NgModule of angular application and the service is available for all components /  pipes / directives in the current application (recommended)
              - The 'platform' indicates taht the Angular service is available for all Angular app loaded in browser
              - The 'any' means the Angular Service is available for all JS apps in browser  
            - The service class will be injected with HttpClient class. This injection will be resolved by HttpClientModule
            - Method for HttpClient
              - get<T>() / post<T>() / put<T>() and delete<T>()
            - The HttpHeaders class
              - This is used to pass the JSON data formatting for Post and Put request along with Content-Type 
                e.g. Content-Type: 'application/json'
                      Security values AUTHORIZATION: 'Beares <TOKEN>'    
            - Angular service must be registerd in Depednency INjection Container dsefined by @NgModule using its 'providers' array. Alternatively, you ca also use root/ platform /any value for 'providedIn' property of injectable to register service in DI Container. Use of providedIn is recommended.
            - inject the angular service by using constructor injection in the 
              - Component / Pipe / Directive etc.           

- Use of Angular Services
 1. Used to contains Utility Logic that can be reused by all components / directoves /pipes, etc.
 2. USed to contain logic for Http Calls
 3. Used to maintain the state of the data this is to be sheared across components.
https://www.dotnetcurry.com/angularjs/1445/angular-services-component-communication
 =================================================================================================================================================================

 Angular Component Commucations
 1. Parent-Child relationship across components
  - The Child Component is used as Reusable Component Directive 
  - If a same UI with logic is required at various places in application, make it as Component Directive
  - Facts to be kept in mind for creating component directive
    - The Parent component can pass data to child component. In this case the child component must have @Input decorated public property.
      - This public property will be used by parent component to pass data to child component using PROPERTY-BINDING
      - e.g.
        - @Input() DataSource public property in ChildComponent, then PerneComponent will use this property as
            <ChildComponent [DataSource]="<VALUE-TO-BE-PASSED-FROM-PARENT-COMPONENT>"> 
     - The Child Component can emit data to parent component using Output Decorated EventEmitter property
     - e.g.
            @Output() valueEmitted:EventEmitter<T>, here T is the type of the data to be emitted from child to parent
        - The Parent Component subscribe to the value emitted from child component using Event-Binding
            <ChildComponent [DataSource]="<VALUE-TO-BE-PASSED-FROM-PARENT-COMPONENT>" (valueEmitted)="<METHOD-FROM-PARENT>($event)">
                - $event : is the event data that is send from child component to parent component 
    - Decoupled Communication across components
      -             

 2. Using Angular Services 

=====================================================================================================================================

Angular Single Page App
- Complete The Angular App
  - How to Create Custom Directives?
    - Component Directives
      - UI + Data Binding + Events
      - Reusable Component
    - Attribute Directives
      - ngModel, formGroup, formControlName
      -  Custom Attribute Directive
        - This is used to define Custom Behavior to HTML elements in Angular UI
        - Procedure for Custo Directive
          - Class must decorated with @Directive Decorator
          - For the Attribute Directive, following facts are important
              - Attribute directive is used through "Property-Binding" 
              - The 'selector' property of @Directive Decorator must be using property bindiing syntax
                - @Directive({selector: '[<SELECTOR-NAME>]'})
              - The class must be constructor Injected with 
                - Renderer2 class, used for defining HTML element rendering on which the directive is applied
                - ElementRef, the reference of HTML element on which the directive is applied
              - The Directive must have at-least one '@Input' decorated property that is mapped with the selector      
                - This property will accept value for the custom directve to set its behavior
              - The business logic method(s) that define the logic for directive 
              - The methods those will be executed to activate the directive
                - This method will be decorated with @HostLister('<EVENT-NAME>') class        
                  - EVENT-NAME is the event that will cause the directve to be activated
    - Structurel Directives 
      - *ngFor, *ngIf, etc.
  - How to use Pipes?





Hands-on-Lab

1. Creae a Custom Directive of name [requiredUnique] that will be used to validate the uniqueness of the EmpNo in EmployeeFormComponent. The directive will be applied as follows

<input type="text" formControlName="emp.Empno" [requiredUnique]="true">,

When the value is true for [requiredUnique]="true", then if the EmpNo is already present then change the color of the input element to RED

2. Create a 4 Components as explained below
  - EmployeeComponent --> Will display List of Employees as EmpNo, EmpName, Salary, Designation, DeptNo
  - DepartmentComponent --> Will display list of Departments as DeptNo, DeptName, Location, Salary
  - CReate a SearchComponent, this will have a input element for search.

Bootstrap all 3 components. Whern End-User enters the DeptName in SearchComponent, then the DeptName will have to display in DepartmentComponent and the EmployeeComponent will Display all Employees for the DeptName across all locations. 











