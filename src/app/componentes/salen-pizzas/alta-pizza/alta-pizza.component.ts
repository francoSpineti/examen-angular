import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { FormBuilder, FormGroup ,Validators, AbstractControl} from '@angular/forms';
import { PizzaService } from 'src/app/servicios/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  formGroup !: FormGroup;
  pizza = new Pizza;

  constructor(private formBuilder : FormBuilder,private router: Router, private pizzaService : PizzaService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
      'ingredientes' : ['',Validators.required]
    });
  }

  altaPizza(){
    this.pizza.id = (Math.floor(Math.random() * (999 - 0)) + 0);
    this.pizza.nombre = this.formGroup.controls['nombre'].value;
    this.pizza.precio = this.formGroup.controls['precio'].value;
    this.pizza.peso = this.formGroup.controls['peso'].value;
    this.pizza.ingredientes = this.formGroup.controls['ingredientes'].value;
    const retorno = this.pizzaService.guardarPizza(this.pizza.toJson());
    if(retorno){
      alert("se dio de alta una pizza");
      this.limpiar();
      this.router.navigate(['/salen-pizzas']);
    }else{
      alert("error al dar de alta la pizza");
    }
  }

  limpiar(){
    this.formGroup.controls['nombre'].setValue('');
    this.formGroup.controls['precio'].setValue('');
    this.formGroup.controls['peso'].setValue('');
    this.formGroup.controls['ingredientes'].setValue('');
  }

}
