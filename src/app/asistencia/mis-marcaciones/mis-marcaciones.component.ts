import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { AsistenciaService } from '../asistencia.service';
import AsistenciaAlumno from '../interface/AsistenciaAlumno';

@Component({
  selector: 'app-mis-marcaciones',
  templateUrl: './mis-marcaciones.component.html',
  styleUrls: ['./mis-marcaciones.component.css']
})
export class MisMarcacionesComponent {
 asistenciaAlumno: AsistenciaAlumno[]=[]
  constructor(private usuarioService:UsuarioService ,private asistenciaService:AsistenciaService){
    var data= this.usuarioService.obtenerUsuarioDesdeStorage()
    this.asistenciaService.listarAsistenciaAlumno(data.idperson).subscribe(res=>{
      this.asistenciaAlumno=res;
    })
  }


}
