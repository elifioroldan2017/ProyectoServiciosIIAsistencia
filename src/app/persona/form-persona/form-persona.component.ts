import { Component, ViewChild } from '@angular/core';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../interface/Persona';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {

  @ViewChild('personaForm') form !: NgForm;

  titulo:string="";
  persona:Persona={
    personId: 0,
    personName: "",
    personLastname1: "",
    personLastname2: "",
    personEmail: "",
    personAddress: "",
    sexId: 0,
    typeId: 0,
    personBirthdate: "",
    personPhone: "",
    personActive: "",
    personHasUser: true,
  }
  constructor(private personaService:PersonaService,private router:Router,
    private activateRoute:ActivatedRoute){
    var id= activateRoute.snapshot.params["id"]
    if(id==undefined) this.titulo="Agregar Persona"
    else {
      this.titulo="Editar Persona"
      this.personaService.obtenerPersona(Number(id)).subscribe(res=>{
        this.persona=res;
      })
    }
  }

  guardar(){


    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los datos de la persona?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes ejecutar la lógica para eliminar el elemento
        if(this.persona.personId==0){
          this.personaService.insertarPersona(this.persona).subscribe(res=>{
            Swal.fire('Exito!', 'Se guardó los cambios correctamente', 'success');
            this.router.navigate(["/persona"])
            this.personaService.listarPersonas();
          })
        }else{
          this.personaService.actualizarPersona(this.persona).subscribe(res=>{
            Swal.fire('Exito!', 'Se actualizó los cambios correctamente', 'success');
            this.router.navigate(["/persona"])
            this.personaService.listarPersonas();
          })
        }

      }
    });


   
  }

  regresar(){
    this.router.navigate(["/persona"])

  }
  get sexos(){
    return this.personaService.sexos;
  }

  get tipos(){
    return this.personaService.tipos
  }

}
