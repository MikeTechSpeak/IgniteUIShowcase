import { Component, OnInit } from '@angular/core';
import {TradesBlotterService} from '../tradesblotter/tradesblotter.service';
import { TradesBlotterEntity } from '../tradesblotter/tradesblotterentity';
@Component({
  selector: 'app-tradesblotter',
  templateUrl: './tradesblotter.component.html'
})
export class TradesBolotterComponent implements OnInit {
  title = 'Trades Blotter';
  tradesblotters: TradesBlotterEntity[] = [];
  constructor(private tradesBlotterService: TradesBlotterService) { }

  ngOnInit() {
     this.tradesBlotterService.getTradesBlotter().subscribe(t => {
       this.tradesblotters = t;
       console.log(this.tradesblotters);
      });
  }

}
