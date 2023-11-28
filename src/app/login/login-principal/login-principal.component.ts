import { Component } from '@angular/core';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css']
})
export class LoginPrincipalComponent {
  mostrarContrasena: boolean = false;

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
