import { ApplicationRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HostDirective } from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('dynamicComponentHost', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private appRef: ApplicationRef) {}

  

loadComponent() {
  
  const componentRef = this.container.createComponent(HelloComponent);

  componentRef.instance.data = { name: 'Bob', year: 25 };

  this.appRef.attachView(componentRef.hostView);
  // Pass data to the component (optional):
  
  componentRef.instance.age = 13;
}

loadComponent2() {
  this.container.clear();
  const componentRef = this.container.createComponent(HiComponent);
  this.appRef.attachView(componentRef.hostView);
  // Pass data to the component (optional):
  
}
  
}
