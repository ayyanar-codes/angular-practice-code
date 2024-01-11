import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  receivedParentAge:number=0;
  receivedParentName:string="";

  constructor(private activatedRout:ActivatedRoute, private userservice:UserService) { }

  ngOnInit(): void {
    this.receivedParentName=this.userservice.getParentName();
    this.receivedParentAge=this.userservice.getParentAge();
  }

}
