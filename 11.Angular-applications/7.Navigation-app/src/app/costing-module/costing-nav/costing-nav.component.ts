import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costing-nav',
  templateUrl: './costing-nav.component.html',
  styleUrls: ['./costing-nav.component.css']
})
export class CostingNavComponent implements OnInit {

  constructor(private router:Router) { }
  
  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
