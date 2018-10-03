
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'List of Courses';
  colSpan = 2;
  isActive = true;
  bgColor = 'red';

  courses;

  email = '';

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onSave($event) {
    console.log($event);
  }

  onEnter($event) {
    this.title = $event.target.value;
    //alert($event.target.value);
  }

  templateVar(value) {
    this.title = value;
  }


  onEmailKeyUp() {
    console.log(this.title);
  }


  ngOnInit() {
  }

}
