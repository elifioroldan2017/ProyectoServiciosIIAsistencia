import { Injectable } from '@angular/core';
import Login from './interface/Login';
import { HttpClient } from '@angular/common/http';
import urlbase from '../constant';
import UserLogin from './interface/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  oUser: UserLogin | null = null;

  login(ologin:Login){
    return this._http.post<UserLogin>(urlbase+"/user/login",ologin);
   }

  constructor(private _http:HttpClient) { }
}
