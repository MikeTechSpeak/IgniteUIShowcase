import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { VisaStockEntity } from '../visastock/visastockentity';

@Injectable()
export class VisaStockrService {

    private tradesblottersapiurl = 'api/visastocks';
    constructor(private http: HttpClient) { }

    getVisaStocks (): Observable<VisaStockEntity[]> {
        return this.http.get<VisaStockEntity[]>(this.tradesblottersapiurl);
      }

}
