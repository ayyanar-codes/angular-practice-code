import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.Router-example';
  name:string="";

  constructor(private router:Router){
  
  }

  fnCheckName(){
    console.log(this.name);
  }
  
    fnGoToAbout(){
      this.router.navigateByUrl('about');
    }
  
    fnGoToContactUs(){
      this.router.navigateByUrl('contact-us');
    }
}
