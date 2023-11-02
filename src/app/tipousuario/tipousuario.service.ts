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

   private _menus: Menu[]= [
    {
      idmenu:1,
      nombremenu:"Persona",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:2,
      nombremenu:"Curso",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:3,
      nombremenu:"Seccion",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:4,
      nombremenu:"Horario",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:5,
      nombremenu:"Tipo Usuario",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:6,
      nombremenu:"Usuario",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:7,
      nombremenu:"Asistencia",
      iconomenu:"",
      urlmenu:""
    }

   ]

   get tipousuarios():Tipousuario[]{
    return [...this._tipousuarios];
  }

  get menus():Menu[]{
   return [...this._menus]
  }

  listarTipoUsuarios(){
    this._http.get<Tipousuario[]>(urlbase+"/usertypes").subscribe(res=>{
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


  constructor(private _http:HttpClient) { 
    this.listarTipoUsuarios()
  }
}
