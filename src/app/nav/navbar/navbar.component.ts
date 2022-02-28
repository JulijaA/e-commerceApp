import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/login/auth.service';
import { ProductService } from 'src/app/products/shared/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  searchText: string = '';
  constructor(public auth:AuthService, private productService:ProductService) { }

  ngOnInit(): void {
  }


}
