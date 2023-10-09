import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPrincipalComponent } from './usuario-principal/usuario-principal.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';



@NgModule({
  declarations: [
    UsuarioPrincipalComponent,
    TablaUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
