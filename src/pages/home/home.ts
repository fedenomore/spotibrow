import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, Toast, Loading } from 'ionic-angular';
import { LoginPage } from "../login/login"
import { AlbumsProvider } from '../../providers/albums/albums';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
name: 'home'

})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private login: LoginPage;
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
    console.log('ionViewDidLoad HomePage');
  }
  private mostrarToast(duracion:number,mensaje:string, posicion:string): void{
    
    let modalError = this.toastCtrl.create({
    duration: duracion,
    message: mensaje,
    position: posicion,
    });
   modalError.present();
  }

  public irListadoAlbums(): void {
    this.navCtrl.push('listado-albums');
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
    let data = {
      albumsLista: resultado.results.albummatches
    };
    this.navCtrl.push('listado-albums', data);
    console.log('successBuscarAlbum', resultado);
  }

  private errorBuscarAlbum(error, loading): void {
    loading.dismiss();
    console.log('errorBuscarAlbums', error);
  }
}
