import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginPageComponent } from './entry-page/login-page/login-page.component';
import { RegisterPageComponent } from './entry-page/register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: '', component: EntryPageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Register', component: RegisterPageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'ProductDetails', component: ProductDetailsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Checkout', component: CheckoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
