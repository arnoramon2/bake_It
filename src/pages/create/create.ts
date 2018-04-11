import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  item:any;

  gerecht = {
    description: "",
    kind: "",
    name: "",
    prepartion: "",
    ingredients: "",
    id: "",
    img: ""
  }
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: FireDataServiceProvider 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');

    
  }


  create() {
    this.db.create(this.gerecht.id, this.gerecht.description, this.gerecht.kind, this.gerecht.name, this.gerecht.prepartion, this.gerecht.img, this.gerecht.ingredients) 
    this.navCtrl.push(HomePage)
  }
}
