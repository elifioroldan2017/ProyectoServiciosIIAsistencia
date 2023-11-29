import { Component } from '@angular/core';
import Login from '../interface/Login';
import { LoginService } from '../login.service';
import UserLogin from '../interface/UserLogin';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css']
})
export class LoginPrincipalComponent {
  
  constructor(private servicioLogin:LoginService,private usuarioService:UsuarioService,
    private router:Router){

  }

  oLogin:Login={
    username:"",
    password:""
  }
  
  mostrarContrasena: boolean = false;

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  enviar(){
    console.log(this.oLogin.username)
    console.log(this.oLogin.password)
    this.servicioLogin.login(this.oLogin).subscribe((res: UserLogin)=>{
      var nombrecompleto= res.name+" "+res.lastname1+" "+res.lastname2
      Swal.fire('Bienvenido!', 'Bievenido al Sistema '+nombrecompleto, 'success');
      this.servicioLogin.oUser=res;
      this.usuarioService.guardarUsuarioEnStorage(this.servicioLogin.oUser)
      this.router.navigate(["/inicio"])
    },(error) => {
      Swal.fire('Error', 'Usuario y/o contraseña incorrecta', 'error');
    })
  }

}
