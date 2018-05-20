import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListadoAlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'listado-albums'
})
@Component({
  selector: 'page-listado-albums',
  templateUrl: 'listado-albums.html',
})
export class ListadoAlbumsPage {
  public arrayAlbums: any[];
  public listadoAlbums;
  public nombreAlbum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayAlbums = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlbumsPage');
    this.listadoAlbums = this.navParams.get('albumsLista');
    this.nombreAlbum = this.navParams.get('datosBusqueda.texto');

    if (!this.listadoAlbums) {
      this.listadoAlbums = [];
    }
    console.log('nombreAlbum',this.nombreAlbum)
    this.arrayAlbums = this.listadoAlbums.album;
    console.log('this.listadoAlbums', this.listadoAlbums);
  }

}
