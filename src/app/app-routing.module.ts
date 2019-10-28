import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginPageComponent } from './entry-page/login-page/login-page.component';
import { RegisterPageComponent } from './entry-page/register-page/register-page.component';


const routes: Routes = [
  {path: 'Login', component: LoginPageComponent},
  {path: 'Register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
