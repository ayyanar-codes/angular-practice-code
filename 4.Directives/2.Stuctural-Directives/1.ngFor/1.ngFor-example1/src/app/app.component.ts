import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.ngFor-example1';

  movies=[
    "Badman",
    "Avengers",
    "Thor",
    "Deadpool",
    "Hulk",
    "Civil War",
  ];

}
