import { Injectable } from '@angular/core';
import * as _ from 'lodash';


/*
  Generated class for the FavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavProvider {
  private localStorage: Storage;
  constructor() {
    this.localStorage = (window as any).localStorage;
  }

  agregarFavorito(album){
    this.localStorage.setItem(album.mbid,JSON.stringify(album));
  }

  borrarFavorito(album){
    this.localStorage.removeItem(album.mbid);
  }
  esFavorito(mbid){
    // return this.localStorage.get(mbid).then(valor => valor ? true : false);
      if (this.localStorage.getItem(mbid)) return true;
      else return false;
  }
  //TODO no negrear la tomada de lista de favoritos
  getTodosFavoritos(){
     let items = [];
    
    _.forIn(window.localStorage, (v,k) =>{
     //console.log('v', v,'k',k);
     if (v != 'true' && k != 'user' &&
      k != 'length' && k != 'clear'  &&
      k != 'getItem' && k != 'clear' && k != 'setItem' && k != 'key'  && k != 'removeItem'){
      items.push(JSON.parse(v));
      }
    });
    // console.log('favoritos', items);
    return items.length ? items : null;
    // this.localStorage.forIn(v => items.push(v)).then(() => items)

    
    // return items;
  }
}
