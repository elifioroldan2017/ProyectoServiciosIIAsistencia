import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { CursoModule } from './curso/curso.module';
import { PersonaModule } from './persona/persona.module';
import { CursoseccionModule } from './cursoseccion/cursoseccion.module';
import { LoginModule } from './login/login/login.module';
import { TipousuarioModule } from './tipousuario/tipousuario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SeccionModule } from './seccion/seccion.module';
import {HttpClientModule} from "@angular/common/http";
import { MenuModule } from './menu/menu.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginPrincipalComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CursoModule,
    PersonaModule,
    CursoseccionModule,
    LoginModule,
    TipousuarioModule,
    UsuarioModule,
    SeccionModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
