import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-principal',
  templateUrl: './persona-principal.component.html',
  styleUrls: ['./persona-principal.component.css']
})
export class PersonaPrincipalComponent {
  nombrePersona:string=""
  constructor(private router:Router,private personaService:PersonaService){

  }

  nuevo(){
   this.router.navigate(["/persona/agregar"])
  }

  buscarPersona(){
    if(this.nombrePersona==""){
      this.personaService.listarPersonas();
    }else{
      this.personaService.buscarPersonas(this.nombrePersona)
    }
  }

}
