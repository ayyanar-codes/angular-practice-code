import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Console } from 'console';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users:User[]=[];

  constructor(private http:HttpClient) {
    this.getUsers().subscribe((response)=>{
      this.users=response;
    });
   }

  userForm=new FormGroup({
    name:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }


  fnSubmit(){
    this.addUser().subscribe((response)=>{
      this.users.push(response);
    });
  }

  addUser(){
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
      name:this.userForm.value.name,
      email:this.userForm.value.email
    });
  }

}

class User{
  name!:string;
  email!:string;
}
