import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthServiceProvider {
  // Booleans aanmaken om te kijken of er ingelogd/geregistreerd is 
  isLoggedIn: boolean = false;
  isRegistered: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    // toast voor meldingen/errors te weergeven
    public toastCtrl: ToastController
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Login functie
  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {
      console.log("login result", result);
      this.isLoggedIn = true;
    })
      .catch((error) => {
        this.displayError(error, "error during login");
      })
  }

  // Register funcite
  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      console.log("Register result", result);
      this.isRegistered = true
    })
      .catch((error) => {
        this.displayError(error, "error during register");
      })
  }

  // Display error functie, aanroepen in login en register
  displayError(error: any, message: string) {
    console.log(message, error);
    this.presentToast(error.message);
    this.isLoggedIn = false
  }

  //Logout funtie
  logout() {
    this.afAuth.auth.signOut();
  }


  // Toast(error melding) functie
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast', message);
    });

    toast.present();
  }
}