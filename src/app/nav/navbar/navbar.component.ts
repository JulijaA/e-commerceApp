import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


   token!: string

  constructor(private jwtHelper: JwtHelperService, private router:Router) { }

 isUserAuthenticated() {
  const token: string | null = localStorage.getItem('jwt');
   if(token && !this.jwtHelper.isTokenExpired(token)) {
     return true;
   } else {
     return false;
   }
 }
 logOut() {
   localStorage.removeItem('jwt')
 }

  ngOnInit(): void {


  }

}

