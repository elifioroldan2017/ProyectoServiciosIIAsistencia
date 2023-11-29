import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Horario from '../cursoseccion/interface/Horario';
import urlbase from '../constant';
import { HorarioProfesor } from '../cursoseccion/interface/HorarioProfesor';
import PersonaDetalle from './interface/PersonaDetalle';
import Asistencia from './interface/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  listarCursosProfesor(idprofesor:number){
    return this._http.get<HorarioProfesor[]>(urlbase+"/schedules/teacher/"+idprofesor);

  }

  listarDetalleHorarioAlumnos(idhorario:number){
    return this._http.get<PersonaDetalle[]>(urlbase+"/schedules/detail/"+idhorario);

  }

  guardar(oasistencia:Asistencia){
    return  this._http.post<Asistencia>(urlbase+"/asistencia",oasistencia);
  }

  constructor(private _http:HttpClient) {

   }
}
