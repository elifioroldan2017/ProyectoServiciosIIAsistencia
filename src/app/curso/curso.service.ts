import { Injectable } from '@angular/core';
import { Curso } from './interface/Curso';
import { Carrera } from './interface/Carrera';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private _carreras:Carrera[]=[
    {
      idcarrera:1,
      nombrecarrera:"Computacion en informatica"
    },
    {
      idcarrera:2,
      nombrecarrera:"Administracion y sistemas"
    }
  ]


  private _cursos : Curso[]=[
    {
      idcurso:1,
      nombrecurso:"Introduccion a la Algoritmia",
      numerocreditos:3,
      nombrecarrera:"Computacion en informatica"
    },
    {
      idcurso:2,
      nombrecurso:"Algoritmo y estructuras de datos",
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
      nombrecurso:"Base de datos (Modelado y SQL Server Basic)",
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

  get carreras():Carrera[]{
    return [...this._carreras]
  }  

  constructor() { 

  }
}
