
import { Injectable } from '@angular/core';

/*
  Generated class for the GerechtenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GerechtenProvider {

  gerechten = [
    { "naam": "spaghetti",  "info": "Spaghetti bolognese met veel liefde gemaakt op grootmoeders wijze.", "bereiding": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "img": "../../assets/img/gerechten/spaghetti.jpg", "ingredienten": ["5kg wortelen", "3 aardappelen", "1 komkommer"] },
    { "naam": "spaghetti2", "info": "Spaghetti bolognese met veel liefde gemaakt op grootmoeders wijze.", "bereiding": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "img": "../../assets/img/gerechten/spaghetti.jpg", "ingredienten": ["5kg wortelen", "3 aardappelen"] },
    { "naam": "spaghetti3", "info": "Spaghetti bolognese met veel liefde gemaakt op grootmoeders wijze.", "bereiding": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "img": "../../assets/img/gerechten/spaghetti.jpg", "ingredienten": ["5kg wortelen", "3 aardappelen", "1 komkommer", "2 eieren", "3 eetlepels bloem", "50g zout"] },
    { "naam": "spaghetti4", "info": "Spaghetti bolognese met veel liefde gemaakt op grootmoeders wijze.", "bereiding": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "img": "../../assets/img/gerechten/spaghetti.jpg", "ingredienten": ["5kg wortelen", "3 aardappelen", "1 komkommer", "2 eieren", "3 eetlepels bloem"] },
    { "naam": "spaghetti5", "info": "Spaghetti bolognese met veel liefde gemaakt op grootmoeders wijze.", "bereiding": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "img": "../../assets/img/gerechten/spaghetti.jpg", "ingredienten": ["5kg wortelen", "3 aardappelen", "1 komkommer", "2 eieren", "3 eetlepels bloem", "50g zout", "5kg lucht", "veel liefde"] }
  ]


  constructor() {
    console.log('Hello GerechtenProvider Provider');
  }

  query(params?: any) {
    let returnData=this.gerechten;
    if (!params) {
      return returnData;
    }
    console.log("filtering with this",params);



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


  add(item: any) {
    this.gerechten.push(item);
  }

  delete(item: any) {
    this.gerechten.splice(this.gerechten.indexOf(item), 1);
  }

  getAll() {
    return this.gerechten;
  }


}
