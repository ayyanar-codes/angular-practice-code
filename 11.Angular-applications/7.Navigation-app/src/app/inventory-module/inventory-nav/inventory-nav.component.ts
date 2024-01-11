import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-nav',
  templateUrl: './inventory-nav.component.html',
  styleUrls: ['./inventory-nav.component.css']
})
export class InventoryNavComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
