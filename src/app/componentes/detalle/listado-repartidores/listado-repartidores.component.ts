import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent implements OnInit {

  listaRepartidores !: any;
  @Output() eventoRepartidorSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  constructor(private repartidorService : RepartidorService) { }

  ngOnInit(): void {
    this.repartidorService.getRepartidores().subscribe(ref=>{
      this.listaRepartidores = ref;
    });
  }

  llamarEvento(e: Repartidor){  
      this.eventoRepartidorSeleccionado.emit(e);
  }

}
