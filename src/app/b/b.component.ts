import { Component, OnInit, OnChanges } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  // inputNumber: number
  constructor(
    private bridgeService: BridgeServiceService
  ) { 
    // this.inputNumber = bridgeService.sharedData;
  }

  ngOnInit() {
    // this.inputNumber = this.bridgeService.getData();
    // console.log(this.inputNumber);
    
  }
  get inputNumber(): number {
    return this.bridgeService.sharedData;
  }

}
