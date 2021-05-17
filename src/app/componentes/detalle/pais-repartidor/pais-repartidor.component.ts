import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-pais-repartidor',
  templateUrl: './pais-repartidor.component.html',
  styleUrls: ['./pais-repartidor.component.css']
})
export class PaisRepartidorComponent implements OnInit {

  @Input() repartidorSeleccionado !: Repartidor;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
