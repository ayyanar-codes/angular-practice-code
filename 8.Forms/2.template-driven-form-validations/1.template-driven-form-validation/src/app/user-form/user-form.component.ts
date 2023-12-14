import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  user!:User;

  ngOnInit(): void {

    this.user={
      firstName:'Ayyyanar',
      lastName:'A',
      email:'ayanarya@outlook.com',
      gender:'male',
      isMarried:true
    }

  }

  fnSubmit(form:Form){
    console.log(form);
  }

}

class User{
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  isMarried!:boolean;
}
