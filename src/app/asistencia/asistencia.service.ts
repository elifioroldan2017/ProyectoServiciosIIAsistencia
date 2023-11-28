import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  

  constructor(private _http:HttpClient) {

   }
}
