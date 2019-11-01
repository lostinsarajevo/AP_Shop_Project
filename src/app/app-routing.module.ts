import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginPageComponent } from './entry-page/login-page/login-page.component';
import { RegisterPageComponent } from './entry-page/register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';


const routes: Routes = [
  {path: '', component: EntryPageComponent},
  {path: 'Login', component: LoginPageComponent},
  {path: 'Register', component: RegisterPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'ProductDetails', component: ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
