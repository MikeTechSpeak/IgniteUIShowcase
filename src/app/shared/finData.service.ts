import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError} from 'rxjs/operators';
import { FinData } from './interfaces';

@Injectable()
export class FinDataService {
    constructor(private http: HttpClient, private error: HttpErrorResponse) {
    }

    getFinData(): Observable<FinData[]> {
      return this.http.get('./data.json')
        .pipe(
          map((finDataPoint: FinData[]) => { finDataPoint['TimeStamp'] = new Date(finDataPoint['TimeStamp']);
                        return finDataPoint; }),
          catchError(this.handleError)
        );
    }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Servefr error');
  }

}
