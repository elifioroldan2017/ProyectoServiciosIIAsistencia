import { Injectable } from '@angular/core';
import { CursoSeccion } from './interface/CursoSeccion';
import { Persona } from '../persona/interface/Persona';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CursoseccionalumnoService {
  private _alumnos: Persona[] =[]
  private _profesores: Persona[] =[]

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

  get horarios():CursoSeccion[]{
    return [...this._horarios]
  }

  get alumnos():Persona[]{
    return [...this._alumnos]
  }

  get profesores():Persona[]{
    return [...this._profesores]
  }

  listarAlumnos(){
    this._http.get<Persona[]>(urlbase+"/person/persontype/2").subscribe(res=>{
      this._alumnos=res;
    })
  }

  listarProfesores(){
    this._http.get<Persona[]>(urlbase+"/person/persontype/1").subscribe(res=>{
      this._profesores=res;
    })
  }

  constructor(private _http:HttpClient) { 
    this.listarAlumnos()
    this.listarProfesores()
  }
}
