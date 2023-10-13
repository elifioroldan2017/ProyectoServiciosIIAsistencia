import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.css']
})
export class FormSeccionComponent {
  titulo:string="";

  constructor(private router:Router,private activateRoute:ActivatedRoute){
    var id= activateRoute.snapshot.params["id"]
    if(id==undefined) this.titulo="Agregar Sección"
    else this.titulo="Editar Sección"
  }

  regresar(){
    this.router.navigate(["seccion"])
  }
}
