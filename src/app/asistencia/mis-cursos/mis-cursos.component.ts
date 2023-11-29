import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from '../asistencia.service';
import Horario from 'src/app/cursoseccion/interface/Horario';
import { HorarioProfesor } from 'src/app/cursoseccion/interface/HorarioProfesor';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent {
  horarios:HorarioProfesor[]=[]
  constructor(private router:Router,private asistenciaService:AsistenciaService,private usuarioService:UsuarioService){
    var data= this.usuarioService.obtenerUsuarioDesdeStorage()
    this.asistenciaService.listarCursosProfesor(data.idperson).subscribe(res=>{
      this.horarios=res;
    })
  }
  navegar(idhorario:number){
    this.router.navigate(["/asistencia/"+idhorario])
  }
}
