import { Component } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.Observable-Introduction-Example1';

  

  constructor(){

    console.log('constructor works fine');

    const func$ =new Observable(obs=>{
      console.log('start');
      obs.next('100');
      obs.next('200');
      obs.next('300');
      obs.error('invalid connection');
      obs.complete();
      console.log('stop');
    });

    console.log('Observable: ', func$);

    func$.subscribe(
    sub=>{
      console.log('Sub: ' + sub);
    }
    ,error=>{
      console.log('Error: ' + error);
    } 
    ,()=>{
      console.log('Success');
    });
  }
}
