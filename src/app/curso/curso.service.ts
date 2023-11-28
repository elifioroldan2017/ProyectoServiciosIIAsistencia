import { Injectable } from '@angular/core';
import { Curso } from './interface/Curso';
import { Carrera } from './interface/Carrera';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private _carreras:Carrera[]=[ ]

  nombreCurso:string=""
  private _cursos : Curso[]=[ ]
  totalLength:any;
  page:number=1;

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

  buscarCursos(nombre:string){
    this._http.get<Curso[]>(urlbase+"/course/coursename/"+nombre).subscribe(res=>{
      this._cursos=res;
     }) 
   }

  listarCarreras(){
    this._http.get<Carrera[]>(urlbase+"/career").subscribe(res=>{
      this._carreras=res;
     }) 
  }

  insertarCurso(curso:Curso){
     return this._http.post<Curso>(urlbase+"/course/",curso)
  }

  actualizarCurso(curso:Curso){
    return this._http.put<Curso>(urlbase+"/course/",curso)
  }

  recuperarCurso(id:number){
    return this._http.get<Curso>(urlbase+"/course/"+id);
  }

  eliminarCurso(id:number){
    return this._http.delete(urlbase+"/course/delete/"+id);
  }

  constructor(private _http:HttpClient) { 
    this.listarCursos();
    this.listarCarreras();
  }
}
