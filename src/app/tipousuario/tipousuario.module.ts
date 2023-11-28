import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipousuarioPrincipalComponent } from './tipousuario-principal/tipousuario-principal.component';
import { TablaTipousuarioComponent } from './tabla-tipousuario/tabla-tipousuario.component';
import { FormTipousuarioComponent } from './form-tipousuario/form-tipousuario.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    TipousuarioPrincipalComponent,
    TablaTipousuarioComponent,
    FormTipousuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MenuModule
  ]
})
export class TipousuarioModule { }
