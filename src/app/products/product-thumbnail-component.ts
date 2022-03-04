import { Component, Input } from "@angular/core";
import { CartService } from "./shared/cart.service";
import { IProduct } from "./shared/product.model";

@Component({
    selector: 'product-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{product?.name | uppercase}}</h2>

        <div class="productSpec"><strong>Gender:</strong> {{product?.gender.name}}
        </div>
        <div class="productSpec"><strong>Quantity:</strong> {{product?.quantity}}
        </div>
        <div class="productSpec"><strong>Model:</strong> {{product?.model}}
        </div>

        <div class="productSpec"><strong>Price:</strong> {{product?.price | currency:'USD'}}</div>

        <div>
          <button class="btn btn-primary" (click)="addToCart(product)">Add to cart</button>
          <button class="btn" [routerLink]="['/products', product.id]">View Detail</button></div>

    </div>
    `,
    styles: [
        `
        .thumbnail {
            height: 310px;
            background-color: white;
        }
        h2 {
            color: black;
        }
        .productSpec {
            margin: 15px;
        }

        .btn {
          margin-top: 10px;
        }
        .btn:hover {
        background-color: #1f547a;
        }
        .btn:focus {
        background-color: #1f547a;
        }
        .well div {
            color: black;
        }
        .image-position {
          border: 1px solid black;
        }
        `
    ]

})

export class ProductThumbnailComponent {
   @Input() product:any

   constructor(private cartService:CartService) {

   }
   ngOnInit() {

   }

   addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart')


   }

}
