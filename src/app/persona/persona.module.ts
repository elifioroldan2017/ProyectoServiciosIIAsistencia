import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaPrincipalComponent } from './persona-principal/persona-principal.component';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';



@NgModule({
  declarations: [
    PersonaPrincipalComponent,
    TablaPersonaComponent,
    FormPersonaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonaModule { }
