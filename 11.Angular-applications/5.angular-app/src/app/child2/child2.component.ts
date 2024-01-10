import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  receivedParentAge:number=0;
  constructor(private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    alert('sdfdsf');
    this.receivedParentAge=this.activatedRout.snapshot.params['age'];
  }

}
