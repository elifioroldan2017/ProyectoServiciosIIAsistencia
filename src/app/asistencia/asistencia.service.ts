import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Horario from '../cursoseccion/interface/Horario';
import urlbase from '../constant';
import { HorarioProfesor } from '../cursoseccion/interface/HorarioProfesor';
import PersonaDetalle from './interface/PersonaDetalle';
import Asistencia from './interface/Asistencia';
import { Persona } from '../persona/interface/Persona';
import AsistenciaAlumno from './interface/AsistenciaAlumno';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  listarCursosProfesor(idprofesor:number){
    return this._http.get<HorarioProfesor[]>(urlbase+"/schedules/teacher/"+idprofesor);

  }

  listarDetalleHorarioAlumnos(idhorario:number){
    return this._http.get<PersonaDetalle[]>(urlbase+"/schedules/"+idhorario);

  }

  guardar(oasistencia:Asistencia){
    return  this._http.post<Asistencia>(urlbase+"/attendances",oasistencia);
  }


  listarAsistenciaAlumno(idalumno:number){
    return this._http.get<AsistenciaAlumno[]>(urlbase+"/attendancesDetails/studentId/"+idalumno);

  }

  constructor(private _http:HttpClient) {

   }
}
