import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '1.Operator-Of';


  studentList=['Ram', 'Mark', 'Ceaser', 'Lisa'];
  student:any={
    name:"Ayyanar",
    email:"ayanarya@outlook.com",
    address:"Chennai"
  }
  arrStudents$:Observable<string[]>=of(this.studentList);
  strStudentNames$:Observable<string>=of("Ayyanar");
  objStudent$:Observable<any>=of(this.student);
  

  ngOnInit(): void {
    
    this.arrStudents$.subscribe(data=>{
      console.log(data);
    });

    this.strStudentNames$.subscribe(data=>{
      console.log(data);
    });

    this.objStudent$.subscribe(data=>{
      console.log(data);
    });

  }


}
