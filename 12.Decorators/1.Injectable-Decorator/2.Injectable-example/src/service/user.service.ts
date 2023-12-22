import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class User{

    firstName!:string;
    lastName!:string;
    email!:string;
    city!:string;
    state!:string;
    country!:string;

    setFirstName(firstName:string){this.firstName=firstName; }
    setLastName(lastName:string){this.lastName=lastName; }
    setEmail(email:string){this.email=email; }
    setCity(city:string){this.city=city; }
    setState(state:string){this.state=state; }
    setCountry(country:string){this.country=country; }
    getFirstName(){return this.firstName}
    getLastName(){return this.lastName }
    getEmail(){return this.email }
    getCity(){return this.city }
    getState(){return this.state}
    getCountry(){return this.country }

}