import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() value: number;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    //console.log($event.target.value);
    this.change.emit($event);
  }

}
