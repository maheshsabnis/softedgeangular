import { Component, OnInit } from '@angular/core';
import {Departments} from './../../models/app.constants';
import {CommunicationService} from './../../services/app.communication.servce';
@Component({
  selector: 'app-deptsender-component',
  template: `
    <table  class="table table-bordered table-striped">
      <tr>
         <td>Select DeptName</td>
         <td>
          <select class="form-control" [(ngModel)]="deptName"
           (change)="selectDepartment()">
            <option *ngFor="let d of departments" value="{{d}}">{{d}}</option>
          </select>
         </td>
      </tr>
    </table>
  `
})
export class DepartmentSenderComponent implements OnInit {
  departments = Departments;
  deptName: string;
  constructor(private serv: CommunicationService) {
    this.deptName = '';
  }

  ngOnInit(): void { }

  selectDepartment(): void {
    this.serv.onReceiveData(this.deptName);
  }
}
