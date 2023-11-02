import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaPrincipalComponent } from './asistencia-principal/asistencia-principal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsistenciaPrincipalComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class AsistenciaModule { }
