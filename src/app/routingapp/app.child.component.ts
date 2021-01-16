import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-compoonent',
  template: `
    <h2>The Child Component</h2>
    <div class="container">
       <strong> {{message}} </strong>
    </div>
  `
})
export class ChildComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Child Component";
  }

  ngOnInit(): void { }
}
