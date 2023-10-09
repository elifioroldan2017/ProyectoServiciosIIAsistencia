import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoPrincipalComponent } from './curso-principal/curso-principal.component';
import { TablaCursoComponent } from './tabla-curso/tabla-curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';



@NgModule({
  declarations: [
    CursoPrincipalComponent,
    TablaCursoComponent,
    FormCursoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
