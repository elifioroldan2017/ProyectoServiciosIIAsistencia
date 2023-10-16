import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {

  titulo:string="";
  constructor(private personaService:PersonaService,private router:Router,
    private activateRoute:ActivatedRoute){
    var id= activateRoute.snapshot.params["id"]
    if(id==undefined) this.titulo="Agregar Persona"
    else this.titulo="Editar Persona"
  }

  regresar(){
    this.router.navigate(["/persona"])

  }
  get sexos(){
    return this.personaService.sexos;
  }

  get tipos(){
    return this.personaService.tipos
  }

}
