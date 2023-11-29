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

  cambiar(event:any){
    this.personaService.nombrePersona= event.target.value;
  }

  nuevo(){
   this.router.navigate(["/persona/agregar"])
  }

  buscarPersona(){
    this.personaService.page=1

    if(this.personaService.nombrePersona==""){
      this.personaService.listarPersonas();
    }else{
      this.personaService.buscarPersonas(this.personaService.nombrePersona)
    }
  }

  limpiar(){
    this.nombrePersona=""
    this.personaService.nombrePersona=""
    this.personaService.listarPersonas()
  }

}
