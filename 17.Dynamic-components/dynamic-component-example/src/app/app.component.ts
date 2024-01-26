import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HostDirective } from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-component-example';

  @ViewChild(HostDirective, {static:true}) childRef!:HostDirective;

  components=[HelloComponent, HiComponent];

  constructor(public factoryRes:ComponentFactoryResolver){

  }

  loadComponent(iValue:number){
    this.childRef.viewRef.clear();
  }
}
