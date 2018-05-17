import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthProvider {

  constructor() {
  
  }

  public login(username:string,password:string): Promise<any>{
    let promesa = new Promise((resolve,reject)=>{
      if (!username || !password) {
      
        reject('Faltan datos');
      }
    });
    return promesa;
  }

  public loginObservable(username:string, password:string): Observable<any>{
  let observable = new Observable((observer) =>{
    if (!username || !password){
      observer.error('Faltan datos');
    }
    else if(username == 'fedem' && password === 'cursoIonic'){
      observer.next(true);
      observer.complete();
    }
    else {
      setTimeout(() =>{
        observer.error('Nombre de usuarios o contraseña incorrecta.');
      }, 750)
      
    }
  });
  return observable;
  }

}
