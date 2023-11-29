import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoseccionalumnoService } from '../cursoseccion.service';

@Component({
  selector: 'app-cursoseccion-principal',
  templateUrl: './cursoseccion-principal.component.html',
  styleUrls: ['./cursoseccion-principal.component.css']
})
export class CursoseccionPrincipalComponent {

  constructor(private router:Router,private horarioService:CursoseccionalumnoService){

  }

  nuevo(){
    this.router.navigate(["horario/agregar"])
    
  }
}
