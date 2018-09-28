import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../reactive-form/username.validators';
import { PasswordValidators } from '../reactive-form/password.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ], [
        UsernameValidators.shouldBeUnique
      ]),
    password: new FormControl('', [
      Validators.required,
      PasswordValidators.cannotContainSpace
    ])
  });

  get password() {
    return this.myForm.get('password');
  }

  get username() {
    return this.myForm.get('username');
  }

  login() {

    if (this.myForm.value.username === 'sanil' && this.myForm.value.password == 'sanil') {
      alert("welcome sanil");
    } else {
      this.myForm.setErrors({
        invalidLogin: true
      });
    }


  }

}
