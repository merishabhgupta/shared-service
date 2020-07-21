import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeServiceService {
  sharedData: number;
  sharedDataDetectChange: Subject<any> = new Subject<any>();
  constructor() {
    this.sharedDataDetectChange.subscribe((val) => {
      this.sharedData = val;
    })
   }

  // public getData() {
  //   return this.sharedData;
  // }

  public setData(inputValue: number) {
    // this.sharedData = inputValue;
    this.sharedDataDetectChange.next(inputValue)
    console.log(this.sharedData);    
    this.sharedDataDetectChange.subscribe((val) => {
      this.sharedData = val;
    })
  }
}
