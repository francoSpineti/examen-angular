import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  mostrarInfoGit : boolean = false;
  data !: any;

  constructor(private gitService : GithubService) { }

  ngOnInit(): void {
    this.obtenerInfo();
  }

  obtenerInfo(){
    this.gitService.getData().subscribe(ref =>{
       this.data = JSON.parse(JSON.stringify(ref));
    });
  }

}
