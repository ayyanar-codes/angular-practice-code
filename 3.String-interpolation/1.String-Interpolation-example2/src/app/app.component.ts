import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.String-Interpolation-example1';

  addTwoValues(iValue1:number, iValue2:number){
    return iValue1+iValue2;
  }


}
