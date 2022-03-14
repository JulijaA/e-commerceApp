import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  invalidLogin!: boolean;
  userName!: string;
  password!:string;
  mouseoverLogin: any
  constructor(private route: Router, private http:HttpClient) {}

  login(form: NgForm) {
    const credentials ={
       'userName': form.value.userName,
       'password': form.value.password,
    }
  this.http.post('https://localhost:44356/api/Account/login', credentials)
    .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.route.navigate(['/products']);
  }, _err => {
      this.invalidLogin = true;
  })

  }

  ngOnInit(): void {

}
   cancel() {
    this.route.navigate(['products'])
  }
}


