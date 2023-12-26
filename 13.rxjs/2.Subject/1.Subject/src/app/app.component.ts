import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable-example-from-rxjs-doc';
  subject$:Subject<any>=new Subject();

  ngOnInit(){
    this.subject$.subscribe(x=> console.log('Subject triggred 1: '+x));
    this.subject$.next(12);
    this.subject$.next(14);
    this.subject$.subscribe(x=> console.log('Subject triggred 2: '+x));
    this.subject$.next(100);
  }


}
