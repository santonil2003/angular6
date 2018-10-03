import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return ['c++', 'nodjs', 'PHP', 'VB', 'c#', 'java'];
  }
}
