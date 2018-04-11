import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';
import { ZoekenPage } from '../zoeken/zoeken';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

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
    //public gerechtenProvider: GerechtenProvider
    private db: FireDataServiceProvider
  ) {
    //this.gerechten = gerechtenProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');

    this.gerechten=this.db.getAll();

    this.gerechten.subscribe((result) => {
      console.log("We got the following data", result);
    },(error) => {
      console.log("We did not get anny data", error)
    });
  }

  detailGerecht(event, item) {
    //this.navCtrl.push(GerechtDetailPage, item);

    console.log("tapped item", item);
    this.navCtrl.push(GerechtDetailPage, item)
  }

  zoeken() {
    this.navCtrl.setRoot(ZoekenPage);
  }
}
