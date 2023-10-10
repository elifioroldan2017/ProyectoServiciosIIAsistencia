import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { PersonaPrincipalComponent } from './persona/persona-principal/persona-principal.component';
import { CursoPrincipalComponent } from './curso/curso-principal/curso-principal.component';
import { SeccionPrincipalComponent } from './seccion/seccion-principal/seccion-principal.component';
import { CursoseccionalumnoPrincipalComponent } from './cursoseccionalumno/cursoseccionalumno-principal/cursoseccionalumno-principal.component';
import { TipousuarioPrincipalComponent } from './tipousuario/tipousuario-principal/tipousuario-principal.component';
import { UsuarioPrincipalComponent } from './usuario/usuario-principal/usuario-principal.component';
import { AsistenciaPrincipalComponent } from './asistencia/asistencia-principal/asistencia-principal.component';
import { FormPersonaComponent } from './persona/form-persona/form-persona.component';
import { FormCursoComponent } from './curso/form-curso/form-curso.component';
import { FormSeccionComponent } from './seccion/form-seccion/form-seccion.component';
import { FormCursoseccionalumnoComponent } from './cursoseccionalumno/form-cursoseccionalumno/form-cursoseccionalumno.component';
import { FormTipousuarioComponent } from './tipousuario/form-tipousuario/form-tipousuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';

const routes: Routes = [

  {
    path:"",
    component:LoginPrincipalComponent,
    pathMatch:"full"
  },
  {
    path:"persona",
    component:PersonaPrincipalComponent
  },
  {
    path:"persona/agregar",
    component:FormPersonaComponent
  },
  {
    path:"persona/editar/:id",
    component:FormPersonaComponent
  },
  {
    path:"curso",
    component:CursoPrincipalComponent
  },
  {
    path:"curso/agregar",
    component:FormCursoComponent
  },
  {
    path:"curso/editar/:id",
    component:FormCursoComponent
  },
  {
    path:"seccion",
    component:SeccionPrincipalComponent
  },
  {
    path:"seccion/agregar",
    component:FormSeccionComponent
  },
  {
    path:"seccion/editar/:id",
    component:FormSeccionComponent
  },
  {
    path:"horario",
    component:CursoseccionalumnoPrincipalComponent
  },
  {
    path:"horario/agregar",
    component:FormCursoseccionalumnoComponent
  },
  {
    path:"horario/editar/:id",
    component:FormCursoseccionalumnoComponent
  },
  {
    path:"tipousuario",
    component:TipousuarioPrincipalComponent
  },
  {
    path:"tipousuario/agregar",
    component:FormTipousuarioComponent
  },
  {
    path:"tipousuario/editar/:id",
    component:FormTipousuarioComponent
  },
  {
    path:"usuario",
    component:UsuarioPrincipalComponent
  },
  {
    path:"usuario/agregar",
    component:FormUsuarioComponent
  },
  {
    path:"usuario/editar/:id",
    component:FormUsuarioComponent
  },
  {
    path:"asistencia",
    component:AsistenciaPrincipalComponent
  },
  {
    path:"login",
    component:LoginPrincipalComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
