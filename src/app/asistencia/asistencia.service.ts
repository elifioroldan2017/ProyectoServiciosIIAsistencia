import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Horario from '../cursoseccion/interface/Horario';
import urlbase from '../constant';
import { HorarioProfesor } from '../cursoseccion/interface/HorarioProfesor';
import PersonaDetalle from './interface/PersonaDetalle';

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

  constructor(private _http:HttpClient) {

   }
}
