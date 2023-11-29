import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import PersonaDetalle from '../interface/PersonaDetalle';
import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-asistencia-principal',
  templateUrl: './asistencia-principal.component.html',
  styleUrls: ['./asistencia-principal.component.css']
})
export class AsistenciaPrincipalComponent {
  personas:PersonaDetalle[]=[]
  constructor(private router:Router,private asistenciaService:AsistenciaService,private activateRoute:ActivatedRoute){
    var id= activateRoute.snapshot.params["id"]
    this. listar(id)
  }

  listar(id:number){
    this.asistenciaService.listarDetalleHorarioAlumnos(id).subscribe(res=>{
      this.personas=res;
    })
  }
 
  grabar(){

  }
  regresar(){
    this.router.navigate(["/mihorario"])
  }
}
