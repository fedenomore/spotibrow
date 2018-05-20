import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoAlbumsPage } from './listado-albums';

@NgModule({
  declarations: [
    ListadoAlbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoAlbumsPage),
  ],
})
export class ListadoAlbumsPageModule {}
