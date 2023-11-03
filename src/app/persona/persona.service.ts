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

  private _sexos:Sexo[]=[ ]

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

  listarSexo(){
    this._http.get<Sexo[]>(urlbase+"/sex").subscribe(res=>{
      this._sexos=res;
    })
  }

  obtenerPersona(id:number){
    return this._http.get<Persona>(urlbase+"/person/"+id);
  }


  insertarPersona(opersona:Persona){
    return this._http.post<Persona>(urlbase+"/person/",opersona)
  }

  actualizarPersona(opersona:Persona){
    return this._http.put<Persona>(urlbase+"/person/",opersona)
  }


  constructor(private _http:HttpClient) { 
    this.listarTipoPersona();
    this.listarPersonas();
    this.listarSexo();
  }
}
