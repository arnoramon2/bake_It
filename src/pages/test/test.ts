import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';
import { DataFilterPage } from '../data-filter/data-filter';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

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
    private modalCtrl:ModalController,
    private db: FireDataServiceProvider
  ) {
    this.gerechten = gerechtenprovider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

   
    this.gerechten=this.db.getAll();

    this.gerechten.subscribe((result) => {
      console.log("We got the following data", result);
      this.currentItems = result;
      console.log("ARNO1", this.currentItems)
    },(error) => {
      console.log("We did not get anny data", error)
    });

    
  }

  getItems(ev) {
    console.log("filtering data",ev);
    let val = ev.target.value;
    if (!val || !val.trim()) {
      console.log("no naam filter");
      this.currentItems = this.gerechten;
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
          soort2:gerechten.soort2,
          naam: this.search
        });
        console.log("filtering with",this.search,gerechten.soort,gerechten.ingredienten, gerechten.soort2);
        console.log("current items after filtermodal",this.currentItems);
      }
    });
    filterDataModal.present();
  }

}
