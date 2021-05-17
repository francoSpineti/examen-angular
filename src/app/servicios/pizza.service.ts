import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pizza } from '../clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private dbPath = '/pizza';
  data !: AngularFirestoreCollection<any>;
  listaPizzas : Observable<any[]>;

  constructor(private afs: AngularFirestore) { 
    this.data = afs.collection<any>(this.dbPath);
    this.listaPizzas = this.data.valueChanges(this.dbPath);
  }

  guardarPizza(pizza : Pizza){
    //const id = this.afs.createId();
    return this.afs.collection(this.dbPath).doc(pizza.id.toString()).set(pizza);
  }

  getPizzas(){
    return this.listaPizzas;
  }

  modificarPizza(pizza : Pizza){
   return this.afs.collection(this.dbPath).doc(pizza.id.toString()).update(pizza.toJson());
  }

  borrarPizza(pizza : Pizza){
    return this.afs.collection(this.dbPath).doc(pizza.id.toString()).delete();
  }
}
