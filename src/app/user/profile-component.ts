import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./profile-component.html",
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px;}
    .error input { background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :-ms-input-placeholder { color: #999;}
  `]
})
export class ProfileComponent implements OnInit{

  constructor(private router:Router, private authService:AuthService) {

  }

  profileForm!: FormGroup;
  private firstName!: FormControl;
  private lastName!: FormControl;
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['products'])
    }
  }
  validateFirstName() {
   return this.firstName.valid || this.firstName.untouched
  }
  validateLastName() {
   return this.lastName.valid || this.lastName.untouched
  }
  cancel() {
    this.router.navigate(['products'])
  }

}