import {Component, OnInit} from '@angular/core';
import {PriceBlotterCommodityEntity} from '../adapttableblotter/entities/priceblottercommodityentity';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';

@Component({
    selector: 'app-priceblottercommodity',
    templateUrl: './priceblottercommodity.component.html'
})
export class PriceBlotterCommodityComponent implements OnInit {

    title = 'Price Blotter Commodity';
    rows: number;
    columns: number;
    priceblottercommodityentities: PriceBlotterCommodityEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getPriceBlotterCommodity().subscribe(t => {
         this.priceblottercommodityentities  = t;
         console.log(this.priceblottercommodityentities);
         this.rows = this.priceblottercommodityentities.length;
         this.columns = Object.keys(this.priceblottercommodityentities[0]).length;
        // this.priceblotterentities.count
        });
    }
}
