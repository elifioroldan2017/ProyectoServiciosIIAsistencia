import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursoseccion-principal',
  templateUrl: './cursoseccion-principal.component.html',
  styleUrls: ['./cursoseccion-principal.component.css']
})
export class CursoseccionPrincipalComponent {

  constructor(private router:Router){

  }

  nuevo(){
    this.router.navigate(["horario/agregar"])
  }
}
