import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const routes: Routes = [
   { path: '', component: JumbotronComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }
