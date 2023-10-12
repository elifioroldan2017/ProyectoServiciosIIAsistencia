import { Injectable } from '@angular/core';
import { Curso } from './interface/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private _cursos : Curso[]=[
    {
      idcurso:1,
      nombrecurso:"Introduccion a la ALgoritmia",
      numerocreditos:3,
      nombrecarrera:"Computacion en informatica"
    },
    {
      idcurso:2,
      nombrecurso:"Algoritmo y escructuras de datos",
      numerocreditos:4,
      nombrecarrera:"Computacion en informatica"
    },
    {
      idcurso:3,
      nombrecurso:"Lenguaje de Programación I",
      numerocreditos:4,
      nombrecarrera:"Computacion en informatica"
    },
    {
      idcurso:4,
      nombrecurso:"Modelado de Procesos de Negocio",
      numerocreditos:3,
      nombrecarrera:"Administracion y sistemas"
    },
    {
      idcurso:5,
      nombrecurso:"Base de datos (Modelado y SQL Server Basic",
      numerocreditos:3,
      nombrecarrera:"Administracion y sistemas"
    },
    {
      idcurso:6,
      nombrecurso:"Desarrollo de sistemas empresariales (VB.Net)",
      numerocreditos:4,
      nombrecarrera:"Administracion y sistemas"
    }
  ]

  get cursos():Curso[]{
    return [...this._cursos]
  }  

  constructor() { 

  }
}
