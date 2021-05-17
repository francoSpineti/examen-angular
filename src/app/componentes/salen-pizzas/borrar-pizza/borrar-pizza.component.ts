import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {

  @Input() pizzaSeleccionada !: Pizza;

  constructor(private pizzaService : PizzaService,private router: Router) { }

  ngOnInit(): void {
  }

  borrar(){
    if(confirm("Desea eliminar la pizza con el id: " + this.pizzaSeleccionada.id)){
        this.pizzaService.borrarPizza(this.pizzaSeleccionada);
        this.pizzaSeleccionada = null;
        this.router.navigate(['/salen-pizzas']);
    }
  }

}
