import { Injectable } from '@angular/core';
import { CursoSeccion } from './interface/CursoSeccion';
import { Persona } from '../persona/interface/Persona';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';
import Horario from './interface/Horario';
import { HorarioList } from './interface/HorarioList';

@Injectable({
  providedIn: 'root'
})
export class CursoseccionalumnoService {
  private _alumnos: Persona[] =[]
  private _profesores: Persona[] =[]
  private _alumnosAddHorario: Persona[]=[]
  private _horarios:CursoSeccion[]=[
    {
      idcursoseccion:1,
      nombrecurso:"Introduccion a la Algoritmia",
      nombreprofesor:"Oscar Murillo",
      nombreseccion:"T1NM",
    },
    {
      idcursoseccion:2,
      nombrecurso:"Base de datos (Modelado y SQL Server Basic)	",
      nombreprofesor:"Lidia Vilchez",
      nombreseccion:"T2PM",
    }
  ]
  totalLength:any;
  page:number=1;
  get horarios():CursoSeccion[]{
    return [...this._horarios]
  }

  get alumnos():Persona[]{
    return [...this._alumnos]
  }

  get alumnosHorario():Persona[]{
    return [...this._alumnosAddHorario]
  }

  resetear(){
    this._alumnosAddHorario=[]
  }

  get profesores():Persona[]{
    return [...this._profesores]
  }

  addAlumnoHorario(opersona:Persona){
    this._alumnosAddHorario.push(opersona)
  }

  deleteAlumnoHorario(opersona:Persona){
    this._alumnosAddHorario= this._alumnosAddHorario.filter(p=>p.personId!=opersona.personId)
  }

  guardarHorario(ohorario:Horario){
    return this._http.post<Horario>(urlbase+"/schedules",ohorario);
  }

  listarAlumnos(){
   return this._http.get<Persona[]>(urlbase+"/person/persontype/2")
  }

  listarProfesores(){
   return this._http.get<Persona[]>(urlbase+"/person/persontype/1")
  }

  listarHorario(){
    return this._http.get<HorarioList[]>(urlbase+"/schedules")
   }
 


  

  constructor(private _http:HttpClient) { 
    this.listarAlumnos()
    this.listarProfesores()
  }
}
