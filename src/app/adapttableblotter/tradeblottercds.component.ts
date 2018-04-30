import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterCDSEntity} from '../adapttableblotter/entities/tradeblottercdsentity';

@Component({
    selector: 'app-tradeblottercds',
    templateUrl: './tradeblottercds.component.html'
})

export class TradeBlotterCDSComponent implements OnInit {

    title = 'Trade Blotter CDS';
    rows: number;
    columns: number;
    tradeblottercdsentitities: TradeBlotterCDSEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterCDS().subscribe(t => {
         this.tradeblottercdsentitities = t;
         this.rows = this.tradeblottercdsentitities.length;
         this.columns = Object.keys(this.tradeblottercdsentitities[0]).length;
        });
    }
}
