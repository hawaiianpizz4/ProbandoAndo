export class Usuario {
    _id?: number; 
    nombre: string; 
    email: string; 
    nombreusuario: string; 
    password: string;

    constructor(nombre:string, email:string, nombreusuario:string, password: string){
        this.nombre =nombre;
        this.email =email;
        this.nombreusuario =nombreusuario;
        this.password=password;
    }
}