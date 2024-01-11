import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-nav',
  templateUrl: './notification-nav.component.html',
  styleUrls: ['./notification-nav.component.css']
})
export class NotificationNavComponent implements OnInit {

  constructor(private router:Router) { }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

  ngOnInit(): void {
  }

}
