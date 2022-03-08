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
  private userName!: FormControl;
  private password!: FormControl;
  ngOnInit() {
    this.userName = new FormControl(this.authService.currentUser?.userName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.password = new FormControl(this.authService.currentUser?.password, Validators.required);
    this.profileForm = new FormGroup({
      userName: this.userName,
      password: this.password
    })
  }
  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.userName, formValues.password)
      this.router.navigate(['products'])
    }
  }
  validateUserName() {
   return this.userName.valid || this.userName.untouched
  }
  validatePassword() {
   return this.password.valid || this.password.untouched
  }
  cancel() {
    this.router.navigate(['products'])
  }

}
