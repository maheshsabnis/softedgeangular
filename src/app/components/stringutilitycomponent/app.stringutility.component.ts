import { Component, OnInit } from '@angular/core';
import {StringUtilitiesService} from './../../services/app.utility.service';
@Component({
  selector: 'app-stringutilities-component',
  template: `
     <h2>The String Utility Angular Service</h2>
     <div class="container">
       <strong>{{message}}</strong>
     </div>
     <br/>
     <div class="container">
       Length of {{message}} = {{length}}
     </div>
     <br/>
     <div class="container">
       Reverse of {{message}} = {{result}}
     </div>


  `
})
export class StringUtilityComponent implements OnInit {
  message: string;
  length:number;
  result:string;
  // the constructor injection
  constructor(private serv: StringUtilitiesService) {
    this.message = 'The String Utility Angular Service';
    this.length = 0;
    this.result = '';
  }

  ngOnInit(): void {
    this.length = this.serv.getSetingLength(this.message);
    this.result = this.serv.reverse(this.message);

   }
}
