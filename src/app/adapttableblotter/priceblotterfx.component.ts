import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {PriceBlotterFxEntity} from '../adapttableblotter/entities/priceblotterfxentity';

@Component({
    selector: 'app-priceblotterfx',
    templateUrl: './priceblotterfx.component.html'
})

export class PriceBlotterFxComponent implements OnInit {

    title = 'Price Blotter FX';
    rows: number;
    columns: number;
    priceblotterfxentities: PriceBlotterFxEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getPriceBlotterFx().subscribe(t => {
         this.priceblotterfxentities = t;
         console.log(this.priceblotterfxentities);
         this.rows = this.priceblotterfxentities.length;
         this.columns = Object.keys(this.priceblotterfxentities[0]).length;
        });
    }
}
