import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ExchangeResponse } from '../models/exchange-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ExchangeService {
  constructor(private http: HttpClient) { }

  getExchange(inputCurrency: string, outputCurrency: string): Observable<number> {
    const exchangeEndPoint: string = `http://localhost:8080/latest?base=${inputCurrency}&symbols=${outputCurrency}`;
    return this.http.get<ExchangeResponse>(exchangeEndPoint)
    .pipe(
      map((response) => response.rates[outputCurrency]),
      catchError(this.handleError<number>('exchange', 0))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       console.error(error); // todo: use service to actually log
      return of(result as T);
    };
  }
}
