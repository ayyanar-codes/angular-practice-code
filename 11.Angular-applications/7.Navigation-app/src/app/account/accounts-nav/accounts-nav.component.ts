import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-nav',
  templateUrl: './accounts-nav.component.html',
  styleUrls: ['./accounts-nav.component.css']
})
export class AccountsNavComponent implements OnInit {

  constructor(private router:Router){

  }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
