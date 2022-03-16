import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
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
        height: 400px;
}
    .productSpec {
            margin: 60px;
        }


  `]
})
export class ProductDetailComponent implements OnInit {

  product!: IProduct;
  activatedRoute: any;


  constructor(private productService:ProductService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.data.forEach((data) => {
      this.product = data['product'];
      console.log(this.product = data['product']);
    });

}
  delete(product:IProduct): void {
    this.productService.deleteProduct(product.id).subscribe();
    this.router.navigate(['/products']);
}
}
