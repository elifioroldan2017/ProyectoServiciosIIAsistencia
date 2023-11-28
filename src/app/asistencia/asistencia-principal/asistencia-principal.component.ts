import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-principal',
  templateUrl: './asistencia-principal.component.html',
  styleUrls: ['./asistencia-principal.component.css']
})
export class AsistenciaPrincipalComponent {
 
  constructor(private router:Router){

  }
 
  grabar(){

  }
  regresar(){
    this.router.navigate(["/mihorario"])
  }
}
