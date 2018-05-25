import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, Toast } from 'ionic-angular';
import{ FavProvider } from '../../providers/fav/fav';


@IonicPage({
  name: 'listado-albums'
})
@Component({
  selector: 'page-listado-albums',
  templateUrl: 'listado-albums.html',
})
export class ListadoAlbumsPage {
  arrayAlbums: any[];
  public listadoAlbums;
  nombreAlbum: string;
  esFavorito = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private favProv: FavProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    ) {
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

//TODO mejorar checkeo de favoritos con promesas para no recargar tanto la busqueda
checkearFavorito(album): boolean{
 //this.favProv.esFavorito(album.id).then(valor => this.esFavorito = valor);
  this.esFavorito = this.favProv.esFavorito(album.mbid);

 return this.esFavorito;
 }
toggleFavorito(album){
  this.esFavorito = this.favProv.esFavorito(album.mbid);
  if (this.esFavorito){
    let confirm = this.alertCtrl.create({
      title: 'Borrar de favoritos?',
      message: 'Esta seguro que desea eliminar el album de sus favoritos?',
      buttons:[
        {
          text: 'Si',
          handler: () =>{
          this.esFavorito = false;
          this.favProv.borrarFavorito(album)
          let toast = this.toastCtrl.create({
            message: 'Album elimininado de favoritos',
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        }
      },
      { text: 'No' }
      ]
    });
    confirm.present();
  } else {
    this.esFavorito = true;
    this.favProv.agregarFavorito(album);
  }
}

}
