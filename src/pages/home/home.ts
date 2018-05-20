import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast } from 'ionic-angular';
import { LoginPage } from "../login/login"

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
  private currentUser
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    
    this.mostrarToast(2000,"Bienvenido", "bottom");
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
}
