import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SubjectBehavior-Example';
  bSubject$:BehaviorSubject<any>=new BehaviorSubject(12);

  ngOnInit(): void {

    this.bSubject$.subscribe(x=> console.log('observer 1: '+x));

    this.bSubject$.next(1);

    this.bSubject$.subscribe(x=> console.log('observer 2: '+x));

    this.bSubject$.next(2);

  }

}
