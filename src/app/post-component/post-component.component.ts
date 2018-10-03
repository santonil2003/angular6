import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {


  posts: any[];


  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response) => {
        this.posts = response.json();
      }
    );
  }



  createPost(postInput: HTMLInputElement) {
    let data = { title: postInput.value };
    this.service.create(data)
      .subscribe(
        (response) => {
          this.posts.splice(0, 0, { title: postInput.value });
          postInput.value = '';
        },
        (error: Response) => {
          // handle here OR re-throw error
          console.log(error);
          //throw error;
        }
      );
  }

  deletePost(post) {
    this.service.delete(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    );
  }

}
