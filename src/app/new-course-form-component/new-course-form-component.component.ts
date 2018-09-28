import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    console.log(topic.value);

    this.topics.push(new FormControl(topic.value))

    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  remove(topic: FormControl) {
    console.log(topic);

    let index = this.topics.controls.indexOf(topic);

    this.topics.removeAt(index);

  }

}
