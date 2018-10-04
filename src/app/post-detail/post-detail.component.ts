import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post;

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {

    /*

    this.postId = +this.route.snapshot.paramMap.get('id');
    this.nextId = this.postId + 1;
  */

    this.route.paramMap.subscribe(
      (params) => {

        let id = +params.get('id');

        this.service.get({ id: id }).subscribe(
          (post) => {
            this.post = post;
          }
        );
      }
    )
  }

}
