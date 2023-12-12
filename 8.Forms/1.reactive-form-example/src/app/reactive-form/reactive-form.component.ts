import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  countryList:Country[]=[new Country('1', 'India'),new Country('1', 'Russia'),new Country('1', 'UK'),
                new Country('1', 'USA'),new Country('1', 'UAE')];

  ngOnInit(): void {
  }

  fnSubmit(){
    console.log(this.contactForm.value);
  }

  contactForm=new FormGroup({
    firstName:new FormControl('Rahul'),
    lastName:new FormControl('Gandhi'),
    email:new FormControl({value:'rahul@gmail.com', disabled:true}),
    gender:new FormControl('male'),
    isMarried:new FormControl(true),
    country:new FormControl('1'),
    address:new FormGroup({
      street:new FormControl('41, Perumal kovl street'),
      city:new FormControl('New Delhi'),
      pinCode:new FormControl('600300'),
    })
  })

 

}


class Country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }

}


