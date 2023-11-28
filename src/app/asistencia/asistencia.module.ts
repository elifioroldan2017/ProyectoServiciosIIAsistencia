import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaPrincipalComponent } from './asistencia-principal/asistencia-principal.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { MisMarcacionesComponent } from './mis-marcaciones/mis-marcaciones.component';



@NgModule({
  declarations: [
    AsistenciaPrincipalComponent,
    MisCursosComponent,
    MisMarcacionesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MenuModule,
    HttpClientModule
  ]
})
export class AsistenciaModule { }
