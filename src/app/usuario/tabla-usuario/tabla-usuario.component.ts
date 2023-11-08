import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent {

  constructor(private usuarioService:UsuarioService,private routes:Router){

  }

  get usuarios(){
    return this.usuarioService.usuarios
  }

   editar(idusuario:number){
    this.routes.navigate(["usuario/editar/"+idusuario])
  }

  eliminar(idusuario:number){


    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {

        this.usuarioService.eliminarUsuario(idusuario).subscribe(res=>{
          Swal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
          this.usuarioService.listarUsuarios();
        })
      }
    });

   
  }


}
