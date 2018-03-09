import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';

/**
 * Generated class for the FavorietenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorieten',
  templateUrl: 'favorieten.html',
})
export class FavorietenPage {
  gerechten : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gerechtenProvider: GerechtenProvider
  ) {
    this.gerechten = gerechtenProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavorietenPage');
  }

}
