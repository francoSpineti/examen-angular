import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { FormBuilder, FormGroup ,Validators, AbstractControl} from '@angular/forms';
import { RepartidorService } from 'src/app/servicios/repartidor.service';
import { Pais } from 'src/app/clases/pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  formGroup !: FormGroup;
  paisSeleccionado !: Pais;
  repartidor = new Repartidor;

  constructor(private formBuilder : FormBuilder,private repartidorService : RepartidorService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'dni' : ['',[Validators.required,Validators.min(11111111),Validators.max(99999999)]],
      'nombre' : ['',[Validators.required,this.spacesValidator]],
      'edad' : ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'capacidadTransporte' : ['',[Validators.required,Validators.min(1),Validators.max(20)]],
      'paisDeOrigen' : ['',Validators.required],
      'unidadPropia' : ['',Validators.required]
    });
  }

  altaRepartidor(){
    this.repartidor.dni = this.formGroup.controls['dni'].value;
    this.repartidor.nombre = this.formGroup.controls['nombre'].value;
    this.repartidor.edad = this.formGroup.controls['edad'].value;
    this.repartidor.capacidadTransporte = this.formGroup.controls['capacidadTransporte'].value;
    this.repartidor.unidadPropia = this.formGroup.controls['unidadPropia'].value;
    const retorno = this.repartidorService.guardarRepartidor(this.repartidor.toJson());
    if(retorno){
        alert("se creo el repartidor");
        this.router.navigate(['/bienvenido']);
    }else{
      alert("error al crear repartidor");
    }
  }

  cargarPaisSeleccionado(pais: Pais){
    this.formGroup.controls['paisDeOrigen'].setValue(pais.name);
    this.repartidor.paisDeOrigen = pais;
  }

  private spacesValidator(control : AbstractControl) : null | object{
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');
    return espacios == true? {contieneEspacios : true} : null;
  }
}
