import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.ngOnchanges-example1';
  titles:string[]=[];
  disableHeading:boolean=false;

  addTitle(){
    this.titles.push(this.title);
    console.log(this.titles);
  }

}
