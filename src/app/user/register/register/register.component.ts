import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: any;
  password: any;
  city: any;
  postalCode: any;
  address: any;
  mouseoverLogin: any
  constructor(private router:Router, private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  register(formValues: NgForm) {
    this.registerService.registerUser(formValues.value.userName, formValues.value.password, formValues.value.city, formValues.value.postalCode, formValues.value.address);
    this.router.navigate(['products'])
  }
    cancel() {
      this.router.navigate(['products'])
  }
}
