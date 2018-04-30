import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TradesBlotterEntity } from '../tradesblotter/tradesblotterentity';

@Injectable()
export class TradesBlotterService {

    private tradesblottersapiurl = 'api/tradesblotters';
    constructor(private http: HttpClient) { }

    getTradesBlotter (): Observable<TradesBlotterEntity[]> {
        return this.http.get<TradesBlotterEntity[]>(this.tradesblottersapiurl);
      }

}
