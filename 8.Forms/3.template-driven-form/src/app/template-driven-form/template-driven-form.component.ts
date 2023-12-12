import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  

  countryList:Counrty[]=[
    new Counrty('1','India'),
    new Counrty('2','Russia'),
    new Counrty('3','USA'),
  ];

  contact!: Contact;

  ngOnInit(): void {
    this.contact={
      firstName:"Ayyanar",
      lastName:"A",
      email:'ayanarya@outlook.com',
      gender:'male',
      married:true,
      country:'1',
      address:{street:'Perumalkovil street', city:'Pallikaranai', pinCode:'600300'}
    }
  }


  fnSubmit(form:NgForm){
    console.log(form);
  }
}


class Counrty{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}

class Contact{
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  married!:boolean;
  country!:string;
  address!:{
    street:string;
    city:string;
    pinCode:string;
  }
}
