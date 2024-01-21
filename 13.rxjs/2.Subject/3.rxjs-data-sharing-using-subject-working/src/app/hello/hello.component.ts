import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/Services/app.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  randomNumbers:number[]=[];

  constructor(private appService:AppService) 
  {
    this.appService.sub.subscribe(x=>{
      this.randomNumbers.push(x);
    })
  }

  ngOnInit(): void {
  }

  fnEmit(){
    this.appService.sendData(Math.random());
  }

}
