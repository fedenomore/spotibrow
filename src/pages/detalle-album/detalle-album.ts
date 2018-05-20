import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name:'detalle-album'
})
@Component({
  selector: 'page-detalle-album',
  templateUrl: 'detalle-album.html',
})
export class DetalleAlbumPage {
  public detalleAlbum;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detalleAlbum = this.navParams.get('album');
    console.log('this.detalleAlbum', this.detalleAlbum);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleAlbumPage');
  }

  public cerrarModal(): void {
    this.navCtrl.pop();
  }

  public abrirLink(url): void {
    window.open(url, '_system');
}
}
