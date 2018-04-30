import { Component, OnInit } from '@angular/core';
import { VisaStockEntity } from '../visastock/visastockentity';
import {VisaStockrService} from '../visastock/visastock.service';
@Component({
  selector: 'app-visastock',
  templateUrl: './visastock.component.html'
})
export class VisaStockComponent implements OnInit {
  title = 'Visa Stocks';
  visaStockEntities: VisaStockEntity[] = [];
  constructor(private visaStockService: VisaStockrService) { }

  ngOnInit() {
     this.visaStockService.getVisaStocks().subscribe(t => {
       this.visaStockEntities = t;
       console.log(this.visaStockEntities);
      });
  }
}
