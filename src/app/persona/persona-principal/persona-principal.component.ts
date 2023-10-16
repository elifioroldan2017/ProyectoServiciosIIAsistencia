import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-principal',
  templateUrl: './persona-principal.component.html',
  styleUrls: ['./persona-principal.component.css']
})
export class PersonaPrincipalComponent {

  constructor(private router:Router){

  }

  nuevo(){
   this.router.navigate(["/persona/agregar"])
  }

}
