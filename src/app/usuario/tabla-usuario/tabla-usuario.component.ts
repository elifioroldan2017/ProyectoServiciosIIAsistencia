import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent {

  constructor(private usuarioService:UsuarioService){

  }

  get usuarios(){
    return this.usuarioService.usuarios
  }

   editar(idusuario:number){

  }


}
