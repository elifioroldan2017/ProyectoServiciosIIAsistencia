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
    this.nombreCurso=this.cursoService.nombreCurso

  }

  cambiar(event:any){
    this.cursoService.nombreCurso= event.target.value;
  }

  buscarCurso(){
    this.cursoService.page=1
    console.log("Valor "+this.cursoService.nombreCurso)
    if(this.cursoService.nombreCurso==""){
      this.cursoService.listarCursos();
    }else{
      this.cursoService.buscarCursos(this.cursoService.nombreCurso)
    }
  }

  nuevo(){
    this.router.navigate(["curso/agregar"])

  }

  limpiar(){
    this.nombreCurso=""
    this.cursoService.nombreCurso=""
    this.cursoService.listarCursos()
  }


}
