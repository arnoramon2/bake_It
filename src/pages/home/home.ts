import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { GerechtDetailPage } from '../gerecht-detail/gerecht-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gerechten : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gerechtenProvider: GerechtenProvider    
  ) {
    this.gerechten = gerechtenProvider.getAll();
  }


  detailGerecht(item : any) {
    this.navCtrl.push(GerechtDetailPage, item);
  }
}
