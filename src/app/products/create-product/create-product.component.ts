import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']

})
export class CreateProductComponent implements OnInit {

  isDirty:boolean = true;
  product!: IProduct;
  submitted: boolean = false;


  constructor(private router: Router, private productService:ProductService) { }

  ngOnInit(): void {
  }

  saveProduct(form: NgForm) {
    this.productService.saveProduct(form.value).subscribe((res) => {
      console.log(res);
      this.isDirty = false;
      this.router.navigate(['/products']);
    })

  }
  cancel() {
    this.router.navigate(['/products']);
  }

}
