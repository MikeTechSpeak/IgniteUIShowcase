import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {NorthwindOrdersEntity} from '../adapttableblotter/entities/northwindordersentity';

@Component({
    selector: 'app-northwindorders',
    templateUrl: './northwindorders.component.html'
})

export class NorthWindOrdersComponent implements OnInit {

    title = 'NorthWind Orders';
    rows: number;
    columns: number;
    northwindordersentities: NorthwindOrdersEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getNorthwindorders().subscribe(t => {
         this.northwindordersentities = t;
         this.rows = this.northwindordersentities.length;
         this.columns = Object.keys(this.northwindordersentities[0]).length;
        // this.priceblotterentities.count
        });
    }
}
