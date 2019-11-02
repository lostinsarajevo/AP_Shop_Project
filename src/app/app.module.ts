import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginPageComponent } from './entry-page/login-page/login-page.component';
import { RegisterPageComponent } from './entry-page/register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { EntryHeaderComponent } from './entry-page/entry-header/entry-header.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ListedProductComponent } from './product/listed-product/listed-product.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    SearchComponent,
    HeaderComponent,
    EntryHeaderComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    ListedProductComponent,
    CartItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
