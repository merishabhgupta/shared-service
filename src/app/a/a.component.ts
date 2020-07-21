import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  inputNumber: number;
  index = 0;
  // get inputNumber(): number {
  //   return this.bridgeService.sharedData;
  // }
  // set inputNumber(value: number) {
  //   this.bridgeService.sharedData = value;
  // }

  constructor(
    private bridgeService: BridgeServiceService
  ) { }

  ngOnInit() {
    
  }

  public sendData() {
    this.index++
    this.bridgeService.setData(this.inputNumber + this.index);
    // this.inputNumber++;
  }

}
