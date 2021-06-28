import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:IProduct[]= [];
  url:string='assets/api/product/product.json'

  constructor(private _httpClient:HttpClient){
  }

  getAllProduct():Observable<IProduct[]>{
    return  this._httpClient.get<IProduct[]>(this.url)
            .pipe(
                tap((data)=>{
                    console.log(data)
                }),
              catchError(this.handleError)
            );
  }

  getProductById(_ProductID:number):Observable<IProduct[]>{
    return  this._httpClient.get<IProduct[]>(this.url)
    .pipe(
        tap((data)=>{
          this.product = this.product.filter(data => data.ProductId === _ProductID);
        }),
      catchError(this.handleError)
    );
}


  handleError(err:HttpErrorResponse){
    return throwError(err.message || 'Server Error');
  }

}
