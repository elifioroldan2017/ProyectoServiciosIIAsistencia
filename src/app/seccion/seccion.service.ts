import { Injectable } from '@angular/core';
import { Seccion } from './interface/Seccion';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private _seccion:Seccion[]=[]

  get secciones(){
    return [...this._seccion]
  }

  listarSeccion(){
      this.http.get<Seccion[]>(urlbase+"/section").subscribe(res=>{
        this._seccion=res;
      })
  }

  insertarSeccion(oseccion:Seccion){
    return this.http.post<Seccion>(urlbase+"/section/",oseccion)
  }

  recuperarSeccion(id:number){
    return this.http.get<Seccion>(urlbase+"/section/"+id)
  }

  eliminarSeccion(id:number){
    return this.http.delete(urlbase+"/section/"+id)
  }

  actualizarSeccion(oseccion:Seccion){
    return this.http.put<Seccion>(urlbase+"/section/",oseccion)
  }

  constructor(private http:HttpClient) {
    this.listarSeccion();
   }
}
