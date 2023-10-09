import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipousuarioPrincipalComponent } from './tipousuario-principal/tipousuario-principal.component';
import { TablaTipousuarioComponent } from './tabla-tipousuario/tabla-tipousuario.component';
import { FormTipousuarioComponent } from './form-tipousuario/form-tipousuario.component';



@NgModule({
  declarations: [
    TipousuarioPrincipalComponent,
    TablaTipousuarioComponent,
    FormTipousuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TipousuarioModule { }
