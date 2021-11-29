import { Component, OnInit, ViewChild } from '@angular/core';
import { agendamientos, ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController , AlertController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';
import { Agendamiento } from 'src/app/models/agendamiento';

@Component({
  selector: 'app-listaragendamiento',
  templateUrl: './listaragendamiento.page.html',
  styleUrls: ['./listaragendamiento.page.scss'],
})
export class ListaragendamientoPage implements OnInit {

  agendar: Agendamiento[] = [];
  newAgen: Agendamiento = <Agendamiento>{};
  usuarioLogueado=false;


  @ViewChild('myList')myList : IonList;
  constructor(private storageService: ServicedatosService, private router: Router, 
    private plt: Platform, private toastController: ToastController,private menuController: MenuController,private alertController:AlertController, public authService: AuthService) { 
      this.plt.ready().then(()=>{
        this.loadAgen();
      });

    }

  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean)=>{
      this.usuarioLogueado=loggedStatus;
      this.loadAgen();
    })
  }

  logout(){
    this.authService.logout();
  }

  onSubmit(){
    console.log("submit");
    console.log(this.agendar);
    this.addAgen();
  }
  mostrarMenu(){
        this.menuController.open('first');
      }



//get
loadAgen(){
  this.storageService.getAgen().then(agendamientos=>{
    this.agendar=agendamientos;
  });
}

 //create
 addAgen(){
  this.newAgen.id = String();
  this.storageService.addAgen(this.newAgen).then(agendar=>{
    this.newAgen = <Agendamiento>{};
    this.showToast('!Agendamiento Agregados');
    this.loadAgen();
  });

  
}

 

//update
updateAgen(dato: Agendamiento ){
  dato.estado = `UPDATED: ${dato.estado}`;
  this.storageService.updateAgen(dato).then(item=>{
    this.showToast('Agendamiento actualizado!')
    this.myList.closeSlidingItems();
    this.loadAgen();
  });
} 

//delete
deleteAgen(agendamiento: Agendamiento){
  this.storageService.deleteAgen(agendamiento.id).then(item=>{
    this.showToast(' Agendamiento eliminado');
    this.myList.closeSlidingItems();
    this.loadAgen();
  });
}

async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}


async saludoAlert(nombre: string){
  const alert = await this.alertController.create({
    header: 'Welcome',
    message: 'Bienvenid@ '+nombre,
    buttons: ['OK']
  });
  await alert.present();
}
}