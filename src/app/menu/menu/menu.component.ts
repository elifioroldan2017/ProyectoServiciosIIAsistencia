import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import Menu from 'src/app/login/interface/Menu';
import { LoginService } from 'src/app/login/login.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  nombreCompleto:string=""

  constructor(private loginService:LoginService,private usuarioService:UsuarioService, private router:Router)
  {
  
    var data = this.usuarioService.obtenerUsuarioDesdeStorage()
    if(data!=null)
    this.nombreCompleto= data.name+" "+data.lastname1+" "+data.lastname2
  }

  cerrarSesion(){
    this.usuarioService.eliminarUsuarioDelStorage();
    this.loginService.oUser=null
    this.router.navigate(["/"])
  }

  get menus(){
    var data= this.usuarioService.obtenerUsuarioDesdeStorage()
    var menus:Menu[] = data.menus
    return menus
  }

  
}
