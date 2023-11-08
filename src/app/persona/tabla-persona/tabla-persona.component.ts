import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  eliminar(idpersona:number){

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes ejecutar la lógica para eliminar el elemento
        this.personaService.eliminarPersona(idpersona).subscribe(res=>{
          Swal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
          this.personaService.listarPersonas()
        })
      }
    });


   
  }

  get personas(){
    return this.personaService.personas
  }

}
