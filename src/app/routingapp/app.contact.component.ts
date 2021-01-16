import { Component, OnInit } from '@angular/core';
// ActivatedRoute, the class that is used to subscribe to the
// route parameter passed in the URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact-component',
  template: `
    <h2>The Contact Component</h2>
    <div class="container">
       <strong> {{message}} </strong>
    </div>
    <a [routerLink]="['child']">Child</a>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class ContactComponent implements OnInit {
  message:string;
  // inject the ActivatedRouute
  // this is resolved by RouterModule
  constructor(private act: ActivatedRoute ) {
    this.message = 'The Contact Component';
   }

  // subscribe to the Route Parameter and Read it
  ngOnInit(): void {
    this.act.params.subscribe((p) => {
      // read the route parameter value
       this.message += `${p.id}`;
    });
  }
}
