import { Component } from '@angular/core';
import { CursoSeccion } from '../interface/CursoSeccion';
import { CursoseccionalumnoService } from '../cursoseccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-cursoseccion',
  templateUrl: './tabla-cursoseccion.component.html',
  styleUrls: ['./tabla-cursoseccion.component.css']
})
export class TablaCursoseccionComponent {

  constructor(private cursoSeccionService:CursoseccionalumnoService,
    private router:Router){

  }

  get cursoSecciones():CursoSeccion[]{
    console.log(this.cursoSeccionService.horarios)
    return this.cursoSeccionService.horarios
  }

  editar(idcursoseccion:number){
    this.router.navigate(["horario/editar/"+idcursoseccion])

  }

  get page(){
    return this.cursoSeccionService.page;
  }

  get totalLength(){
    return this.cursoSeccionService.totalLength;

  }

  cambiar(event:any){
    this.cursoSeccionService.page=event
  }

}
