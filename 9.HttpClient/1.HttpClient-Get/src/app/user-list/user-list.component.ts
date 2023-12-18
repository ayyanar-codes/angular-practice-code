import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]=[];

  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
   this.getUsers().subscribe((response)=>{
    this.users=response;
   });
  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}

class User{
  name!:string;
}
