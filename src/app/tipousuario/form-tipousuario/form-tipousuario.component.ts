import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipousuarioService } from '../tipousuario.service';
import { Menu } from '../interface/Menu';
import { Tipousuario } from '../interface/TipoUsuario';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-tipousuario',
  templateUrl: './form-tipousuario.component.html',
  styleUrls: ['./form-tipousuario.component.css']
})
export class FormTipousuarioComponent {
  titulo:string="";
  tipousuario:Tipousuario={
    userTypeId:0,
    name:"",
    active:"1"
  }
  constructor(private routes:ActivatedRoute,private router:Router,private tipousuarioService:TipousuarioService){
    const parametroValor = this.routes.snapshot.params['id'];
    if(parametroValor==undefined) this.titulo="Nuevo Tipo usuario"
    else {
      this.titulo="Editar Tipo usuario"
      this.tipousuarioService.recuperarTipoUsuario(Number(parametroValor)).subscribe(res=>{
        this.tipousuario=res;
      }) 
    }
  }

  guardar(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos del tipo usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
       

      }
    });

  }

   get menus():Menu[]{
    return this.tipousuarioService.menus
   }

  regresar(){
    this.router.navigate(["tipousuario"])
  }
}
