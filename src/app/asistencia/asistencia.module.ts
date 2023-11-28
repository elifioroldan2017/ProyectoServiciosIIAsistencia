import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaPrincipalComponent } from './asistencia-principal/asistencia-principal.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    AsistenciaPrincipalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MenuModule
  ]
})
export class AsistenciaModule { }
