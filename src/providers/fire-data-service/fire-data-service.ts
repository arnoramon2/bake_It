import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FireDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireDataServiceProvider {
  
  constructor(
    private db: AngularFireDatabase
  ) {
    console.log('Hello FireDataServiceProvider Provider');

    
  }

  getAll() {
    return this.db.list('gerechten').valueChanges();
  }

  create(id: string, description: string, kind: string, name: string, preparation: string, img: string, ingredients: string) {
    this.db.object('gerechten/'+id).update({
      id: id,
      description: description,
      kind: kind,
      name: name,
      preparation: preparation,
      img: img,
      ingredients: ingredients
    })
  }







  /*
  query(params?: any) {
    let returnData=this.db.list('gerechten');
    if (!params) {
      return returnData;
    }
    console.log("filtering with this",params);

    if(params['soort']!=="" || params['soort2']!==""){
      returnData = returnData.filter((item) => {
        if(params['soort']==item['soort'] || params['soort2']==item['soort']){
          return item;
        }
      });
    }

    if(params['ingredienten'] && params['ingredienten']!==""){
      returnData = returnData.filter((item) => {
      let heefting = false;
      for(let ingredient of item['ingredienten']) {
        console.log("compair", ingredient, params['ingredienten'])
        if(params['ingredienten']==ingredient){
          console.log("info")
          heefting = true;
          break;
        }
      }
        if(heefting) {
          return item
        }
        });
    }



    if(params['naam'] && params['naam']!==""){
      returnData = this.gerechten.filter((item) => {
        let itemValue = item['naam'];
        console.log("item naam: ", params['naam']);
        if (typeof itemValue == 'string' && (itemValue.toLowerCase().indexOf(params['naam'].toLowerCase()) >= 0)) {
          return item;
        } else if (itemValue == params['naam']) {
          return item;
        }
      });
    }
 
    return returnData;
  }

*/
}
