import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { DataFilterPage } from '../data-filter/data-filter';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  gerechten:any;

  search="";
  currentItems:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gerechtenprovider: GerechtenProvider,
    private modalCtrl:ModalController
  ) {
    this.gerechten = gerechtenprovider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

    this.currentItems = this.gerechtenprovider.gerechten;
  }

  getItems(ev) {
    console.log("filtering data",ev);
    let val = ev.target.value;
    if (!val || !val.trim()) {
      console.log("no naam filter");
      this.currentItems = this.gerechtenprovider.gerechten;
      return;
    }
    this.currentItems = this.gerechtenprovider.query({
      naam: val
    });
  }

  filterAdvanced() {
    let filterDataModal = this.modalCtrl.create(DataFilterPage);
    filterDataModal.onDidDismiss(gerechten=>{
      console.log("modal returned data",gerechten);
      if(gerechten){
        this.currentItems= this.gerechtenprovider.query({
          ingredienten:gerechten.ingredienten,
          soort:gerechten.soort,
          naam: this.search
        });
        console.log("filtering with",this.search,gerechten.soort,gerechten.ingredienten);
        console.log("current items after filtermodal",this.currentItems);
      }
    });
    filterDataModal.present();
  }

}
