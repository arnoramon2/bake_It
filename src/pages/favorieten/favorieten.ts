import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

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
    gerechten: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //public gerechtenProvider: GerechtenProvider
    private db: FireDataServiceProvider
  ) {
    //this.gerechten = gerechtenProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavorietenPage');
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

}
