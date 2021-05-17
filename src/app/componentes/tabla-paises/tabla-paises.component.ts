import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() eventoPaisSeleccionado : EventEmitter<any> = new EventEmitter<any>();
  listaPaises :any;
  listaPaisesAfricanos = Array<any>();
  listaPaisesEuropeos = Array<any>();
  continente!:string;
  europeo:boolean = false;
  africano:boolean = false;
  pais = new Pais;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getPaises().subscribe(ref=>{
      this.listaPaises = (JSON.parse(JSON.stringify(ref)));
    });
  }

  continenteSeleccionado(){
    if(this.continente == "Africano"){
      if(this.listaPaisesAfricanos.length == 0){
        this.cargarListaPaisesAfricanos();
        this.europeo = false;
        this.africano = true;
      }
      this.europeo = false;
      this.africano = true;
    }else{
      if(this.listaPaisesEuropeos.length == 0){
        this.cargarListaPaisesEuropeos();
        this.africano = false;
        this.europeo = true;
      }
      this.africano = false;
      this.europeo = true;
    }
  }

  enviarEventoPaisSeleccionado(pais : Pais){
    this.eventoPaisSeleccionado.emit(pais);
  }

  private cargarListaPaisesAfricanos(){
    for (let index = 0; index < this.listaPaises.length ; index++) {
      if(this.listaPaises[index].name === "Angola" || this.listaPaises[index].name === "Ghana" || this.listaPaises[index].name === "Togo" || this.listaPaises[index].name === "Senegal" ||
         this.listaPaises[index].name === "Nigeria"){
           let obj : any ={
              name : this.listaPaises[index].name,
              flag : this.listaPaises[index].flag 
           }
          this.listaPaisesAfricanos.push(obj);
      }
    }
  }

  private cargarListaPaisesEuropeos(){
    for (let index = 0; index < this.listaPaises.length ; index++) {
      if(this.listaPaises[index].name === "Italy" || this.listaPaises[index].name === "Poland" || this.listaPaises[index].name === "Germany" || this.listaPaises[index].name === "Spain" ||
         this.listaPaises[index].name === "France"){
           let obj : any ={
              name : this.listaPaises[index].name,
              flag : this.listaPaises[index].flag 
           }
          this.listaPaisesEuropeos.push(obj);
      }
    }
  }

}
