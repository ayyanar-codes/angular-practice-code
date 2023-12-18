import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users:User[]=[];

  constructor(private http:HttpClient) {
    this.getUsers().subscribe((response)=>{
      this.users=response;
    });
   }

  ngOnInit(): void {

  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  

}

class User{
  name!:string;
  email!:string;
}
