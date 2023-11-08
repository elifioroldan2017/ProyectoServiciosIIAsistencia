import { Component } from '@angular/core';
import { CursoseccionPrincipalComponent } from '../cursoseccion-principal/cursoseccion-principal.component';
import { CursoseccionalumnoService } from '../cursoseccion.service';
import { CursoService } from 'src/app/curso/curso.service';
import { SeccionService } from 'src/app/seccion/seccion.service';
import { PersonaService } from 'src/app/persona/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona/interface/Persona';

@Component({
  selector: 'app-form-cursoseccion',
  templateUrl: './form-cursoseccion.component.html',
  styleUrls: ['./form-cursoseccion.component.css']
})
export class FormCursoseccionComponent {
  titulo:string=""

  constructor(private horarioService:CursoseccionalumnoService,
    private cursoService:CursoService,private seccionService:SeccionService,
    private personaService:PersonaService,private router:Router,
    private activateRoute:ActivatedRoute){

      var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Horario"
      else this.titulo="Editar Horario"
  }

  get cursos(){
    return this.cursoService.cursos
  }

  get profesores(){
    return this.horarioService.profesores
  }

  regresar(){
    this.router.navigate(["horario"])
  }

  get secciones(){
    return this.seccionService.secciones
  }

  get alumnosHorarios(){
    return this.horarioService.alumnosHorario
  }

  eliminar(opersona:Persona){
    this.horarioService.deleteAlumnoHorario(opersona)
  }


}
