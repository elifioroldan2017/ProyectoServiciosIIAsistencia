import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seccion } from '../interface/Seccion';
import { SeccionService } from '../seccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.css']
})
export class FormSeccionComponent {
  titulo:string="";
  seccion:Seccion={
    sectionId:0,
    sectionName:"",
    sectionActive:"1",
    sectionPeriod:0
  }
  constructor(private router:Router,private activateRoute:ActivatedRoute,
    private seccionService:SeccionService){
    var id= activateRoute.snapshot.params["id"]
    if(id==undefined) this.titulo="Agregar Sección"
    else {
      this.titulo="Editar Sección"
      this.seccionService.recuperarSeccion(Number(id)).subscribe(res=>{
        this.seccion=res;
      })
    }
  }

  guardar(){


    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos de la sección?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {

          if(this.seccion.sectionId==0){
            Swal.fire('Exito!', 'Se  guardó los cambios correctamente', 'success');
            this.seccionService.insertarSeccion(this.seccion).subscribe(res=>{
              this.router.navigate(["seccion"])
              this.seccionService.listarSeccion();
            })
          }else{
            Swal.fire('Exito!', 'Se actualizó los cambios correctamente', 'success');
          this.seccionService.actualizarSeccion(this.seccion).subscribe(res=>{
              this.router.navigate(["seccion"])
              this.seccionService.listarSeccion();
            })
          }     

      }
    });

  
  }

  regresar(){
    this.router.navigate(["seccion"])
  }
}
