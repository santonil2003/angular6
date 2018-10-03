import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class PostService extends DataService {

  constructor(http: Http) {
    super(http, 'https://jsonplaceholder.typicode.com/posts')
  }

}
