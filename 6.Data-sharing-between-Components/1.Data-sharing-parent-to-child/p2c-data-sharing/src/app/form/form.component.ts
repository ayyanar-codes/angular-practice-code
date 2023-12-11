import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars:string[]=[];
  carName:string="";
  AddCar(){
    this.cars.push(this.carName);
    this.carName='';
    console.log(this.cars);
  }

}
