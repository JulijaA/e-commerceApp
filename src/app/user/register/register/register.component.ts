import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  invalidRegister!: boolean
  userName!:string;
  password!:string;
  city!:string;
  postalCode!:string;
  address!:string;
  constructor(private route:Router, private http:HttpClient) {}
  ngOnInit(): void {

  }
    register(form: NgForm) {
    const credentials ={
       'userName': form.value.userName,
       'password': form.value.password,
       'city': form.value.city,
       'postalCode': form.value.postalCode,
       'address': form.value.address,
    }
this.http.post('https://localhost:44356/api/Account/register', credentials)
.subscribe(response => {
  const token = (<any>response).token;
  localStorage.setItem("jwt", token);
  this.invalidRegister = false;
  this.route.navigate(['/products']);
}, _err => {
  console.log(_err);

  this.invalidRegister = true;
})

  }
cancel() {
    this.route.navigate(['products'])
  }
}
