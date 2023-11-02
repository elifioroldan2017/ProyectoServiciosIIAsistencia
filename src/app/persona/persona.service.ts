import { Injectable } from '@angular/core';
import { Persona } from './interface/Persona';
import { Tipo } from './interface/Tipo';
import { Sexo } from './interface/Sexo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _personas:Persona[]=[ ]

  private _tipos:Tipo[]=[]

  private _sexos:Sexo[]=[
    {
      sexId:1,
      sexDescription:"Masculino",
      sexActive:"1"
    },
    {
      sexId:2,
      sexDescription:"Femenino",
      sexActive:"1"
    },
    {
      sexId:3,
      sexDescription:"Otro",
      sexActive:"1"
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

  listarTipoPersona(){
    this._http.get<Tipo[]>(urlbase+"/type").subscribe(res=>{
      this._tipos=res;
    })
  }

  listarPersonas(){
    this._http.get<Persona[]>(urlbase+"/person").subscribe(res=>{
      this._personas=res;
    })
  }

  constructor(private _http:HttpClient) { 
    this.listarTipoPersona();
    this.listarPersonas();
  }
}
