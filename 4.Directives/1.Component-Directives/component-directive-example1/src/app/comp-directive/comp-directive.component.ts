import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-directive',
  templateUrl: './comp-directive.component.html',
  styleUrls: ['./comp-directive.component.css']
})
export class CompDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name="new component"

}
