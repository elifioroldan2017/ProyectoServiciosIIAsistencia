import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { FormLoginComponent } from './login/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPrincipalComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
