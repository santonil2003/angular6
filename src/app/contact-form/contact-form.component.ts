import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  contactMethods = [
    { id: 1, name: 'Sanil' },
    { id: 2, name: 'Anil' },
    { id: 3, name: 'Nil' },
    { id: 4, name: 'Samuel' },
    { id: 5, name: 'Amuel' },
    { id: 6, name: 'Muel' },
  ];

  constructor() { }

  ngOnInit() {
  }

  log(e) {
    console.log(e);
  }

  submitForm(form) {
    console.log(form.value)
  }

}
