import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent {
   titulo:string="";

  constructor(private cursoService:CursoService,private router:Router,
    private activateRoute:ActivatedRoute){

      var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Curso"
      else this.titulo="Editar Curso"
  }

   get carreras(){
     return this.cursoService.carreras;
   }

   regresar(){
    this.router.navigate(["curso"])
   }

}
