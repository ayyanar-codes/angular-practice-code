import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/User.Model'; 
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  id:number=0;
 
  users:UserModel[]=[];
  user!:UserModel;
  disableInputs:boolean=false;

  userForm:FormGroup=new FormGroup({  
    id:new FormControl(),
    name:new FormControl({value:'rahul@gmail.com', disabled:true}, Validators.required),   //this.user?.name, Validators.required
    username:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    phone:new FormControl(),
    website:new FormControl(),
  });

  constructor(private httpClient:HttpClient, private router:Router, private activatedRout:ActivatedRoute) {
    let id =this.activatedRout.snapshot.params['id'];
    let name =this.activatedRout.snapshot.params['name'];
    let username =this.activatedRout.snapshot.params['username'];
    let email =this.activatedRout.snapshot.params['email'];
    let phone =this.activatedRout.snapshot.params['phone'];
    let website =this.activatedRout.snapshot.params['website']; 
    let action =this.activatedRout.snapshot.params['action'];
    this.user=new UserModel(id,name,username,email, phone,website);
    this.disableInputs=(action=='detail' || action=='delete')?true:false;



   }

  ngOnInit(): void {
     
  }

 

  fnGetUsers(){
    this.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }

  fnSave(){
    console.log(this.userForm.value);
    
    this.addUser().subscribe((response)=>{
      this.users.push(response);
      this.router.navigateByUrl('');
    });
  }

  getUsers(){
    return this.httpClient.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  addUser(){
    this.user=new UserModel(
      this.userForm.value.id
     ,this.userForm.value.name
     ,this.userForm.value.username
     ,this.userForm.value.email
     ,this.userForm.value.phone
     ,this.userForm.value.website
     );

   return this.httpClient.post<UserModel>('https://jsonplaceholder.typicode.com/users', {
     id:this.user.id, name:this.user.name, username:this.user.username, email:this.user.email, phone:this.user.phone,website:this.user.website
   });

  }


  fnGoToIndex(){
    this.router.navigateByUrl('');
  }

}
