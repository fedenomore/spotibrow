import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListadoAlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-albums',
  templateUrl: 'listado-albums.html',
})
export class ListadoAlbumsPage {
  public arrayAlbums: any[];
  public listadoAlbums;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayAlbums = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlbumsPage');
    this.listadoAlbums = this.navParams.get('peliculasLista');

    if (!this.listadoAlbums) {
      this.listadoAlbums = [];
    }

    this.arrayAlbums = this.listadoAlbums.Search;
  }

}
