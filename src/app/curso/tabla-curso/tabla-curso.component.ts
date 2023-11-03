import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../interface/Curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-curso',
  templateUrl: './tabla-curso.component.html',
  styleUrls: ['./tabla-curso.component.css']
})
export class TablaCursoComponent {

  constructor(private cursoservice:CursoService,private router:Router){

  }

  get cursos():Curso[]{
    return this.cursoservice.cursos;
  }

  editar(idcurso:number){
    this.router.navigate(["curso/editar/"+idcurso])
  }

  eliminar(idcurso:number){
    this.cursoservice.eliminarCurso(idcurso).subscribe(res=>{
      this.cursoservice.listarCursos()
    })
  }

}
