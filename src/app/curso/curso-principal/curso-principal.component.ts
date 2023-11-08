import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-principal',
  templateUrl: './curso-principal.component.html',
  styleUrls: ['./curso-principal.component.css']
})
export class CursoPrincipalComponent {

  nombreCurso:string=""
  constructor(private router:Router,private cursoService:CursoService ){

  }

  buscarCurso(){
    if(this.nombreCurso==""){
      this.cursoService.listarCursos();
    }else{
      this.cursoService.buscarCursos(this.nombreCurso)
    }
  }

  nuevo(){
    this.router.navigate(["curso/agregar"])

  }


}
