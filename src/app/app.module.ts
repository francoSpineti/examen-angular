import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { IngresoRoutingModule } from './componentes/ingreso/ingreso-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './componentes/ingreso/login/login.component';
import { RegistroComponent } from './componentes/ingreso/registro/registro.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ListadoRepartidoresComponent } from './componentes/detalle/listado-repartidores/listado-repartidores.component';
import { JumbotronComponent } from './componentes/detalle/jumbotron/jumbotron.component';
import { DetalleRepartidorComponent } from './componentes/detalle/detalle-repartidor/detalle-repartidor.component';
import { PaisRepartidorComponent } from './componentes/detalle/pais-repartidor/pais-repartidor.component';
import { DetalleRoutingModule } from './componentes/detalle/detalle-routing.module';
import { PricingComponent } from './componentes/salen-pizzas/pricing/pricing.component';
import { SalenPizzasRoutingModule } from './componentes/salen-pizzas/salen-pizzas-routing.module';
import { AltaPizzaComponent } from './componentes/salen-pizzas/alta-pizza/alta-pizza.component';
import { ModifPizzaComponent } from './componentes/salen-pizzas/modif-pizza/modif-pizza.component';
import { BorrarPizzaComponent } from './componentes/salen-pizzas/borrar-pizza/borrar-pizza.component';
import { ListarPizzasComponent } from './componentes/salen-pizzas/listar-pizzas/listar-pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    AltaRepartidorComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    TablaPaisesComponent,
    ListadoRepartidoresComponent,
    JumbotronComponent,
    DetalleRepartidorComponent,
    PaisRepartidorComponent,
    PricingComponent,
    AltaPizzaComponent,
    ModifPizzaComponent,
    BorrarPizzaComponent,
    ListarPizzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IngresoRoutingModule,
    DetalleRoutingModule,
    SalenPizzasRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
