import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  user: any; 
  lastLogin: any;
  aangemaakt: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private angularFireAuth: AngularFireAuth
  ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');

this.user = this.angularFireAuth.auth.currentUser.email;
this.lastLogin = this.angularFireAuth.auth.currentUser.metadata.lastSignInTime;
this.aangemaakt = this.angularFireAuth.auth.currentUser.metadata.creationTime;
      
     };
  
  

}
