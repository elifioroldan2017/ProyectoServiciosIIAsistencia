import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-principal',
  templateUrl: './seccion-principal.component.html',
  styleUrls: ['./seccion-principal.component.css']
})
export class SeccionPrincipalComponent {
  
  constructor(private router:Router){

  }
  
  nuevo(){
    this.router.navigate(["seccion/agregar"])
  }
}
