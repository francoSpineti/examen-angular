import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data !: AngularFirestoreCollection<any>;
  usuariosEnLinea !: Observable<any[]>;

  constructor(private firebaseAuth : AngularFireAuth, private router: Router,private afs: AngularFirestore){}

  async iniciarSesion(user : Usuario){
    let result = await this.firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
    .then(res =>{
      localStorage.setItem('user',JSON.stringify(user.toJson()));
      this.router.navigate(['/bienvenido']);
    },
    error => alert("No se puedo iniciar sesison.")
    );
  }

  async registrarse(user : Usuario) {
    try {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password);
      localStorage.setItem('user',JSON.stringify(user.toJson()));
      this.router.navigate(['/bienvenido']);
      return result;
    } catch (error) {
      throw error.message;
    }
  }

  async cerrarSesion() {
    await this.firebaseAuth.signOut();
    /* let obj = localStorage.getItem('user');
    let cadena : any = obj?.split(":",6)[4];
    let email = cadena.split(",")[0];
    let email2 = email.split('"'); */
    
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  estaLogueado() : boolean{
    return localStorage.getItem("user") != null ? true : false;
  }

  esADmin() : boolean{
    let obj = JSON.parse(localStorage.getItem("user"));
    let retorno : boolean = false;
    if(obj != null){
      obj.perfil === "admin" ? retorno=true : retorno=false;
    }
    return retorno;
  }

}
