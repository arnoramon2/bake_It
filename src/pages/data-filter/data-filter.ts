import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GerechtenProvider } from '../../providers/gerechten/gerechten';

/**
 * Generated class for the DataFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-filter',
  templateUrl: 'data-filter.html',
})
export class DataFilterPage {
  filterData={
    ingredienten:"",
    soort:""
  }

  soorten=[]
  soortenNew=[]

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gerechtenprovider: GerechtenProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataFilterPage');

    this.soorten = this.gerechtenprovider.gerechten.map((item)=>{
      return item.soort;
    })
    this.soortenNew =  Array.from(new Set(this.soorten ));
    console.log("ARNO", this.soorten)
    console.log("ARNO2", this.soortenNew)
  }

  dismiss() {
    console.log("dismissing filtermodal with data!!!",this.filterData);
    this.viewCtrl.dismiss(this.filterData);
  }
  cancel(){
    this.viewCtrl.dismiss();
  }

}
