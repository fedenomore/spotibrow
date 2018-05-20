import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleAlbumPage } from './detalle-album';

@NgModule({
  declarations: [
    DetalleAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleAlbumPage),
  ],
})
export class DetalleAlbumPageModule {}
