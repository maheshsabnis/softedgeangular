import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-component',
  template: `
    <h2>The Shared Component</h2>
    <div>
      This component is loaded using Lazy Loading
    </div>
  `
})
export class SharedComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
