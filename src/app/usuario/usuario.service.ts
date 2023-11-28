import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';
import UserLogin from '../login/interface/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarios:Usuario[]=[]
  totalLength:any;
  page:number=1;
  nombreUsuario:string=""

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

   eliminarUsuario(id:number){
    return this._http.delete(urlbase+"/user/"+id)
   }

   insertarUsuario(ousuario:Usuario){
    return this._http.post<Usuario>(urlbase+"/user/",ousuario)
   }

   actualizarUsuario(ousuario:Usuario){
    return this._http.put<Usuario>(urlbase+"/user/",ousuario)
   }

   buscarUsuarioPorName(name:string){
     this._http.get<Usuario[]>(urlbase+"/user/username/"+name).subscribe(res=>{
      this._usuarios=res;
     })

   }

   guardarUsuarioEnStorage(usuario: UserLogin): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
   }
  
   obtenerUsuarioDesdeStorage(): any {
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(usuarioString) : null;
  } 
  
   eliminarUsuarioDelStorage(): void {
    localStorage.removeItem('usuario');
   }
  
  constructor(private _http:HttpClient) {
    this.listarUsuarios()

   }
}
