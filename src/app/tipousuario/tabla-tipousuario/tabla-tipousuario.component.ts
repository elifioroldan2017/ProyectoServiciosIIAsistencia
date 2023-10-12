import { Component } from '@angular/core';
import { TipousuarioService } from '../tipousuario.service';

@Component({
  selector: 'app-tabla-tipousuario',
  templateUrl: './tabla-tipousuario.component.html',
  styleUrls: ['./tabla-tipousuario.component.css']
})
export class TablaTipousuarioComponent {


  constructor(private tipoUsuarioService:TipousuarioService){

  }

  editar(idtipousuario:number){

  }

  get tipousuarios(){
    return this.tipoUsuarioService.tipousuarios
  }

}
