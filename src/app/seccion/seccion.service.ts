import { Injectable } from '@angular/core';
import { Seccion } from './interface/Seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private _seccion:Seccion[]=[
    {
      idseccion:1,
      nombreseccion:"T1NM",
      numerociclo:1
    },
    {
      idseccion:2,
      nombreseccion:"T1GM",
      numerociclo:1
    },
    {
      idseccion:3,
      nombreseccion:"T1ZM",
      numerociclo:1
    },
    {
      idseccion:4,
      nombreseccion:"T2PM",
      numerociclo:2
    },
    {
      idseccion:5,
      nombreseccion:"T2CM",
      numerociclo:2
    },
    {
      idseccion:6,
      nombreseccion:"T2AM",
      numerociclo:2
    }

  ]

  get secciones(){
    return [...this._seccion]
  }

  constructor() { }
}
