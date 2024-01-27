import { Component, OnInit } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})

export class CountryDropdownComponent implements OnInit {

  constructor() {
    this.countries.push(new Country(0, 'Select country'));
    this.countries.push(new Country(1, 'India'));
    this.countries.push(new Country(2, 'Russia'))
   }

  countries:Country[]=[];
  
  ngOnInit(): void {
  
  }

}
