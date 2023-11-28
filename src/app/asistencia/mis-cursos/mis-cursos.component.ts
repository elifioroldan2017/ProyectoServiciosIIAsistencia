import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent {

  constructor(private router:Router){

  }
  navegar(){
    this.router.navigate([""])
  }
}
