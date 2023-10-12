import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../interface/Curso';

@Component({
  selector: 'app-tabla-curso',
  templateUrl: './tabla-curso.component.html',
  styleUrls: ['./tabla-curso.component.css']
})
export class TablaCursoComponent {

  constructor(private cursoservice:CursoService){

  }

  get cursos():Curso[]{
    return this.cursoservice.cursos;
  }

  editar(idcurso:number){

  }

}
