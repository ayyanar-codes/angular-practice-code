import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRouts:Routes=[
  {path:'', component: HomeComponent},
  {path:'contact-us',  component:ContactUsComponent},
  {path:'about',  component:AboutComponent},
];  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
