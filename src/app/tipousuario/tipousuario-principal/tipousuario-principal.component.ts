import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipousuarioService } from '../tipousuario.service';

@Component({
  selector: 'app-tipousuario-principal',
  templateUrl: './tipousuario-principal.component.html',
  styleUrls: ['./tipousuario-principal.component.css']
})
export class TipousuarioPrincipalComponent {

  nombreTipoUsuario:string=""
  constructor(private router:Router,private tipousuarioService:TipousuarioService){

  }

  nuevo(){
    this.router.navigate(["/tipousuario/agregar"])
  }


  buscarTipoUsuario(){
    if(this.nombreTipoUsuario==""){
      this.tipousuarioService.listarTipoUsuarios();
    }else{
      this.tipousuarioService.buscarTipoUsuarios(this.nombreTipoUsuario)
    }
  }

}
