import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from 'src/Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomValues:number[]=[];

  constructor(private appService:AppService){
      this.appService.sub.subscribe(x=>{
        this.randomValues.push(x);
      })
  }
  
}


















// export class AppComponent {
  
//   nValue:number=0;

//   nOutput:number[]=[];

//   sub:Subject<number>=new Subject<number>();

//   constructor(){
//     this.sub.subscribe(x=>{
//       this.nOutput.push(x);
//     });

//   }

//   fnSetValue(){
//     alert(this.nOutput);
//   }

//   fnGetValueFromApp(){
//     this.sub.next(this.nValue);
//     this.nValue=0;
//   }
  

// }
