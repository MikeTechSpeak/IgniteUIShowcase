import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {BankingEntity} from '../banking/bankingentity';

@Injectable()
export class BankingService {

    private tradesblottersapiurl = 'api/bankingentities';
    constructor(private http: HttpClient) { }

    getBankingAccounts (): Observable<BankingEntity[]> {
        return this.http.get<BankingEntity[]>(this.tradesblottersapiurl);
      }

}
