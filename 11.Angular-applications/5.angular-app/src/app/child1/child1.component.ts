import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
// export class Child1Component implements OnInit {
//   name:string="This is not my first application";
//   enteredName:string="Ayyanar";
//   displayValue:string="";
//   constructor() { }
//   ngOnInit(): void {}
//   onNameChange(event:string){
//    this.displayValue=event;
//   }
// }
export class Child1Component implements OnInit {
  name:string="This is not my first application";
  enteredName:string="Ayyanar";
  constructor() { }
  ngOnInit(): void {}

  @Input() parentName:string="";
  @Output() onNameChange:EventEmitter<string>=new EventEmitter<string>();

  fnOnNameChange(event:string){
    this.onNameChange.emit(event);
  }

}
