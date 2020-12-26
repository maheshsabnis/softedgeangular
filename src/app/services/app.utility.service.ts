import { fromEventPattern } from "rxjs";
import {Injectable} from '@angular/core';

@Injectable()
export class StringUtilitiesService {

   getSetingLength(str:string): number {
     return str.length;
   }

   reverse(str:string): string {
     let result:string='';

     for(let i=str.length-1; i>=0; i--) {
       result += str[i];
     }

     return result;
   }

}
