
import {Component, OnInit} from '@angular/core';




import { Employee } from "./../../models/app.emp.model";

// importing constants
import {Departments, Designations} from './../../models/app.constants';

@Component({
  selector: 'app-employeeform-component',
  templateUrl:'./app.employeeform.view.html'
})
export class EmployeeFormComponent implements OnInit  {

  emp:Employee;
  employees: Array<Employee>;
  colums:Array<string>;




  // store Departments and Designations locally in the component's publc properties

  departments = Departments;
  designations = Designations;


  constructor(){
    this.emp = new Employee(0,'',0,'', '');
    this.employees = new Array<Employee>();
    this.employees.push(new Employee(101,"Mahesh",10000,'IT', 'Manager'));
    this.employees.push(new Employee(102,"Ajay",12000, 'HR', 'Lead'));
    this.colums = new Array<string>();

  }

  clear():void {
    // re-assign the employee object
    this.emp = new Employee(0,'',0,'','');

  }

  save(): void {
    // read the value of frmEmp posted from UI

    this.employees.push(this.emp);
  }


  // method those will be bound to  Child Component and will receibd data from child component
  getDeptNameFromChild(event:any): void {
    this.emp.DeptName = event;
    console.log(`In parent DeptName ${this.emp.DeptName}`);
  }

  getDesignationFromChild(event:any): void {
    this.emp.Designation = event;
    console.log(`In parent Designation ${this.emp.Designation}`);
  }



ngOnInit(): void {
  this.colums = Object.keys(this.employees[0]);
}
// this method will be called on Click event of the table row
 getSelectedEmp(emp:Employee): void {

 }
}
