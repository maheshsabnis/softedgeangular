import { Component, OnInit } from '@angular/core';

// Router, class for event based explicit routing
import { Router } from "@angular/router";
import { Employee } from '../models/app.emp.model';

@Component({
  selector: 'app-home-component',
  template: `
    <h2>The Home Component</h2>
    <div class="container">
       <strong> {{message | uppercase}} </strong>
       <br/>
       <strong>Currentcy {{value| currency: 'INR'}}</strong>
       <br/>
       <strong>{{date| date: 'full'}}</strong>
       <br/>
       <strong>{{date| date: 'short'}}</strong>
       <br/>
       <strong>{{date| date: 'dd/MM/yyyy'}}</strong>
       <br/>
       <strong>{{emp| json}}</strong>
    <br/>
       <input type="button" value="go to about" (click)="goToAbout()"/>
       <br/>
       <div>
          <strong>
            Enter Paarmeter Value
          </strong>
          <input type="text" class="form-control"
            [(ngModel)]="value"/>

       </div>
       <br/>
       <input type="button" value="go to contact" (click)="goToContact()"/>
    </div>
  `
})
export class HomeComponent implements OnInit {
  message:string;
  value: number;
  date: Date;
  emp:Employee;
  // inject the router class in the constructor
  // The Router class will be resolved by the RouterModule
  constructor(private router: Router) {
    this.message = 'The Home Component';
    this.value = 0;
    this.emp = new Employee(101, 'Mahesh',12000, 'IT', 'Director')
                // year, month (starts from 0), day
    this.date = new Date(2021,0, 16);
   }

  ngOnInit(): void { }
  goToAbout(): void {
    // navigate to the about component
    this.router.navigate(['/about']);
  }

  goToContact(): void {
    // navigate to the about component
    // also pass the parameter
    this.router.navigate(['/contact', this.value]);
  }
}
