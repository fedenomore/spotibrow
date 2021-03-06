import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AlbumsProvider } from '../../providers/albums/albums';

@IonicPage({
name: 'home'

})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public datosBusqueda: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public albumsProvider: AlbumsProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) {
    this.mostrarToast(2000,"Bienvenido", "bottom");
    this.datosBusqueda = {};
  }

  ionViewDidLoad() {
    
  }
  private mostrarToast(duracion:number,mensaje:string, posicion:string): void{
    
    let modalError = this.toastCtrl.create({
    duration: duracion,
    message: mensaje,
    position: posicion,
    });
   modalError.present();
  }

  public buscarAlbum(): void {
    if (!this.datosBusqueda.texto) {
      let toastError = this.toastCtrl.create({
        message: 'Ingrese texto por favor',
        duration: 1500,
        position: 'bottom'
      });
      toastError.present();
      return;
    }
    let loading = this.loadingCtrl.create({ content: 'Buscando album..' });
    loading.present();
    this.albumsProvider.
    buscarAlbum(this.datosBusqueda.texto).then(
      (success) => { this.successBuscarAlbum(success, loading) },
      (error) => { this.errorBuscarAlbum(error, loading) });
  }

  private successBuscarAlbum(resultado, loading): void {
    loading.dismiss();
  
    this.navCtrl.push('listado-albums',{
      albumsLista: resultado.results.albummatches,
      busqueda: this.datosBusqueda.texto
     });
    //console.log('successBuscarAlbum', resultado);
  }

  private errorBuscarAlbum(error, loading): void {
    loading.dismiss();
    console.log('errorBuscarAlbums', error);
  }

}
