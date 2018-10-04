import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, combineLatest, observable} from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {


    /*
    example to illustrate, how to subscribe to multiple url params and then use it's value to subscribe observable..
    */
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(
      (combinedParams)=>{
        console.log("combined params");
        console.log(combinedParams);
        return this.service.getAll();
      }
    )).subscribe(
      (posts)=>{
        console.log(posts);
      }
    );

    /*
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(
      (combinedParams)=>{
        console.log("Combined");
        //console.log(combinedParams);
        console.log(combinedParams[0].get('id'));

        console.log(combinedParams[1].get('page'));
      }
    );
    */

   /*
    // get param
    this.route.paramMap.subscribe(
      (param)=>{
        console.log("param map");
        console.log(param);
      }
    );

    // get query param
    this.route.queryParamMap.subscribe(
      (param)=>{
        console.log("query Param");
        console.log(param.get('page'));
      }
    )
    */


  }

}
