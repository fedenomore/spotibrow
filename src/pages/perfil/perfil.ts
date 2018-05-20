import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'perfil'
})
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Si no esta almacenado el usuario
    this.user = {
      fecNacimiento: '',
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
