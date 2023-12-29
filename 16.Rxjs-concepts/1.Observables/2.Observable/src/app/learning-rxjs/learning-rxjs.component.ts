import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  templateUrl: './learning-rxjs.component.html',
  styleUrls: ['./learning-rxjs.component.css']
})
export class LearningRxjsComponent implements OnInit {

  name:string="";
  agents!:Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.agents=new Observable(
      function (observer){
        try{

          observer.next('Ram');

          setInterval(()=>{
            observer.next('Mark')
          }, 4000);

          setInterval(()=>{
            observer.next('Ceaser')
          }, 8000);

        } catch(e){
          observer.error(e);
        }
      }
    );

      this.agents.subscribe(data=>{
        console.log(data);
        this.name=data;
      });

  }

}
