import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeccionService } from '../seccion.service';

@Component({
  selector: 'app-seccion-principal',
  templateUrl: './seccion-principal.component.html',
  styleUrls: ['./seccion-principal.component.css']
})
export class SeccionPrincipalComponent {
  nombreSeccion:string="";
  constructor(private router:Router,private seccionService:SeccionService){
    this.nombreSeccion=this.seccionService.nombreSeccion

  }

  cambiar(event:any){
    this.seccionService.nombreSeccion= event.target.value;
  }
  
  nuevo(){
    this.router.navigate(["seccion/agregar"])
  }

  buscarSeccion(){
    this.seccionService.page=1

    if( this.seccionService.nombreSeccion==""){
      this.seccionService.listarSeccion()
    }else{
      this.seccionService.buscarSeccion( this.seccionService.nombreSeccion)
    }
  }

  limpiar(){
    this.nombreSeccion=""
    this.seccionService.nombreSeccion=""
    this.seccionService.listarSeccion()
  }
}
