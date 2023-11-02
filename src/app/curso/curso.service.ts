import { Injectable } from '@angular/core';
import { Curso } from './interface/Curso';
import { Carrera } from './interface/Carrera';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private _carreras:Carrera[]=[
    {
     careerId:1,
     careerName:"Computacion e informatica",
     careerDescription:"Computacion e informatica",
     careerActive:"1"
    },
    {
      careerId:2,
      careerName:"Administracion y sistemas",
      careerDescription:"Administracion y sistemas",
      careerActive:"1"

    }
  ]


  private _cursos : Curso[]=[ ]

  get cursos():Curso[]{
    return [...this._cursos]
  }  

  get carreras():Carrera[]{
    return [...this._carreras]
  }  

  listarCursos(){
   this._http.get<Curso[]>(urlbase+"/course").subscribe(res=>{
    this._cursos=res;
   }) 
  }

  constructor(private _http:HttpClient) { 
    this.listarCursos();
  }
}
