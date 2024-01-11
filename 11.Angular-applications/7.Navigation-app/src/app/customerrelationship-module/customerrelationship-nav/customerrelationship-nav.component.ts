import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerrelationship-nav',
  templateUrl: './customerrelationship-nav.component.html',
  styleUrls: ['./customerrelationship-nav.component.css']
})
export class CustomerrelationshipNavComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
