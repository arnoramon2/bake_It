import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gerechten : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //public gerechtenProvider: GerechtenProvider,
    private db: FireDataServiceProvider  
  ) {
    //this.gerechten = gerechtenProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
