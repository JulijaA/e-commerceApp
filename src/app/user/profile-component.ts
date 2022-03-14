import { Component, OnInit } from '@angular/core'

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

  constructor() { }

  ngOnInit() {

  }

}
