import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

 firstName:string="Ayyanar";
 lastName:string="A";
 email:string="ayanarya@outlook.com";
  countryList:Country[]=[new Country("1","India"),new Country("2","Russia"),new Country("3","USE")];
  gender:string="male";
  isMarried:boolean=false;

  ngOnInit(): void {

  }

  myFormGroup=new FormGroup({
    firstName:new FormControl("Ayyanar", Validators.required),
    lastName:new FormControl(),
    email:new FormControl(),
    country:new FormControl("1"),
    gender:new FormControl(),
    isMarried:new FormControl()
  });


  fnSubmit(){
    console.log(this.myFormGroup.value);
  }

}


class Country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}



