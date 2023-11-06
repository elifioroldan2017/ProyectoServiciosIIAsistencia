import { Component } from '@angular/core';
import { CursoseccionalumnoService } from '../cursoseccion.service';
import { Persona } from 'src/app/persona/interface/Persona';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent {

  constructor(private horarioService:CursoseccionalumnoService){

  }

  get alumnos(){
    return this.horarioService.alumnos
  }

  agregar(opersona:Persona){
    console.log(opersona)
    if(!this.horarioService.alumnosHorario.includes(opersona))
      this.horarioService.addAlumnoHorario(opersona)
    else
       alert("Ya se agrego")
  }


}
