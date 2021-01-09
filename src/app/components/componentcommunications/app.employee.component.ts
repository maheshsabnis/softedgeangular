import { Component, OnInit } from '@angular/core';
import { Employees } from "./../../models/app.constants";
import { CommunicationService } from "./../../services/app.communication.servce";
@Component({
  selector: 'app-empreceiver-component',
  template: `
    <input type="radio" name='r' (click)="color='red'"/> Red
    <br/>
    <input type="radio" name='r' (click)="color='blue'"/> Blue
    <br/>
    <input type="radio" name='r' (click)="color='yellow'"/> Yellow
    <br/>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th *ngFor="let c of columnHeaders">{{c}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let e of FilterEmployees" [setColor]="color">
        <td *ngFor="let c of columnHeaders">{{e[c]}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class EmployeeReceiverComponent implements OnInit {
  emps = Employees;
  columnHeaders: Array<string>;
  dname:string;
  color: string;
  private filterEmployees: Array<any>;
  constructor(private serv:CommunicationService) {
    this.columnHeaders = new Array<string>();
    this.dname = '';
    this.filterEmployees = new Array<any>();
    this.color = '';
   }

  ngOnInit(): void {

    this.columnHeaders = Object.keys(this.emps[0]);

    // subscribe to the event from the service
    // so that the data emitted by the evnt can be
    // received
    this.serv.notify.subscribe((value:any)=>{
       this.dname = value;
       console.log(`Received DeptName is Empoloyee Receiver Component ${this.dname}`);
    });


  }

    // lets add a readonly property that will filter the data from the emps array and
    //  save it in filterEmployees array
    // this property will be executed for the first ngOnChanges() call
    // at the component
    // for each public property changed in this component this property will be
    // executed asn UI will be updated
  get FilterEmployees (): Array<any> {
    this.filterEmployees = new Array<any>();
    if(this.dname.length > 0) {
      // filter employees based on DeptName
      this.filterEmployees = this.emps.filter((e,i)=>{
        return e.DeptName == this.dname;
      });
    } else {
      // put all employees
      this.filterEmployees = this.emps;
    }
    return this.filterEmployees;
  }
}
