import { Component } from '@angular/core';
import { CursoseccionPrincipalComponent } from '../cursoseccion-principal/cursoseccion-principal.component';
import { CursoseccionalumnoService } from '../cursoseccion.service';
import { CursoService } from 'src/app/curso/curso.service';
import { SeccionService } from 'src/app/seccion/seccion.service';
import { PersonaService } from 'src/app/persona/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona/interface/Persona';
import Horario from '../interface/Horario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cursoseccion',
  templateUrl: './form-cursoseccion.component.html',
  styleUrls: ['./form-cursoseccion.component.css']
})
export class FormCursoseccionComponent {
  titulo:string=""
  ohorario:Horario={
    courseId:0,
    sectionId:0,
    teacherId:0,
    students:[]
  }
  profesores:Persona[]=[]
  constructor(private horarioService:CursoseccionalumnoService,
    private cursoService:CursoService,private seccionService:SeccionService,
    private personaService:PersonaService,private router:Router,
    private activateRoute:ActivatedRoute){
      this.listarProfesores()
      this.horarioService.resetear()
      var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Horario"
      else this.titulo="Editar Horario"
  }

  get cursos(){
    return this.cursoService.cursos
  }

  listarProfesores(){
    this.horarioService.listarProfesores().subscribe(res=>{
      this.profesores=res
    })
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

  guardar(){


    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos del horario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {

        var personas:number[] = this.horarioService.alumnosHorario.map(p=>p.personId)
        this.ohorario.students= personas;
        console.log(this.ohorario)
        this.horarioService.guardarHorario(this.ohorario).subscribe(res=>{
          Swal.fire('Exito!', 'Se  guardó correctamente', 'success');
          this.router.navigate(["horario"])
          //this.horarioService.listarCursos();
        },(err)=>{
          Swal.fire('Ocurrio un error', err.error, 'error');
       })

      }
    });


  }


}
