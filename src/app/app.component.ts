import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  rating = {
    value: 5
  };

  onChange($event) {
    //console.log("APP Component");
    console.log($event);
  }

}
