import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../interface/Curso';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
          this.cursoservice.eliminarCurso(idcurso).subscribe(res=>{
            Swal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
            this.cursoservice.listarCursos()
          }) 
      }
    });


  
  }

  cambiar(event:any){
    this.cursoservice.page=event
  }


}
