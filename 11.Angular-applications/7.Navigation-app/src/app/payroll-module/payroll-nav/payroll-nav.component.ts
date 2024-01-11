import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll-nav',
  templateUrl: './payroll-nav.component.html',
  styleUrls: ['./payroll-nav.component.css']
})
export class PayrollNavComponent implements OnInit {

  constructor(private router:Router){

  }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
