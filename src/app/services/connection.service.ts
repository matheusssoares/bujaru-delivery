import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getProfile() {
    return new Promise((resolve, reject) => {

    })
  }
}
