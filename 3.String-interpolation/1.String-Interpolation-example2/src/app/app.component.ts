import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  color='red';
  iclickCount:number=0;
 
  fnNotify(){
    this.iclickCount++;
    //alert(`Number of clicks: ${this.iclickCount}`)
  }


}
