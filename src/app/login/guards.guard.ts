import { CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class guardsGuard{

 
  constructor(private router: Router,private usuarioService:UsuarioService) {}

  canLoad(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    console.log(this.usuarioService.obtenerUsuarioDesdeStorage())
    if(this.usuarioService.obtenerUsuarioDesdeStorage()==null){
      this.router.navigate(["/"])
      return false;
    }
    return true;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(this.usuarioService.obtenerUsuarioDesdeStorage())
    if(this.usuarioService.obtenerUsuarioDesdeStorage()==null){
      this.router.navigate(["/"])
      return false;
    }
    return true;
  }
};

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(guardsGuard).canActivate(next, state);
}