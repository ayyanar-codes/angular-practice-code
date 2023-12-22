import { Component, OnInit } from '@angular/core';
import { User } from 'src/service/user.service';

@Component({
  selector: 'app-child-page2',
  templateUrl: './child-page2.component.html',
  styleUrls: ['./child-page2.component.css']
})
export class ChildPage2Component implements OnInit {

  firstName:string="";
  lastName:string="";
  email:string="";
  city:string="";
  state:string="";
  country:string="";

  constructor(private user:User) { }

  ngOnInit(): void {
    this.firstName=this.user.firstName;
    this.lastName=this.user.lastName;
    this.email=this.user.email;
    this.city=this.user.city;
    this.state=this.user.state;
    this.country=this.user.country;
  }



}
