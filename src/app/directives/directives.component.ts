import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  items = [1, 2, 3, 4];

  viewMode = 'map';

  courses = [
    { id: 1, name: 'PG1' },
    { id: 2, name: 'PG2' },
    { id: 3, name: 'PG3' },
    { id: 4, name: 'PG4' },
  ];

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.items.push(this.items.length + 1);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  loadCourses() {
    /*simulate as if it was from http response.*/
    this.courses = [
      { id: 1, name: 'PG1' },
      { id: 2, name: 'PG2' },
      { id: 3, name: 'PG3' },
      { id: 4, name: 'PG4' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
