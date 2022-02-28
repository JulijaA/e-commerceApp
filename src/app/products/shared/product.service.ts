import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
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

  saveProduct(product:IProduct):Observable<IProduct> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IProduct>(this.baseUrl + '/api/products', product, options)
    .pipe(catchError(this.handleError<IProduct>('saveProduct' )))
  }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}

// const PRODUCTS:IProduct[] = [
//     {
//       id: 1,
//       name: 'Angular Connect',

//       description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec suscipit orci, ac fringilla erat. Curabitur purus magna, convallis sed faucibus ut, fermentum porta tortor. Sed tempor euismod lorem, sed imperdiet nisi vestibulum at.Mauris mollis facilisis risus, eget mollis tellus gravida nec.',
//       price: 599.99,
//       imageUrl: '/assets/images/angularconnect-shield.png',
//     },
//     {
//       id: 2,
//       name: 'bitola',

//       description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec suscipit orci, ac fringilla erat. Curabitur purus magna, convalor. Mauris ut sodales eros, eu egestas neque. Quisque tincidunt magna et sodales vulputate. Quisque ultricies volutpat tellus et porttitor. Aliquam erat volutpat. Proin euismod ac tellus eu euismod. Aliquam nec congue sem. Mauris mollis facilisis risus, eget mollis tellus gravida nec.',
//       price: 950.00,
//       imageUrl: '/assets/images/ng-nl.png',

//     },
//     {
//       id: 3,
//       name: 'skopje',

//       description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec suscipit orci, ac fringilla erat. Curabitur purus magna, convalliuris ut sodales eros, eu egestas neque. Quisque tincidunt magna et sodales vulputate. Quisque ultricies volutpat tellus et porttitor. Aliquam erat volutpat. Proin euismod ac tellus eu euismod. Aliquam nec congue sem. Mauris mollis facilisis risus, eget mollis tellus gravida nec.',
//       price: 759.00,
//       imageUrl: '/assets/images/ng-conf.png',

//     },
//     {
//       id: 4,
//       name: 'UN Angular Summit',

//       description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec suscipit orci, ac fringilla erat. Curabitur purus magna, convallis sed faucibus ut, fermentum porta tortor. Sed tempor euismod lorem, sed imperdiet nisi vestibulum at. Suspendisse scelerisque urna neque, nec pretium orci venenatis at. Pellentesque feugiat ante sapien,  congue sem. Mauris mollis facilisis risus, eget mollis tellus gravida nec.',
//       price: 800.00,
//       imageUrl: '/assets/images/basic-shield.png',

//     },
//     {
//       id: 5,
//       name: 'ng-vegas',

//       description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec suscipit orci, ac fringilla erat. Curabitur purus magna, convallis sed faucibus ut, fermentum porta tortor. Sed tempor euismod lorem, sed imperdiet nisi vestibulum at. ltricies volutpat tellus et porttitor. Aliquam erat volutpat. Proin euismod ac tellus eu euismod. Aliquam nec congue sem. Mauris mollis facilisis risus, eget mollis tellus gravida nec.',
//       price: 400.00,
//       imageUrl: '/assets/images/ng-vegas.png',

//     }
//   ]
