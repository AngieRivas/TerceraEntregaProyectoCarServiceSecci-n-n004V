import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //darkMode: boolean = true;
  
  componentes : Componente[] =[
    
    
  
   
  ]



  constructor(private menuController: MenuController) { 
    
   
  }

  option={
    slidesPerView:1.5,
    centeredSlides: true,
    loop:true,
    spaceBetween:10,
   // autoplay:true,

    
  }


  ngOnInit() {
    const user = localStorage.getItem('nombreCompletoSession');
    (<HTMLInputElement>document.getElementById('usuarioSession')).innerText=user;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
