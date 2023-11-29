import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import PersonaDetalle from '../interface/PersonaDetalle';
import { AsistenciaService } from '../asistencia.service';
import Asistencia from '../interface/Asistencia';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-asistencia-principal',
  templateUrl: './asistencia-principal.component.html',
  styleUrls: ['./asistencia-principal.component.css']
})
export class AsistenciaPrincipalComponent {
  personas:PersonaDetalle[]=[]
  personasMarcadas: number[] = [];
  asistencia:Asistencia={
    scheduleId:0,
    title:"",
    userId:0,
    missing:[]
  }
  id:number=0
  constructor(private router:Router,private asistenciaService:AsistenciaService,
    private activateRoute:ActivatedRoute,private usuarioService:UsuarioService){
    this.id= activateRoute.snapshot.params["id"]
    this. listar(this.id)
  }

  listar(id:number){
    this.asistenciaService.listarDetalleHorarioAlumnos(id).subscribe(res=>{
      this.personas=res;
    })
  }
 
  grabar(){
    var data= this.usuarioService.obtenerUsuarioDesdeStorage()
    this.asistencia.scheduleId= this.asistencia.scheduleId
    this.asistencia.missing= this.personasMarcadas
    this.asistencia.userId = data.userId

    

  }
  regresar(){
    this.router.navigate(["/mihorario"])
  }

  toggleCheckbox(personaId: number): void {
    const index = this.personasMarcadas.indexOf(personaId);
  
    if (index === -1) {
      this.personasMarcadas.push(personaId);
    } else {
      this.personasMarcadas.splice(index, 1);
    }
  }

}
