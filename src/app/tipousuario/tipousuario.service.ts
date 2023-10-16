import { Injectable } from '@angular/core';
import { Tipousuario } from './interface/TipoUsuario';
import { Menu } from './interface/Menu';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  private _tipousuarios: Tipousuario[] = [
    {
      idtipousuario:1,
      nombretipousuario:"Docente",
      descripciontipousuario:"Registra asistencia"
    },
    {
      idtipousuario:2,
      nombretipousuario:"Administrador",
      descripciontipousuario:"Administra la aplicación"
    }
   ]

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


  constructor() { }
}
