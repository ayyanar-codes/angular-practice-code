import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('myTitle') TitleText:string='';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges method called',changes);
  }

}
