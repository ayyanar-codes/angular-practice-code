import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit,OnChanges,DoCheck {

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

}
