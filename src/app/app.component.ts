import { Component, OnInit } from '@angular/core';
// importing type
import { Employee } from "./models/app.emp.model";
// selector: the custom HTML element that will be used to refer the COmponent in
// other component's HTML or on index.html

// templateUrl: the property that contains the HTML file whihc is UI of the component (external HTML file)
// template: inline HTML template (not-recommended)

// styleUrls: external CSS files for RICH styles for HTML elements
// style: inline CSS (not-recommended)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'my-ng-app';
  message:string;
  url:string;
  characters:Array<string>;
  emps:Array<any>;
  name:string;
  toggle:boolean;
  selectedCharacter:string;
  employess: Array<Employee>;
  colums:Array<string>;
  constructor(){
    this.message = "The First Angular Component!!!!";
    this.url = "https://www.devcurry.com";
    this.name ='';
    this.selectedCharacter = "";
    this.characters = new Array<string>();
    this.characters.push('James Bond');
    this.characters.push('Ethan Hunt');
    this.characters.push('Jason Bourn');
    this.characters.push('Indiana Jones');

    this.emps = new Array<any>();
    this.emps.push({EmpNo:101,EmpName:'A'});
    this.emps.push({EmpNo:102,EmpName:'B'});
    this.emps.push({EmpNo:103,EmpName:'C'});

    this.toggle  =false;
    this.employess = new Array<Employee>();
    this.employess.push(new Employee(101,"Mahesh",10000,'IT','Manager'));
    this.employess.push(new Employee(102,"Ajay",12000, 'HR', 'Lead'));

    this.colums = new Array<string>();

  }

  // the method will be immediately invoked after constructor
  // use ngOnInit to write heavy load logic that cannot be
  // written in the constructor
  ngOnInit():void {
      // read propeties of employees array from its 0th record
      // using Object.keys()

      this.colums = Object.keys(this.employess[0]);

  }


  display(): void {
    this.message = "The Button is Clicked....";
  }
  receiveValueFromEvent(event:any):void {
    // collect the data from event
    alert(`button is clicked ${event.target.value}`);
  }

  toggleValue(): void {
    if(!this.toggle) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

}
