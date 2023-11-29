import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { PersonaPrincipalComponent } from './persona/persona-principal/persona-principal.component';
import { CursoPrincipalComponent } from './curso/curso-principal/curso-principal.component';
import { SeccionPrincipalComponent } from './seccion/seccion-principal/seccion-principal.component';
import { CursoseccionPrincipalComponent } from './cursoseccion/cursoseccion-principal/cursoseccion-principal.component';
import { TipousuarioPrincipalComponent } from './tipousuario/tipousuario-principal/tipousuario-principal.component';
import { UsuarioPrincipalComponent } from './usuario/usuario-principal/usuario-principal.component';
import { AsistenciaPrincipalComponent } from './asistencia/asistencia-principal/asistencia-principal.component';
import { FormPersonaComponent } from './persona/form-persona/form-persona.component';
import { FormCursoComponent } from './curso/form-curso/form-curso.component';
import { FormSeccionComponent } from './seccion/form-seccion/form-seccion.component';
import { FormCursoseccionComponent } from './cursoseccion/form-cursoseccional/form-cursoseccion.component';
import { FormTipousuarioComponent } from './tipousuario/form-tipousuario/form-tipousuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import { guardsGuard } from './login/guards.guard';
import { MisCursosComponent } from './asistencia/mis-cursos/mis-cursos.component';
import { MisMarcacionesComponent } from './asistencia/mis-marcaciones/mis-marcaciones.component';

const routes: Routes = [

  {
    path:"",
    component:LoginPrincipalComponent,
    pathMatch:"full"
  },
  {
    path:"persona",
    component:PersonaPrincipalComponent,
    canActivate:[guardsGuard]

  },
  {
    path:"persona/agregar",
    component:FormPersonaComponent,
    canActivate:[guardsGuard]

  },
  {
    path:"persona/editar/:id",
    component:FormPersonaComponent,
    canActivate:[guardsGuard]

  },
  {
    path:"curso",
    component:CursoPrincipalComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"curso/agregar",
    component:FormCursoComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"curso/editar/:id",
    component:FormCursoComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"seccion",
    component:SeccionPrincipalComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"seccion/agregar",
    component:FormSeccionComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"seccion/editar/:id",
    component:FormSeccionComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"horario",
    component:CursoseccionPrincipalComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"horario/agregar",
    component:FormCursoseccionComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"horario/editar/:id",
    component:FormCursoseccionComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"tipousuario",
    component:TipousuarioPrincipalComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"tipousuario/agregar",
    component:FormTipousuarioComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"tipousuario/editar/:id",
    component:FormTipousuarioComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"usuario",
    component:UsuarioPrincipalComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"usuario/agregar",
    component:FormUsuarioComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"usuario/editar/:id",
    component:FormUsuarioComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"asistencia/:id",
    component:AsistenciaPrincipalComponent,
    canActivate:[guardsGuard]
  },  {
    path:"mihorario",
    component:MisCursosComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"mihorario",
    component:MisCursosComponent,
    canActivate:[guardsGuard]
  },
  {
    path:"mismarcaciones",
    component:MisMarcacionesComponent,
    canActivate:[guardsGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
