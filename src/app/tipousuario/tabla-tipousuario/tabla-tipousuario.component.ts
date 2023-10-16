import { Component } from '@angular/core';
import { TipousuarioService } from '../tipousuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-tipousuario',
  templateUrl: './tabla-tipousuario.component.html',
  styleUrls: ['./tabla-tipousuario.component.css']
})
export class TablaTipousuarioComponent {


  constructor(private tipoUsuarioService:TipousuarioService,private router:Router){

  }

  editar(idtipousuario:number){
    this.router.navigate(["tipousuario/editar/"+idtipousuario]);

  }

  get tipousuarios(){
    return this.tipoUsuarioService.tipousuarios
  }

}
