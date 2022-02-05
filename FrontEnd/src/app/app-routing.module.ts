import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { AuthGuard } from "./auth.guard";
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListarProductosEdicionComponent } from './components/listar-productos-edicion/listar-productos-edicion.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path:'beneficios',component:BeneficiosComponent},
  {path:'iniciarsesion',component:IniciarsesionComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path: 'listar-producto', component: ListarProductosComponent, canActivate: [AuthGuard]},
  {path: 'crear-producto', component: CrearProductoComponent, canActivate: [AuthGuard]},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'listar-usuario', component: ListarUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'editar-usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: TasksComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'listar-producto-edicion', component: ListarProductosEdicionComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
