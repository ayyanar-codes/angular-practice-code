import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private user!:User;
  isValid:boolean=false;

  constructor(private router:Router, user:User){
    this.user=user;
  }

  userForm:FormGroup=new FormGroup({
    firstName:new FormControl('', [Validators.required]),
    lastName:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
    city:new FormControl('', [Validators.required]),
    state:new FormControl('', [Validators.required]),
    country:new FormControl('', [Validators.required])
  });

  fnFormChange(){
    console.log(this.userForm.value);
    this.user.firstName=this.userForm.value.firstName
    this.user.lastName=this.userForm.value.lastName
    this.user.email=this.userForm.value.email
    this.user.city=this.userForm.value.city
    this.user.state=this.userForm.value.state
    this.user.country=this.userForm.value.country

    this.isValid=this.userForm.valid;
  }

  

  fnRedirectToFirstChild(){
    this.router.navigateByUrl('page1');
  }

  fnRedirectToSecondChild(){
    if(this.userForm.valid){
      this.router.navigateByUrl('page2');
    } else{
      alert('Please fill all inputs');
    }
   
  }


}
