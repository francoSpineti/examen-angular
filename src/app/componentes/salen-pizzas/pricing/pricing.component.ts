import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pizzaSeleccionada !: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

  cargarEventoRepartidorRecibido(e : Pizza){
    this.pizzaSeleccionada = e;
  }

}
