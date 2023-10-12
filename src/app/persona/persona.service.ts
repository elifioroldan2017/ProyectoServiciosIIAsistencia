import { Injectable } from '@angular/core';
import { Persona } from './interface/Persona';

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

  get personas():Persona[]{
    return [...this._personas]
  }

  constructor() { }
}
