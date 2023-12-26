import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string="";
  age:number=0;
  email:string="";
  city:string="";
  country:string="";
  iCount:number=0;

  fnSave(){
    const user={
      name:this.name,
      age:this.age,
      email:this.email,
      city:this.city,
      country:this.country,
    }

    this.iCount++;

    localStorage.setItem('userData'+this.iCount, JSON.stringify(user));

    this.name="";
    this.age=0;
    this.email="";
    this.city="";
    this.country="";

  }



}
