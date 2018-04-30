import {Component, OnInit} from '@angular/core';
import {PriceBlotterCDSIndexEntity} from '../adapttableblotter/entities/priceblottercdsindexentity';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';

@Component({
    selector: 'app-priceblottercdsindex',
    templateUrl: 'priceblottercdxindex.component.html'
})
export class PriceBlotterCDSIndexComponent implements OnInit {

    title = 'Price Blotter CDS Index';
    rows: number;
    columns: number;
    priceblottercdsindexenties: PriceBlotterCDSIndexEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getPriceBlottercdsIndex().subscribe(t => {
         this.priceblottercdsindexenties  = t;
         console.log(this.priceblottercdsindexenties);
         this.rows = this.priceblottercdsindexenties.length;
         this.columns = Object.keys(this.priceblottercdsindexenties[0]).length;
        // this.priceblotterentities.count
        });
    }
}