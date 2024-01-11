import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduling-navs',
  templateUrl: './scheduling-navs.component.html',
  styleUrls: ['./scheduling-navs.component.css']
})
export class SchedulingNavsComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
