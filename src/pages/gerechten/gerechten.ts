import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';
import { ResultsPage } from '../results/results';

/**
 * Generated class for the GerechtenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerechten',
  templateUrl: 'gerechten.html',
})
export class GerechtenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerechtenPage');
  }

  result() {
    this.navCtrl.push(ResultsPage);
  }
}
