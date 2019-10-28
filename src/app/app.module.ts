import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginPageComponent } from './entry-page/login-page/login-page.component';
import { RegisterPageComponent } from './entry-page/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
