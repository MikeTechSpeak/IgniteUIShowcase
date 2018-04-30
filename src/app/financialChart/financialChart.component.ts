import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FinDataService } from '../shared/finData.service';
import { FinData } from '../shared/interfaces';

// declare var require: any;
// const randomData = require('../shared/finData.json');

@Component({
  // tslint:disable-next-line:component-selector
  // <!-- insert content -->
  // <igx-financial-chart
  //     [dataSource]="finData" >
  // </igx-financial-chart>
  // <!-- end content -->

  template: `
  <table >
  <tr *ngFor="let data of finData">
      <td>{{ data.Open }}</td>
      <td>{{ data.Close }}</td>
      <td>{{ data.High }}</td>
      <td>{{ data.Low }}</td>
      <td>{{ data.TimeStamp }}</td>
      <td>{{ data.Volume }}</td>
  </tr>
</table>
  `,
  styles: [`
    igx-financial-chart {
        width: 100%;
        height: 700px;
    }
`]
})
export class FinChartComponent implements OnInit {
  constructor (private finDataService: FinDataService) { }
  finData: FinData[];

  ngOnInit(): void {
    this.finDataService.getFinData().subscribe(data => this.finData = data);
    console.log(this.finData);
  }
}

