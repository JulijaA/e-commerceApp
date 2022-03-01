import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']

})
export class CreateProductComponent implements OnInit {

  isDirty:boolean = true;
  newProduct: any
  constructor(private router: Router, private productService:ProductService,  public fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  saveProduct(formValues: any) {
    this.productService.saveProduct(formValues).subscribe(() => {

      this.isDirty = false;
      this.router.navigate(['/products']);
    })

  }
  cancel() {
    this.router.navigate(['/products']);
  }

}
