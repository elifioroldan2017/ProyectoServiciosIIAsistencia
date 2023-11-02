import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../interface/Curso';

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
    if(this.curso.courseId==0){
      this.cursoService.insertarCurso(this.curso).subscribe(res=>{
        this.router.navigate(["curso"])
        this.cursoService.listarCursos();
      })
    }else{
      this.cursoService.actualizarCurso(this.curso).subscribe(res=>{
        this.router.navigate(["curso"])
        this.cursoService.listarCursos();
      })
    }
   }
}
