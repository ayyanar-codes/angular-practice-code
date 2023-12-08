import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.ngFor-example1';

  movies=[
    {title:"Avengers", director:"Marvel",cast:"Robert Dowent Jr"},
    {title:"Thor", director:"Marvel",cast:"Chris Hemsworth"},
    {title:"Deadpool", director:"Marvel",cast:"Ryan Reynolds"},
    {title:"Hulk", director:"Marvel",cast:"Edward Norton"},
    {title:"Civil War", director:"Marvel",cast:"Chris Evans"},
  ];

}
