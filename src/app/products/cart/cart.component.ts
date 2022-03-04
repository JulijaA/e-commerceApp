import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotal = 0;

  constructor(private cartService:CartService) { }

items = this.cartService.getItems();

  ngOnInit(): void {
    this.getTotal();
 }

  getTotal() {
      this.items.forEach(item => {
        this.cartTotal += item.price;
      })
  }
  removeItem(item:any) {
    this.cartService.removeCartItem(item);
    this.cartTotal -= item.price;
}

}
