import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-listar-pizzas',
  templateUrl: './listar-pizzas.component.html',
  styleUrls: ['./listar-pizzas.component.css']
})
export class ListarPizzasComponent implements OnInit {

  listaPizzas !: any;
  @Output() eventoPizzaSeleccionada : EventEmitter<any> = new EventEmitter<any>();

  constructor(private pizzaService : PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(ref=>{
      this.listaPizzas = ref;
    });
  }

  llamarEvento(e: Pizza){  
    this.eventoPizzaSeleccionada.emit(e);
}

}
