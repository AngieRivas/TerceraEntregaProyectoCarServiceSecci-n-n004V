import { Component, OnInit, ViewChild } from '@angular/core';

import { ServicedatosService, agendamientos } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController } from '@ionic/angular';
import { Agendamiento } from 'src/app/models/agendamiento';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  agendamientos: Agendamiento[] = [];
  newAgendamiento: Agendamiento = <Agendamiento>{};

  @ViewChild('myList')myList : IonList;

 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController,private menuController: MenuController) { 
      this.plt.ready().then(()=>{
        this.loadAgen();
      });

    }

  ngOnInit() {
  }
  onSubmit(){
    this.addAgen();
    this.loadAgen();
  }
  mostrarMenu(){
        this.menuController.open('first');
      }



//get
loadAgen(){
  this.storageService.getAgen().then(agendamientos=>{
    this.agendamientos=agendamientos;
  });
}

 //create
 addAgen(){
  this.newAgendamiento.id = ""+Date.now();
  this.storageService.addAgen(this.newAgendamiento).then(agendamientos=>{
    this.newAgendamiento = <Agendamiento>{};
    this.showToast('!Agendamiento Agregado');
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



}