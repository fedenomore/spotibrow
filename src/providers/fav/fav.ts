import { Injectable } from '@angular/core';


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
}
