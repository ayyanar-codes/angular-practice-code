import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPage1Component } from './child-page1/child-page1.component';
import { ChildPage2Component } from './child-page2/child-page2.component';

const routes: Routes = [
  {path:'page1', component:ChildPage1Component},
  {path:'page2', component:ChildPage2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
