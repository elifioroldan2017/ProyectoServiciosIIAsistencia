import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent {

  constructor(private personaService:PersonaService){

  }

  editar(idpersona:number){

  }

  get personas(){
    return this.personaService.personas
  }

}
