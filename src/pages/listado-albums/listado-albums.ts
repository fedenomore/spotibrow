import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController) {
    this.arrayAlbums = [];
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlbumsPage');
    this.listadoAlbums = this.navParams.get('albumsLista');
    
    if (!this.listadoAlbums) {
      this.listadoAlbums = [];
    }
    console.log('nombreAlbum',this.nombreAlbum)
    this.arrayAlbums = this.listadoAlbums.album;
    console.log('this.listadoAlbums', this.listadoAlbums);
  }
  public irDetalleAlbum(album: any): void {
    let modal = this.modalCtrl.create('detalle-album', { album });
    modal.present();
    modal.onDidDismiss((data) => {
      console.log('Modal se cierra');
    });
  }



}
