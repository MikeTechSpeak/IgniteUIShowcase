import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterBondEntity} from '../adapttableblotter/entities/tradeblotterbondentity';

@Component({
    selector: 'app-tradeblotterbond',
    templateUrl: './tradeblotterbond.component.html'
})

export class TradeBlotterBondComponent implements OnInit {

    title = 'Trade Blotter Bond';
    rows: number;
    columns: number;
    tradeblotterbondentities: TradeBlotterBondEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterBond().subscribe(t => {
         this.tradeblotterbondentities = t;
         this.rows = this.tradeblotterbondentities.length;
         this.columns = Object.keys(this.tradeblotterbondentities[0]).length;
        });
    }
}
