import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../reactive-form/username.validators';
import { PasswordValidators } from '../reactive-form/password.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  myForm = new FormGroup({


    account: new FormGroup({
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
    })






  });

  get password() {
    return this.myForm.get('account.password');
  }

  get username() {
    return this.myForm.get('account.username');
  }

  login() {

    if (this.myForm.value.account.username === 'sanil' && this.myForm.value.account.password == 'sanil') {
      alert("welcome sanil");
    } else {
      this.myForm.setErrors({
        invalidLogin: true
      });
    }


  }

}
