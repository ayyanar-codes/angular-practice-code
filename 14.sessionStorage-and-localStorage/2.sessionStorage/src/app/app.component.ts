import { Component } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userForm=new FormGroup({
    name:new FormControl('', Validators.required),
    age:new FormControl(0, [Validators.required, Validators.min(18), Validators.max(100)]),
    email:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    city:new FormControl('', Validators.required),
    country:new FormControl('', Validators.required)
  });


  fnSubmit(){
    const user={
      name:this.userForm.value.name,
      age:this.userForm.value.age,
      email:this.userForm.value.email,
      city:this.userForm.value.city,
      country:this.userForm.value.country,
    }

    sessionStorage.setItem('userData', JSON.stringify(user));  //clears automatically when closing the browser/browser tab

  }


  fnCheckForm(){
    console.log(this.userForm);
  }


}
