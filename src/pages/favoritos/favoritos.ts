import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController, ModalController } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';



@IonicPage({name: 'favoritos'})
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  favoritos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favProv: FavProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    
  }
  ionViewDidEnter(){
    this.favoritos = this.favProv.getTodosFavoritos();
  }

  public irDetalleAlbum(album: any): void {
    let modal = this.modalCtrl.create('detalle-album', { album });
    modal.present();
    modal.onDidDismiss((data) => {
      console.log('Modal se cierra');
    });
  }
  eliminarFavorito(album){
    let confirm = this.alertCtrl.create({
      title: 'Borrar de favoritos?',
      message: 'Esta seguro que desea eliminar el album de sus favoritos?',
      buttons:[
        {
          text: 'Si',
          handler: () =>{
          this.favProv.borrarFavorito(album)
          this.favoritos = this.favProv.getTodosFavoritos();
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
  }

}
