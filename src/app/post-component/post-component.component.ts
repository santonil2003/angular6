import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[];


  constructor(private http: Http) {
    http.get(this.apiUrl)
      .subscribe(
        (response) => {
          this.posts = response.json();
        },
        (errors) => {
          console.log(errors);
        },
        () => {
          console.log("done");
        }
      );
  }

  createPost(postInput: HTMLInputElement) {
    let data = { title: postInput.value };
    this.http.post(this.apiUrl, JSON.stringify(data))
      .subscribe(
        (response) => {
          this.posts.splice(0, 0, { title: postInput.value });

          postInput.value = '';


          //console.log(this.posts);
        }
      );
  }


}
