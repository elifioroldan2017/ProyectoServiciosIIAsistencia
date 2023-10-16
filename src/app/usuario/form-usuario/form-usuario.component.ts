import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona/persona.service';
import { TipousuarioService } from 'src/app/tipousuario/tipousuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  titulo:string=""
  
  constructor(private tipousuarioService:TipousuarioService,private personaService:PersonaService,private routes:Router ,private activateRoute:ActivatedRoute){
      var param=this.activateRoute.snapshot.params["id"]
      if(param==undefined) this.titulo="Nuevo Usuario"
      else this.titulo="Editar Usuario"
  }

  get tipousuarios(){
    return this.tipousuarioService.tipousuarios
  }

  get pasajeros(){
    return this.personaService.personas
  }
  
  regresar(){
    this.routes.navigate(["usuario"])
  }
}
