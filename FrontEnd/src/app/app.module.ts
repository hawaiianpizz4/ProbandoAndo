import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { FooterComponent } from './components/footer/footer.component';

import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TokenInterceptorComponent } from './components/token-interceptor/token-interceptor.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListarProductosEdicionComponent } from './components/listar-productos-edicion/listar-productos-edicion.component';




@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    BeneficiosComponent,
    FooterComponent,
    IniciarsesionComponent,
    InicioComponent,
    NavbarComponent,
    RegistrarseComponent,
    UsuarioComponent,
    ListarUsuarioComponent,
    PrivateTasksComponent,
    SigninComponent,
    TasksComponent,
    TokenInterceptorComponent,
    SignupComponent,
    ListarProductosEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
