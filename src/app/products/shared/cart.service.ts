import { Injectable } from '@angular/core';
import { IProduct } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {


items: IProduct[] = [];

addToCart(product: IProduct) {
  this.items.push(product)
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items
}
removeCartItem(product: any){
    this.items.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.items.splice(index,1);
      }
    })
  }

}
