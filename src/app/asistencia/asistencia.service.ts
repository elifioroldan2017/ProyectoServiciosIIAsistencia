import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Horario from '../cursoseccion/interface/Horario';
import urlbase from '../constant';
import { HorarioProfesor } from '../cursoseccion/interface/HorarioProfesor';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  listarCursosProfesor(idprofesor:number){
    return this._http.get<HorarioProfesor[]>(urlbase+"/schedules/teacher/"+idprofesor);

  }

  constructor(private _http:HttpClient) {

   }
}
