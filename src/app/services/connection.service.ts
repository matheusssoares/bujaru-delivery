import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    private firestore: AngularFirestore,
    private toast: ToastrService
  ) { }

  getProfile() {
    return new Promise((resolve, reject) => {

    })
  }

  getData(collection: string, fieldPath: string, name: string) {
    return new Promise((resolve, reject) => {
      this.firestore.collection(collection, query => query.where(fieldPath, '==', name))
        .get().toPromise().then(querySnapshot => {
          if (querySnapshot.empty) {
            resolve(false);
          } else {
            resolve(true);
          }
        }).catch((err) => {
          reject(err);
        })
    })
  }

  createData(collection: string, data: any) {
    const id = (data.id) ? data.id : this.firestore.createId();
    data.id = id;
    return new Promise((resolve, reject) => {
      this.firestore.collection(collection).doc(id).set(data).then(() => {
        resolve(true);
      }).catch((err) => {
        console.log(err);

        reject(err);
      })
    })
  }

  getAllDatas(collection: string) {
    return this.firestore.collection(collection, query => query.orderBy('nome', 'asc')).valueChanges();
  }

  updateData(collection: string, key: any, data: any) {
    return new Promise((resolve, reject) => {
      this.firestore.collection(collection).doc(key).update(data).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err);
      })
    })
  }

  confirmDelete(title: string, text: string) {
    return new Promise((resolve) => {
      Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          resolve(true);
        } else {
          resolve(false)
        }
      })
    })
  }

  deleteData(collection: string, id: string) {
    return new Promise((resolve, reject) => {
      this.firestore.collection(collection).doc(id).delete().then((data: any) => {
        resolve(true);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  errorToast() {
    this.toast.remove;
    this.toast.error('Poblemas encontrados, tente mais tarde...', 'Opsss!', {
      positionClass: 'toast-top-right',
      progressBar: true,
      timeOut: 5000      
    });
  }
}
