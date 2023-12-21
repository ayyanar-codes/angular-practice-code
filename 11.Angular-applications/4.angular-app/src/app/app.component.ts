import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4.angular-app';
  Name:string="";

  childName:string="";

  fnOnChildNameChange(event:string){
    this.childName=event;
  }
}
