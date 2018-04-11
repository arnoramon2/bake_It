import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the GerechtDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerecht-detail',
  templateUrl: 'gerecht-detail.html',
})
export class GerechtDetailPage {
item: any; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider
  ) {
    //this.gerechten=navParams.data;
    console.log("navigate with navparams",navParams);
    if(navParams.data){
      this.item = navParams.data
    } else {
      "navigated to without params"
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerechtDetailPage');
  }

  favorieten(){
    this.authService.presentToast(this.item.name + " is toegevoegd aan je favorieten");
  }

}
