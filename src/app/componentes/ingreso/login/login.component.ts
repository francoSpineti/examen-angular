import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup !: FormGroup;
  user = new Usuario;

  constructor(private authService : AuthService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'password' : ['',Validators.required]
    });
  }

  iniciarSesion(){
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;
    this.user.email = email;
    this.user.password = password;
    this.authService.iniciarSesion(this.user);
  }

  ingresoEmpleado(){
    this.formGroup.controls['email'].setValue("empleado@empleado.com");
    this.formGroup.controls['password'].setValue("123456");
    this.user.setPerfil("empleado");
  }

  ingresoAdmin(){
    this.formGroup.controls['email'].setValue("admin@admin.com");
    this.formGroup.controls['password'].setValue("123456");
    this.user.setPerfil("admin");
  }

}
