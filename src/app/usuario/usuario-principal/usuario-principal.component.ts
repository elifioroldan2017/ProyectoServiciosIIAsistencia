import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-principal',
  templateUrl: './usuario-principal.component.html',
  styleUrls: ['./usuario-principal.component.css']
})
export class UsuarioPrincipalComponent {

  nombreUsuario:string=""
  constructor(private routes:Router,private usuarioService:UsuarioService){

  }

  cambiar(event:any){
    this.usuarioService.nombreUsuario= event.target.value;
  }
  
  agregar(){
    this.routes.navigate(["usuario/agregar"])
  }

  buscarUsuario(){
    this.usuarioService.page=1
    console.log("Valor "+this.usuarioService.nombreUsuario)
    if(this.usuarioService.nombreUsuario==""){
      this.usuarioService.listarUsuarios();
    }else{
      this.usuarioService.buscarUsuarioPorName(this.usuarioService.nombreUsuario)
    }
  }

  limpiar(){
    this.nombreUsuario=""
    this.usuarioService.nombreUsuario=""
    this.usuarioService.listarUsuarios()
  }

}
