import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Document } from './document';

@Injectable()
export class SharePlaceService {

    private shareplacedocumentsapiurl = 'api/sharePlaceDocuments';
    constructor(private http: HttpClient) { }

    getDocuments(): Observable<Document[]> {
        return this.http.get<Document[]>(this.shareplacedocumentsapiurl);
    }

}
