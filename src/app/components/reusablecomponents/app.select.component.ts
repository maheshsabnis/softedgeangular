import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './app.select.view.html'
})
export class SelectComponent implements OnInit {


  private dataSource: Array<any>;

  @Output() selectedValue: EventEmitter<string>;

  private dataValue: string;
  constructor() {
      this.dataSource = new Array<any>();
      this.selectedValue = new EventEmitter<string>();
      this.dataValue = '';
  }

  // this property will be sued for PROPERTY-BINDING
  // [DataSource]
  @Input()
  set DataSource(value: Array<any>){
    if(value.length > 0) {
      this.dataSource = value;
      console.log(JSON.stringify(value));
    } else {
      this.dataSource = new Array<any>();
    }
  }

  get DataSource(): Array<any> {
    return this.dataSource;
  }

  @Input()
  set DataValue(value: string){
    console.log(`Received Value ${value}`);
     this.dataValue = value;
  }

  get DataValue():string {
    return this.dataValue;
  }


  // write a method that will be used to emit value from child to parent
  // EventEmitter.emit() is used to emit data from child to parent
  onSelectedValue(value: any):void {
    console.log(`Selected Value ${value}`);
      this.selectedValue.emit(value);
  }




  ngOnInit(): void { }

}
