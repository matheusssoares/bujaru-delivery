import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../components/shared/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  login(login: Login) {
    return new Promise((resolve, reject) => {
      try {
        this.auth.signInWithEmailAndPassword(login.Email, login.Password).then(() => {
          resolve('login-success');
        }).catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              reject('email-invalido');
              break;

            case 'auth/user-disabled':
              reject('user-bloqueado');
              break;

            case 'auth/user-not-found':
              reject('user-nao-encontrado');
              break;

            case 'auth/wrong-password':
              reject('error-senha');
              break;
          }
        })

      } catch (err) {
        console.log('Problemas ao efetuar login: ', err);

      }
    })

  }
}
