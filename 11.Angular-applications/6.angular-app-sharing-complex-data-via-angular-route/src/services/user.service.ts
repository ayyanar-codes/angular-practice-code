import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class UserService{

   private parentAge!:number;
   private parentName!:string;

    getParentAge(){
        return this.parentAge;
    }

    getParentName(){
        return this.parentName;
    }

    setParentAge(age:number){
        this.parentAge=age;
    }

    setParentName(name:string){
        this.parentName=name;
    }

}