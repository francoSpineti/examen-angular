import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SecurityGuard } from './guards/security.guard';

const routes: Routes = [
    {path:'',component: NavbarComponent},
    {path:'bienvenido',component: BienvenidoComponent},
    {path:'altaRepartidor',component: AltaRepartidorComponent},
    {path:'login', loadChildren: () => import('./componentes/ingreso/ingreso.module').then(m => m.IngresoModule) },
    {path:'detalle', loadChildren: () => import('./componentes/detalle/detalle.module').then(m => m.DetalleModule) },
    {path:'salen-pizzas', loadChildren: () => import('./componentes/salen-pizzas/salen-pizzas.module').then(m => m.SalenPizzasModule), canActivate:[SecurityGuard] },
    {path: '**', component : NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
