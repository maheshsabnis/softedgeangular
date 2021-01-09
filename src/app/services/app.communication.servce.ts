import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  data: any;
  notify: EventEmitter<any>;


   constructor(){
     this.notify = new EventEmitter<any>();
   }

   // the method that accepts the 'value' parameter
   // this parameter is passed to the eventemitter
   // event emitter will emit the event
   // the subscriber of this event will receive the data
   onReceiveData(value:any): void {
      this.notify.emit(value);
   }
}
