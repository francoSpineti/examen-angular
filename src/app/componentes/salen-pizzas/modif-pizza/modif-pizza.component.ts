import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { FormBuilder, FormGroup ,Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-modif-pizza',
  templateUrl: './modif-pizza.component.html',
  styleUrls: ['./modif-pizza.component.css']
})
export class ModifPizzaComponent implements OnInit,OnChanges {

  @Input() pizzaSeleccionada !: Pizza;
  formGroup !: FormGroup;

  constructor(private formBuilder : FormBuilder,private router: Router, private pizzaService : PizzaService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
      'ingredientes' : ['',Validators.required]
    });
  }

  ngOnChanges(){
     this.formGroup.controls['nombre'].setValue(this.pizzaSeleccionada.nombre);
     this.formGroup.controls['peso'].setValue(this.pizzaSeleccionada.peso);
     this.formGroup.controls['precio'].setValue(this.pizzaSeleccionada.precio);
     this.formGroup.controls['ingredientes'].setValue(this.pizzaSeleccionada.ingredientes);
  }

  modificarPizza(){
    let aux = new Pizza;
    aux.id = this.pizzaSeleccionada.id;
    aux.nombre = this.formGroup.controls['nombre'].value;
    aux.peso = this.formGroup.controls['peso'].value;
    aux.precio = this.formGroup.controls['precio'].value;
    aux.ingredientes =this.formGroup.controls['ingredientes'].value;
    const retorno = this.pizzaService.modificarPizza(aux);
    if(retorno){
      alert("pizza modificada con exito.");
      this.limpiar();
      this.router.navigate(['/salen-pizzas']);
    }else{
      alert("error al modificar la pizza.");
    }
  }

  limpiar(){
    this.formGroup.controls['nombre'].setValue('');
    this.formGroup.controls['precio'].setValue('');
    this.formGroup.controls['peso'].setValue('');
    this.formGroup.controls['ingredientes'].setValue('');
  }

  public limpiarPizza(){
    this.pizzaSeleccionada = null;
  }

}
