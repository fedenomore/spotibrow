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
  modified = false;
  localStorage: Storage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    
  ) {
    this.localStorage = (window as any).localStorage;
    // Si no esta almacenado el usuario
    this.user = {
      fecNacimiento: '',
      nombre: '',
      apellido: '',
      notificaciones: false,
      email: '',
    };
  }

  ionViewDidLoad() {
    this.modified = false;
   console.log('didload');
    let usr:any = JSON.parse(this.localStorage.getItem('user'));
    console.log('Usr',usr);
      if (usr != null)  this.user = usr;
    
   
  }

  private guardarCambios(){
    this.localStorage.setItem('user',JSON.stringify(this.user));
  }

  private modificado() {
    this.modified = true;    
  }

}
