import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarios:Usuario[]=[
    {
      idusuario:1,
      nombreusuario:"omurillo",
      nombrepersona:"Oscar Murillo",
      nombretipousuario:"Docente"
    },
    {
      idusuario:2,
      nombreusuario:"jatuncar",
      nombrepersona:"Jose Atuncar	",
      nombretipousuario:"Docente"
    }
   ]

   get usuarios():Usuario[]{
    return [...this._usuarios]
   }
  
  constructor() { }
}
