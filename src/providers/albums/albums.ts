import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class AlbumsProvider {
  private nombreAlbum: any;

  constructor(public http: HttpClient) {
    this.nombreAlbum = "";
    console.log('Provider de albums');
  }
public setNombreAlbum(nombre: string):void{
  this.nombreAlbum = nombre;
}

public getNombreAlbum():string{
  return this.nombreAlbum;
}

public buscarAlbum(nombre: string): Promise<any> {
  let url = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album='+ nombre + '&api_key=11ef8473c67908c0dd4b8b71955d65aa&format=json';
  console.log('url', url)
  return this.http.get(url).toPromise();
}
}
