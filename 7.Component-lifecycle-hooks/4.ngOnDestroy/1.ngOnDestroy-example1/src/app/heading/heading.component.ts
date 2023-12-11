import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit,OnChanges,DoCheck,OnDestroy {

  constructor() { }

 

  @Input('myTitle') TitleText:string[]=[];
  noOfTitles=0;


  ngOnChanges(changes: SimpleChanges): void {  //triggers when chanhging primitive input values 
    console.log('ngOnChanges method called');
  }



  ngOnInit(): void {  // we can set a initial value for variables before creating the component
    this.TitleText.push('Ayyanar');  
    this.noOfTitles=1;
    console.log('ngOnInit method called')
  }



  ngDoCheck(): void {  //Triggers when change anything in the component.
    if(this.TitleText.length>this.noOfTitles){
      console.log('ngDoCheck method called');
      this.noOfTitles++;
    }
  }

  ngOnDestroy(): void {
    console.log('Heading component destroyed');
  }

}
