import { Component } from '@angular/core';
import { SeccionModule } from '../seccion.module';
import { Seccion } from '../interface/Seccion';
import { SeccionService } from '../seccion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-seccion',
  templateUrl: './tabla-seccion.component.html',
  styleUrls: ['./tabla-seccion.component.css']
})
export class TablaSeccionComponent {

  constructor(private seccionService:SeccionService,private router:Router){

  }
  get secciones():Seccion[]{
    return this.seccionService.secciones
  }

  editar(idseccion:number){
    this.router.navigate(["seccion/editar/"+idseccion])

  }

  eliminar(idseccion:number){

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
          this.seccionService.eliminarSeccion(idseccion).subscribe(res=>{
            Swal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
            this.seccionService.listarSeccion();
          })
      }
    });


   
  }


}
