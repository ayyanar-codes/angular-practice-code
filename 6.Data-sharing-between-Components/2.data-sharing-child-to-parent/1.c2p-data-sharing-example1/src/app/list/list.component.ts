import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars:string[]=[];

  carDataUpdated(carsData:string[]){
    this.cars=carsData;
  }
  

}
