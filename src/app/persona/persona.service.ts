import { Injectable } from '@angular/core';
import { Persona } from './interface/Persona';
import { Tipo } from './interface/Tipo';
import { Sexo } from './interface/Sexo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _personas:Persona[]=[
    {
      idpersona:1,
      nombrecompleto:"Elifio Roldan Huayllasco",
      telefonocelular:"995566400",
      sexo:"Masculino",
      tipo:"Alumno"
    },
    {
      idpersona:2,
      nombrecompleto:"Hugo Pastor Vasquez",
      telefonocelular:"995566400",
      sexo:"Masculino",
      tipo:"Alumno"

    },
    {
      idpersona:3,
      nombrecompleto:"Felix Torres Terreros",
      telefonocelular:"995566400",
      sexo:"Masculino",
      tipo:"Alumno"
    },
    {
      idpersona:4,

      nombrecompleto:"Luis Calderon Tocto",
      telefonocelular:"995566400",
      sexo:"Masculino",
      tipo:"Alumno"
    },
    {
      idpersona:5,
      nombrecompleto:"Cristhofer Arismendiz Umbo",
      telefonocelular:"995566400",
      sexo:"Masculino",
      tipo:"Alumno"
    },
    {
      idpersona:6,
      nombrecompleto:"Oscar Murillo ",
      telefonocelular:"89745685",
      sexo:"Masculino",
      tipo:"Profesor"
    },
    {
      idpersona:7,
      nombrecompleto:"Jose Atuncar ",
      telefonocelular:"98745632",
      sexo:"Masculino",
      tipo:"Profesor"
    }
  ]

  private _tipos:Tipo[]=[
    {
      idtipo:1,
      nombretipo:"Alumno"
    },
    {
      idtipo:2,
      nombretipo:"Profesor"
    }
  ]

  private _sexos:Sexo[]=[
    {
      idsexo:1,
      nombre:"Masculino"
    },
    {
      idsexo:2,
      nombre:"Femenino"
    }
  ]

  get tipos(){
    return [...this._tipos]
  }

  get sexos(){
    return [...this._sexos]
  }

  get personas():Persona[]{
    return [...this._personas]
  }

  constructor() { }
}
