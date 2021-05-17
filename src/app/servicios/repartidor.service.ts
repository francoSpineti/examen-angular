import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Repartidor } from '../clases/repartidor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  private dbPath = '/repartidor';
  data !: AngularFirestoreCollection<any>;
  listaRepartidores : Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.data = afs.collection<any>(this.dbPath,ref => ref.orderBy('dni'));
    this.listaRepartidores = this.data.valueChanges(this.dbPath);
   }

  guardarRepartidor(repartidor : Repartidor){
    const id = this.afs.createId();
    return this.afs.collection(this.dbPath).doc(id).set(repartidor);
  }

  getRepartidores(){
    return this.listaRepartidores;
  }

}
