import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { ToastController} from '@ionic/angular';
import { Agendamiento } from '../models/agendamiento';

export interface Usuarios{
  id: number,
  nombre: string,
  email: string,
  contrasenia: string

}
export interface agendamientos{
  id: number,
  patente: string,
  fecha:string,
  hora:string,
  tipo: string
}

const ITEMS_KEY = 'my-datos';
const ITEMS_KEY_AGEN = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;

  constructor(private storage: Storage, private toastController: ToastController, 
              public authService: AuthService, private router: Router) { 
    this.init();
  }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;

  }

  addDatos(dato: Usuarios):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY, datos);
       }else {
         return this.storage.set(ITEMS_KEY, [dato]);
       }
 
     })
   }
 
 
    getDatos(): Promise<Usuarios[]>{
     return this.storage.get(ITEMS_KEY);
   }
 
 
   //actualizar información de un objeto 
   updateDatos(dato: Usuarios): Promise<any>{
     return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (!datos || datos.length == 0){
         return null;
       }
       let newDato: Usuarios[] = [];
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, newDato);
     });
   }

   //Buscar por nombre
   routeRedirect = '';
   buscarUsuario(iemail: string, icontrasenia:string){
    let valor="";
    this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
      if (!datos || datos.length === 0){
        return null;
      }
      for (let i of datos){
        if (i.email === iemail && i.contrasenia === icontrasenia){
           valor="existe";
           this.showToast("Bienvenido "+i.nombre);
           this.authService.login();
           this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
           this.authService.urlUsuarioIntentaAcceder='';
           this.router.navigate([this.routeRedirect]);
        }
      }
      if(valor===""){
        this.showToast("Usuario y/o contraseña incorrectos");
      }
    });
  }
 
    //Eliminar
   deleteDatos(id: number): Promise<Usuarios>{
     return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       let toKeep: Usuarios[] = []; 
       for (let i of datos){
         if (i.id !== id){
           toKeep.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, toKeep);
     });
 
   }
   async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }


  //AGENDAMIENTO

  addAgen(dato: Agendamiento):Promise<any>{
    return this.storage.get(ITEMS_KEY_AGEN).then((datos : Agendamiento[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY_AGEN, datos);
       }else {
         return this.storage.set(ITEMS_KEY_AGEN, [dato]);
       }
 
     })
   }
 
 
    getAgen(): Promise<Agendamiento[]>{
     return this.storage.get(ITEMS_KEY_AGEN);
   }
 
 
   //actualizar información de un objeto 
   updateAgen(dato: Agendamiento): Promise<any>{
     return this.storage.get(ITEMS_KEY_AGEN).then((datos : Agendamiento[])=>{
       if (!datos || datos.length == 0){
         return null;
       }
       let newDato: Agendamiento[] = [];
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY_AGEN, newDato);
     });
   }


 
    //Eliminar
   deleteAgen(id: string): Promise<Agendamiento>{
     return this.storage.get(ITEMS_KEY_AGEN).then((datos : Agendamiento[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       let toKeep: Agendamiento[] = []; 
       for (let i of datos){
        if(i.id !== id ){
          toKeep.push(i);
        }
       }
       return this.storage.set(ITEMS_KEY_AGEN, toKeep);
     });
 
   }
   
}