import { AbstractControl } from "@angular/forms";

export class CustomValidator {
   // if the value is valid method returns null
   // else it returs the JSON object
   // with vaidation error as true
   static CheckEven(ctrl: AbstractControl): any {
     // read the value of the control
      let val:number = parseInt(ctrl.value);
      if(val % 2 === 0) {
        return null; // valid
      } else {
        return {odd:true}; // invalid
      }
   }
}
