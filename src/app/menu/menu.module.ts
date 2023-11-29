import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaginaPrincipalAppComponent } from './pagina-principal-app/pagina-principal-app.component';



@NgModule({
  declarations: [
    MenuComponent,
    PaginaPrincipalAppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
