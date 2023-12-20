import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routs:Routes=[
  {path:'',component:UserIndexComponent},
  {path:'new/:id/:name/:username/:email/:phone/:website/:action',component:UserNewComponent},
  {path:'edit',component:UserEditComponent},
  {path:'detail',component:UserDetailComponent},
  {path:'delete',component:UserDeleteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
