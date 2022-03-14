import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { IProduct } from './product.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "https://localhost:44356"

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + '/api/products')
    .pipe(catchError(this.handleError<IProduct[]>('getProducts', [])))
  }

  getProduct(id:number):Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/api/products/${id}`)
    .pipe(catchError(this.handleError<IProduct>('getProduct')))
  }

  saveProduct(id: number):Observable<IProduct> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IProduct>(`${this.baseUrl}/api/products`, id,  options)
    .pipe(catchError(this.handleError<IProduct>('saveProduct' )))
  }

  deleteProduct(id: number): Observable<IProduct> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<IProduct>(`${this.baseUrl}/api/products/${id}` ,options)
  .pipe(catchError(this.handleError<IProduct>('deleteProduct' )))
}

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}

