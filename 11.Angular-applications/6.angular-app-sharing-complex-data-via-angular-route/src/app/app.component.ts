import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4.angular-app';
  Name:string="";
  parentAge:number=0;

  childName:string="";

  constructor(private router:Router, private userservice:UserService){}

  fnOnChildNameChange(event:string){
    this.childName=event;
  }

  fnFirstChild(){
    this.router.navigate(['childOne']);
  }

  fnSecondChild(){
    this.userservice.setParentName('Michael');
    this.userservice.setParentAge(30);
    this.router.navigateByUrl('childTwo');
  }

}
