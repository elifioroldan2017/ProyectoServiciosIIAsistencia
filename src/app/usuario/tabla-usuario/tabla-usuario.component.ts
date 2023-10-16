import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent {

  constructor(private usuarioService:UsuarioService,private routes:Router){

  }

  get usuarios(){
    return this.usuarioService.usuarios
  }

   editar(idusuario:number){
    this.routes.navigate(["usuario/editar/"+idusuario])
  }


}
