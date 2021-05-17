import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { BorrarPizzaComponent } from './borrar-pizza/borrar-pizza.component';
import { ModifPizzaComponent } from './modif-pizza/modif-pizza.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
   { path: '', component: PricingComponent },
   { path: 'altaPizza', component: AltaPizzaComponent },
   { path: 'modifPizza', component: ModifPizzaComponent },
   { path: 'borrarPizza', component: BorrarPizzaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalenPizzasRoutingModule { }
