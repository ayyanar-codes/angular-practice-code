import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production-nav',
  templateUrl: './production-nav.component.html',
  styleUrls: ['./production-nav.component.css']
})
export class ProductionNavComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
