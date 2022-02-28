import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../shared/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [`
    .container {
        padding-left: 20px;
        padding-right: 20px;
        color: black;
        }
    .product-image {
        height: 100px;
}


  `]
})
export class ProductDetailComponent implements OnInit {

  product!: IProduct;
  activatedRoute: any;


  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.data.forEach((data) => {
      this.product = data['product'];
    });
}
}
