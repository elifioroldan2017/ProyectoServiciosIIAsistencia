import { Component, ElementRef } from '@angular/core';
import { CursoseccionalumnoService } from '../cursoseccion.service';
import { Persona } from 'src/app/persona/interface/Persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent {

  constructor(private horarioService:CursoseccionalumnoService,private el: ElementRef){

  }

  get alumnos(){
    return this.horarioService.alumnos
  }

  agregar(opersona:Persona){
    console.log(opersona)
    if(!this.horarioService.alumnosHorario.includes(opersona)){
      this.horarioService.addAlumnoHorario(opersona)
       // Obtiene el elemento del botón con el id "btnCerrar"
      const btnCerrar = this.el.nativeElement.querySelector('#btnCerrar');

      // Simula un clic en el botón
      if (btnCerrar) {
        btnCerrar.click();
      }
    }
    else
    Swal.fire({
      title: 'Error!',
      text: 'El alumno '+opersona.personName+" "+opersona.personLastname1+" "+opersona.personLastname2,
      icon: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    });
  }


}
