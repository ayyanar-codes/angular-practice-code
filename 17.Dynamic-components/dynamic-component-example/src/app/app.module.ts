import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@NgModule({
  declarations: [
    AppComponent, HelloComponent,HiComponent, HostDirective],
  imports: [BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HelloComponent, HiComponent]
})
export class AppModule { }
