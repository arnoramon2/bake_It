import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';
import { ZoekenPage } from '../zoeken/zoeken';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  gerechten : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gerechtenProvider: GerechtenProvider
  ) {
    this.gerechten = gerechtenProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  detailGerecht(item : any) {
    this.navCtrl.push(GerechtDetailPage, item);
  }

  zoeken() {
    this.navCtrl.setRoot(ZoekenPage);
  }
}
