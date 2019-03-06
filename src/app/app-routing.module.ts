import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
 
  {
    path:"login",
    component:LoginComponent
  },
  {
      path:"menu",
      component:MenuComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
