import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockmodel } from '../model/stockmodel';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {
    console.log('Stock Service called');
  }
 
  GetStockByTicks(url, ticker:string,start:string,end:string,period:string): Observable<Stockmodel[]> {
    return this.http.get<Stockmodel[]>(url+"/"+ticker+"/"+start+"/"+end+"/"+"/"+period);
  }

  GetGainerLooserStockData(url, ticker:string,period:string): Observable<Stockmodel[]> {
    return this.http.get<Stockmodel[]>(url+"/"+ticker+"/"+"/"+period);
  }
  
  GetStocks(url): Observable<Stockmodel[]> {
    return this.http.get<Stockmodel[]>(url);
  }

  addStock(url,stockmodel: Stockmodel) {  
    return this.http.post(url, stockmodel);  
  }
}
