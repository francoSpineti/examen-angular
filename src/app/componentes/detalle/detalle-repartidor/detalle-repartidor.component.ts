import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent implements OnInit {

  @Input() repartidorSeleccionado !: Repartidor;

  constructor() {
    //this.repartidorSeleccionado = new Repartidor;
  }

  ngOnInit(): void {
  }

}
