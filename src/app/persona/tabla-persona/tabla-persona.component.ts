import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent {

  constructor(private personaService:PersonaService,private router:Router){

  }

  editar(idpersona:number){
    this.router.navigate(["persona/editar/"+idpersona])

  }

  get personas(){
    return this.personaService.personas
  }

}
