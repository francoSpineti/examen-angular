import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  repartidorSeleccionado !: Repartidor; //variable auxiliar que es cargada por el objeto Repartidor que llega desde el evento de listado-repartidores
  constructor() { }

  ngOnInit(): void {
  }

  cargarEventoRepartidorRecibido(e : Repartidor){
    this.repartidorSeleccionado = e;
  }

}
