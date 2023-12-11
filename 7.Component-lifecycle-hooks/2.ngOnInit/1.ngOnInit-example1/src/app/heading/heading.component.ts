import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit,OnChanges {

  constructor() { }

 

  @Input('myTitle') TitleText:string='';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges method called');
  }

  ngOnInit(): void {
    this.TitleText='Ayyanar';  //we can set a initial value for variables before creating the component
    console.log('ngOnInit method called')
  }

}
