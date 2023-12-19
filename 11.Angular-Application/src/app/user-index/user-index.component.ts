import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/User.Model'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  users:UserModel[]=[];
  user!:UserModel;
  
  constructor(private http:HttpClient, private router:Router) {
    this.getUsers().subscribe((responses)=>{
      for(let res of responses){
        this.users.push(new UserModel(res.id, res.name, res.username,res.email, res.phone, res.website));
      }
    });
   }

  ngOnInit(): void {}

  getUsers(){
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  fnAddNew(){
    this.router.navigate(['/new',0, '', '', '','','','']); //this.router.navigateByUrl('new/');
  }

  fnEdit(id:number){
    let user=this.users.find(function(user){return user.id==id;});
    this.router.navigate(['/new',id, user?.name, user?.username, user?.email,user?.phone,user?.website,'edit']);
  }

  fnDetail(id:number){
    let user=this.users.find(function(user){return user.id==id;});
    this.router.navigate(['/new',id, user?.name, user?.username, user?.email,user?.phone,user?.website,'detail']);
  }

  fnDelete(id:number){
    let user=this.users.find(function(user){return user.id==id;});
    this.router.navigate(['/new',id, user?.name, user?.username, user?.email,user?.phone,user?.website,'delete']);
  }
}


