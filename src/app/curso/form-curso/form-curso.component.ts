import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../interface/Curso';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent {
   titulo:string="";
   curso:Curso={
    courseId: 0,
    courseName: "",
    courseCredits: "",
    careerId: 0,
    careerActive: "1"
   }
  constructor(private cursoService:CursoService,private router:Router,
    private activateRoute:ActivatedRoute){

      var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Curso"
      else {
        this.titulo="Editar Curso"
        this.cursoService.recuperarCurso(Number(id)).subscribe(res=>{
          this.curso=res;
        })
      }
  }

   get carreras(){
     return this.cursoService.carreras;
   }

   regresar(){
    this.router.navigate(["curso"])
   }

   guardar(){

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos del curso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.curso.courseId==0){
          Swal.fire('Exito!', 'Se realizo guardo los cambios correctamente', 'success');
          this.cursoService.insertarCurso(this.curso).subscribe(res=>{
            this.router.navigate(["curso"])
            this.cursoService.listarCursos();
          })
        }else{
          Swal.fire('Exito!', 'Se realizo actualizo los cambios correctamente', 'success');
          this.cursoService.actualizarCurso(this.curso).subscribe(res=>{
            this.router.navigate(["curso"])
            this.cursoService.listarCursos();
          })
        }

      }
    });


 
   }
}
