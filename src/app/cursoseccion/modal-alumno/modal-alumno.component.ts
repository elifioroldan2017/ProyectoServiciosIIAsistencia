import { Component } from '@angular/core';
import { CursoseccionalumnoService } from '../cursoseccion.service';

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




}
