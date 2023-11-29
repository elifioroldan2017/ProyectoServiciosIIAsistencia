import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona/persona.service';
import { Tipousuario } from 'src/app/tipousuario/interface/TipoUsuario';
import { TipousuarioService } from 'src/app/tipousuario/tipousuario.service';
import { Usuario } from '../interface/Usuario';
import { UsuarioService } from '../usuario.service';
import { Persona } from 'src/app/persona/interface/Persona';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  titulo:string=""
  personasList:Persona[]=[]
  usuario:Usuario={
    userId: 0,
    personId: 0,
    username: "",
    password: "",
    usertype: 0,
    active: ""
  }
  constructor(private tipousuarioService:TipousuarioService,private personaService:PersonaService,private routes:Router ,private activateRoute:ActivatedRoute,
    private usuarioService:UsuarioService){
      var param=this.activateRoute.snapshot.params["id"]
      if(param==undefined) {
        this.titulo="Nuevo Usuario"
        this.listarPersonasSinUsuario()
      }
      else { 
        this.titulo="Editar Usuario"
        this.usuarioService.recuperarUsuario(Number(param)).subscribe(res=>{
          this.usuario=res;
        })
      }
  }

  get tipousuarios(){
    return this.tipousuarioService.tipousuarios
  }

  listarPersonasSinUsuario(){
    this.personaService.listarPersonasSinUsuario().subscribe(res=>{
      this.personasList=res;
    })
  }
  
  regresar(){
    this.routes.navigate(["usuario"])
  }

  guardar(){

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos del usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {

        
          if(this.usuario.userId==0)
          {
            this.usuarioService.insertarUsuario(this.usuario).subscribe(res=>{
              this.routes.navigate(["usuario"])
              Swal.fire('Exito!', 'Se  guardó los cambios correctamente', 'success');
              this.usuarioService.listarUsuarios();
            },(err)=>{
              Swal.fire('Ocurrio un error', err.error, 'error');
           })
          }else{
            this.usuarioService.actualizarUsuario(this.usuario).subscribe(res=>{
              Swal.fire('Exito!', 'Se  actualizó los cambios correctamente', 'success');
              this.routes.navigate(["usuario"])
              this.usuarioService.listarUsuarios();
            },(err)=>{
              Swal.fire('Ocurrio un error', err.error, 'error');
           })
          } 

      }
    });


 }



}
