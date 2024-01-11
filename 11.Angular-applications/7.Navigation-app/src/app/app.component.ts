import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '7.Navigation-app';

  constructor(private router:Router){

  }

  fnRedirect(sURL:string){
    this.router.navigateByUrl(sURL);
  }

}
