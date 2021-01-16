import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <h1>The Angular Routing Application</h1>
    <table class="table table-bordered table-striped">
      <tbody>
        <tr>
          <td>
            <a [routerLink]="['']">Home</a>
          </td>
          <td>
            <a [routerLink]="['about']">About</a>
          </td>
          <td>
            <a [routerLink]="['contact']">Contact</a>
          </td>
          <td>
            <a [routerLink]="['lazy']">Lazy</a>
          </td>
        </tr>
        </tbody>
    </table>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
