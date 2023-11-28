import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoseccionPrincipalComponent } from './cursoseccion-principal/cursoseccion-principal.component';
import { TablaCursoseccionComponent } from './tabla-cursoseccion/tabla-cursoseccion.component';
import { FormCursoseccionComponent } from './form-cursoseccional/form-cursoseccion.component';
import { FormsModule } from '@angular/forms';
import { ModalAlumnoComponent } from './modal-alumno/modal-alumno.component';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    CursoseccionPrincipalComponent,
    TablaCursoseccionComponent,
    FormCursoseccionComponent,
    ModalAlumnoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MenuModule
  ]
})
export class CursoseccionModule { }
