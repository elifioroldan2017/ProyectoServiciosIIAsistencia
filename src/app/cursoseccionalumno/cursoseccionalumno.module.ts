import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoseccionalumnoPrincipalComponent } from './cursoseccionalumno-principal/cursoseccionalumno-principal.component';
import { TablaCursoseccionalumnoComponent } from './tabla-cursoseccionalumno/tabla-cursoseccionalumno.component';
import { FormCursoseccionalumnoComponent } from './form-cursoseccionalumno/form-cursoseccionalumno.component';



@NgModule({
  declarations: [
    CursoseccionalumnoPrincipalComponent,
    TablaCursoseccionalumnoComponent,
    FormCursoseccionalumnoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoseccionalumnoModule { }
