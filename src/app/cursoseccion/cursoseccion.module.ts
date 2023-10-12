import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoseccionPrincipalComponent } from './cursoseccion-principal/cursoseccion-principal.component';
import { TablaCursoseccionComponent } from './tabla-cursoseccion/tabla-cursoseccion.component';
import { FormCursoseccionComponent } from './form-cursoseccional/form-cursoseccion.component';



@NgModule({
  declarations: [
    CursoseccionPrincipalComponent,
    TablaCursoseccionComponent,
    FormCursoseccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoseccionModule { }
