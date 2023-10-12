import { Component } from '@angular/core';
import { CursoSeccion } from '../interface/CursoSeccion';
import { CursoseccionalumnoService } from '../cursoseccion.service';

@Component({
  selector: 'app-tabla-cursoseccion',
  templateUrl: './tabla-cursoseccion.component.html',
  styleUrls: ['./tabla-cursoseccion.component.css']
})
export class TablaCursoseccionComponent {

  constructor(private cursoSeccionService:CursoseccionalumnoService){

  }

  get cursoSecciones():CursoSeccion[]{
    console.log(this.cursoSeccionService.horarios)
    return this.cursoSeccionService.horarios
  }

  editar(idcursoseccion:number){

  }

}
