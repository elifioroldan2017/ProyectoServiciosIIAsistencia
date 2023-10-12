import { Injectable } from '@angular/core';
import { CursoSeccion } from './interface/CursoSeccion';

@Injectable({
  providedIn: 'root'
})
export class CursoseccionalumnoService {

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

  constructor() { }
}
