import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaPrincipalComponent } from './persona-principal/persona-principal.component';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    PersonaPrincipalComponent,
    TablaPersonaComponent,
    FormPersonaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    MenuModule
  ]
})
export class PersonaModule { }
