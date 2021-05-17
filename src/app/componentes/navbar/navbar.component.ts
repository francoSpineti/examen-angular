import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {

  estaLogueado : boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.verificarUsuario();
  }

  ngOnChanges():void{
    this.verificarUsuario();
  }

  verificarUsuario(){
    this.estaLogueado = this.authService.estaLogueado();
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
    this.estaLogueado = false;
  }

}
