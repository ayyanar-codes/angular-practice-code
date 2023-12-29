import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2.Operator-from';
  arrOrders=['Fashion', 'Electronics', "Mobile", "HouseHold"];
  orders$:Observable<string>=from(this.arrOrders);
  orderName:string="";
  ngOnInit(): void {
    this.orders$.subscribe(data=>{
    setInterval(()=>{
      console.log(data);
      this.orderName=data;
    }, 3000);
      
    });
  }

}
