import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mascota } from './mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private miColeccion = 'mascotas';
  constructor(private firebase: AngularFirestore) { }


  getMascota(id: string){
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  getAll(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  newMascota(documendId: string, mascota: Mascota){
    return this.firebase.collection(this.miColeccion).add(mascota);
  }

  updateMascota(documentId: string, mascota: Mascota){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(mascota);
  }

  deleteMascota(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

}
