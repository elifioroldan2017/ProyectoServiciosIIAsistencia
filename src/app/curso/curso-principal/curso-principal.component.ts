import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-principal',
  templateUrl: './curso-principal.component.html',
  styleUrls: ['./curso-principal.component.css']
})
export class CursoPrincipalComponent {

  constructor(private router:Router){

  }

  nuevo(){
    this.router.navigate(["curso/agregar"])

  }


}
