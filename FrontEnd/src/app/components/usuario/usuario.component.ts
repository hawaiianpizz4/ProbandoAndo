import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo="Crear Usuario";
  id: string | null;


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService, 
    private _usuarioService:UsuarioService,
    private aRouter: ActivatedRoute) { 
    
      this.usuarioForm=this.fb.group({
      nombre:['', Validators.required],
      email:['', Validators.required],
      nombreusuario:['', Validators.required],
      password:['', Validators.required],
    })
    this.id= this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  // Agregar Usuario
  agregarUsuario(){
    const USUARIO: Usuario={
      nombre: this.usuarioForm.get('nombre')?.value,
      email: this.usuarioForm.get('email')?.value,
      nombreusuario: this.usuarioForm.get('nombreusuario')?.value,
      password: this.usuarioForm.get('password')?.value
    }

    if(this.id !==null){
      // editamos producto
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('¡El usuario se actualizo correctamente!', 'Usuario Registrado');
        this.router.navigate(['/listar-usuario']);
      },error =>{
        console.log(error);
        this.usuarioForm.reset();
      })
    }
    else{
    // Agregamos usuario
    console.log(USUARIO);
    this._usuarioService.guardarUsuario(USUARIO).subscribe(data=>{
      this.toastr.success('Usuario Agregado Perfectamente', 'Creación Usuario')
      this.router.navigate(['/listar-usuario']);
    }, error=>{
      console.log(error)
      this.usuarioForm.reset();
    })
    
  }
}

  esEditar(){
    if(this.id !==null){
      this.titulo='Editar Usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.usuarioForm.setValue({
          nombre: data.nombre,
          email: data.email, 
          nombreusuario: data.nombreusuario,
          password: data.password
        })
      })
    }
  }

  
  


}
