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

  }
  
  nuevo(){
    this.router.navigate(["seccion/agregar"])
  }

  buscarSeccion(){
    if(this.nombreSeccion==""){
      this.seccionService.listarSeccion()
    }else{
      this.seccionService.buscarSeccion(this.nombreSeccion)
    }
  }

  limpiar(){
    
  }
}
