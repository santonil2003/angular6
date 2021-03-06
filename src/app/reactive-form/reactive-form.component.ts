import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
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

}
