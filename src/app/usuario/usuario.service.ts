import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarios:Usuario[]=[]

   get usuarios():Usuario[]{
    return [...this._usuarios]
   }

   listarUsuarios(){
    this._http.get<Usuario[]>(urlbase+"/user").subscribe(res=>{
      this._usuarios=res;
    })
   }

   recuperarUsuario(id:number){
    return this._http.get<Usuario>(urlbase+"/user/"+id)
   }

   insertarUsuario(ousuario:Usuario){
    return this._http.post<Usuario>(urlbase+"/user/",ousuario)
   }

   actualizarUsuario(ousuario:Usuario){
    return this._http.put<Usuario>(urlbase+"/user/",ousuario)
   }
  
  constructor(private _http:HttpClient) {
    this.listarUsuarios()

   }
}
