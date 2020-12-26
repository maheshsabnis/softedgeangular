
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

// import the custom validator

import { CustomValidator } from "./app.custom.validator";

import { Employee } from "./../models/app.emp.model";

// importing constants
import {Departments, Designations} from './../models/app.constants';

@Component({
  selector: 'app-employeereactiveform-component',
  templateUrl:'./app.employeereactiveform.view.html'
})
export class EmployeeReactiveFormComponent implements OnInit  {

  emp:Employee;
  employees: Array<Employee>;
  colums:Array<string>;


  frmEmp: FormGroup;

  // store Departments and Designations locally in the component's publc properties

  departments = Departments;
  designations = Designations;


  constructor(){
    this.emp = new Employee(0,'',0,'', '');
    this.employees = new Array<Employee>();
    this.employees.push(new Employee(101,"Mahesh",10000,'IT', 'Manager'));
    this.employees.push(new Employee(102,"Ajay",12000, 'HR', 'Lead'));
    this.colums = new Array<string>();

    // instantiate the frmEmp and pass the employee model properties to it
    // using FormControl. Keep 'key' as same as the property name bind to it
    // bind formEmp to [formGroup] attribute directive <form> tag
    // bind key to formControlName attribute directive of HTML UI elements
    // Validator.compose() will accept the validation rules
    this.frmEmp = new FormGroup({
        EmpNo : new FormControl(this.emp.EmpNo,
           Validators.compose([
              Validators.required, // required
              Validators.maxLength(5), // maxlength
              Validators.minLength(2), // minlength
              Validators.pattern('[0-9]+'), // must be numeric
              CustomValidator.CheckEven // the customvalidator
            ])),
        EmpName: new FormControl(this.emp.EmpName),
        Salary: new FormControl(this.emp.Salary),
        DeptName: new FormControl(this.emp.DeptName),
        Designation:  new FormControl(this.emp.Designation)
    });

  }



  clear():void {
    // re-assign the employee object
    this.emp = new Employee(0,'',0,'','');
    // pass the resetted emp object to frmEmp
    this.frmEmp.setValue(this.emp);
  }

  save(): void {
    // read the value of frmEmp posted from UI
    this.emp = this.frmEmp.value;
    this.employees.push(this.emp);
  }


ngOnInit(): void {
  this.colums = Object.keys(this.employees[0]);
}
// this method will be called on Click event of the table row
 getSelectedEmp(emp:Employee): void {
  this.frmEmp.setValue(emp);
 }
}
