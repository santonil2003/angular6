import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  @Input('isActive') isActive: boolean;
  @Input('count') count: number;

  constructor() {
    if (!this.count) {
      this.count = 0;
    }
  }

  ngOnInit() {
  }

  like() {
    this.count++;
  }

}
