import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona/persona.service';
import { Tipousuario } from 'src/app/tipousuario/interface/TipoUsuario';
import { TipousuarioService } from 'src/app/tipousuario/tipousuario.service';
import { Usuario } from '../interface/Usuario';
import { UsuarioService } from '../usuario.service';
import { Persona } from 'src/app/persona/interface/Persona';

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
    user: "",
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
    if(this.usuario.userId==0)
    {
      this.usuarioService.insertarUsuario(this.usuario).subscribe(res=>{
        this.routes.navigate(["usuario"])
        this.usuarioService.listarUsuarios();
      })
    }else{
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(res=>{
        this.routes.navigate(["usuario"])
        this.usuarioService.listarUsuarios();
      })
    } 
 }



}
