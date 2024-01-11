import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimation-nav',
  templateUrl: './estimation-nav.component.html',
  styleUrls: ['./estimation-nav.component.css']
})
export class EstimationNavComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
