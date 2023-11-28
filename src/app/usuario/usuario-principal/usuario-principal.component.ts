import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-principal',
  templateUrl: './usuario-principal.component.html',
  styleUrls: ['./usuario-principal.component.css']
})
export class UsuarioPrincipalComponent {

  nombreUsuario:string=""
  constructor(private routes:Router){

  }
  
  agregar(){
    this.routes.navigate(["usuario/agregar"])
  }

  buscarUsuario(){

  }

  limpiar(){
    
  }

}
