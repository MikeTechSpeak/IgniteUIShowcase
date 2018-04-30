import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {FTSECloseEntity} from '../adapttableblotter/entities/ftsecloseentity';

@Component({
    selector: 'app-ftseclose',
    templateUrl: './ftseclose.component.html'
})

export class FTSECloseComponent implements OnInit {

    title = 'FTSE Close';
    rows: number;
    columns: number;
    ftsecloseentities: FTSECloseEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getftseclose().subscribe(t => {
         this.ftsecloseentities = t;
         this.rows = this.ftsecloseentities.length;
         this.columns = Object.keys(this.ftsecloseentities[0]).length;
        // this.priceblotterentities.count
        });
    }
}
