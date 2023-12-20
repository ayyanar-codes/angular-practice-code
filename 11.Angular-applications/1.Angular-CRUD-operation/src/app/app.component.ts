import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '11.Angular-Application';

  constructor(private router:Router){
    
  }

  fnUserIndex(){
    this.router.navigateByUrl('');
  }
  fnUserNew(){
    this.router.navigateByUrl('new');
  }
  fnUserEdit(){
    this.router.navigateByUrl('edit');
  }
  fnUserDetail(){
    this.router.navigateByUrl('detail');
  }
  fnUserDelete(){
    //this.router.navigateByUrl('delete');
    this.router.navigate(['/delete']);
  }







}
