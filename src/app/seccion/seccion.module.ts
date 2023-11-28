import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionPrincipalComponent } from './seccion-principal/seccion-principal.component';
import { TablaSeccionComponent } from './tabla-seccion/tabla-seccion.component';
import { FormSeccionComponent } from './form-seccion/form-seccion.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SeccionPrincipalComponent,
    TablaSeccionComponent,
    FormSeccionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule
  ]
})
export class SeccionModule { }
