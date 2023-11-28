import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPrincipalComponent } from './usuario-principal/usuario-principal.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginModule } from '../login/login/login.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    UsuarioPrincipalComponent,
    TablaUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    LoginModule,
    MenuModule
  ]
})
export class UsuarioModule { }
