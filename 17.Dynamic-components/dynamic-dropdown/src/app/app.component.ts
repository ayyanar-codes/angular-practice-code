import { ApplicationRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('dynamicCountry', { read: ViewContainerRef }) container!: ViewContainerRef;
  componentRef:any;

  constructor(private appRef: ApplicationRef) {
    
  }
  

  fnCreateDropDown(){
    const componentRef= this.container.createComponent(CountryDropdownComponent);
    componentRef.instance.countries=this.fnGetCountryList();     //[new Country(0, 'Select'), new Country(1, 'India')];
    //this.appRef.attachView(componentRef.hostView);
    this.appRef.components.push(componentRef);
  }

  fnGetCountryList(){
    let countries:Country[]=[];
    countries.push(new Country(0, 'Select'));
    countries.push(new Country(1, 'India'));
    countries.push(new Country(2, 'Russia'));
    countries.push(new Country(0, 'UK'));
    countries.push(new Country(0, 'USA'));
    return countries;
  }

}
