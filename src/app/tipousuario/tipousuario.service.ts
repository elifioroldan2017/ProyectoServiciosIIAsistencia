import { Injectable } from '@angular/core';
import { Tipousuario } from './interface/TipoUsuario';
import { Menu } from './interface/Menu';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  private _tipousuarios: Tipousuario[] = []

   private _menus: Menu[]= []

   get tipousuarios():Tipousuario[]{
    return [...this._tipousuarios];
  }

  get menus():Menu[]{
   return [...this._menus]
  }

  listarMenus(){
    this._http.get<Menu[]>(urlbase+"/menu").subscribe(res=>{
      this._menus=res;
    })
  }

  listarTipoUsuarios(){
    this._http.get<Tipousuario[]>(urlbase+"/usertypes").subscribe(res=>{
      this._tipousuarios=res;
    })
  }

  buscarTipoUsuarios(nombre:string){
    this._http.get<Tipousuario[]>(urlbase+"/usertypes/usertypename/"+nombre).subscribe(res=>{
      this._tipousuarios=res;
    })
  }

  recuperarTipoUsuario(id:number){
    return  this._http.get<Tipousuario>(urlbase+"/usertypes/"+id);
  }

  insertarTipoUsuario(otipousuario:Tipousuario){
    return  this._http.post<Tipousuario>(urlbase+"/usertypes/",otipousuario);
  }

  actualizarTipoUsuario(otipousuario:Tipousuario){
    return  this._http.put<Tipousuario>(urlbase+"/usertypes/",otipousuario);
  }

  eliminarTipoUsuario(id:number){
    return this._http.delete(urlbase+"/usertypes/delete/"+id);
  }


  constructor(private _http:HttpClient) { 
    this.listarTipoUsuarios()
    this.listarMenus();
  }
}
