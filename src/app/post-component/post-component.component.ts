
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { retry } from 'rxjs/operators';




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
      (posts) => {
        this.posts = posts;
        //console.log(posts);
      }
    );
  }



  createPost(postInput: HTMLInputElement) {
    let data = { title: postInput.value };
    this.posts.splice(0, 0, data);
    postInput.value = '';

    this.service.create(data)
      .subscribe(
        (newPost) => {
          data['id'] = newPost.id;
          console.log(data);

        },
        (error: Response) => {
          // handle here OR re-throw error
          console.log(error);
          //throw error;

          this.posts.splice(0, 1); // rollback optimistic approach...
        }
      );
  }

  deletePost(post) {

    if (!confirm("Are yu sure?")) {
      return;
    }
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // this.service.delete(post).pipe(retry(4));



    this.service.delete(post).subscribe(
      (response) => {
        console.log("deleted : " + index);
      },
      (error) => {
        this.posts.splice(index, 0, post);
      }
    );

  }

  viewPost(post) {

  }

}
