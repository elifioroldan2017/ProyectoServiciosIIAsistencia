import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoPrincipalComponent } from './curso-principal/curso-principal.component';
import { TablaCursoComponent } from './tabla-curso/tabla-curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    CursoPrincipalComponent,
    TablaCursoComponent,
    FormCursoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    MenuModule
  ]
})
export class CursoModule { }
