import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-component',
  template: `
    <h2>The About Component</h2>
    <div class="container">
       <strong> {{message}} </strong>
    </div>
  `
})
export class AboutComponent implements OnInit {
  message:string;
  constructor() {
    this.message = 'The About Component';
   }

  ngOnInit(): void { }
}
