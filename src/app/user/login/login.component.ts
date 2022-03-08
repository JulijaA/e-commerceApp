import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
        `
        em {
            float: right;
            color: #e05c65;
            padding-left: 10px;
            }
        h1 {
            color: black;
            }
        label {
            color: black;
            }
        `
    ]
})
export class LoginComponent implements OnInit {

  userName: any
  password: any
  mouseoverLogin: any
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['products'])

  }
  cancel() {
    this.router.navigate(['products'])
  }

}
