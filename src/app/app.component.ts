import { Component } from '@angular/core';
import { PersonaService } from './servicios/persona.service';
import { Persona } from './models/persona';
import{HttpClient, HttpHeaders} from '@angular/common/http'

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public usuaria:Array<Persona>=[]
  
  constructor( private personaService:PersonaService ){




  }

  componentes : Componente[] =[
    {
      icon: 'person-add-outline', 
      name: 'Iniciar Sesión', 
      redirecTo: '/inscribirse'
    },  
    {
      icon: 'add-outline', 
      name: 'Registrar', 
      redirecTo: '/registrar'
    },


    {
      icon: 'calendar-outline',
      name: 'Agendar Servicio', 
      redirecTo: '/registro'
    },

    
    {
      icon: 'list-outline', 
      name: 'Listado Agendamientos', 
      redirecTo: '/listaragendamiento'
    },

    {
      icon: 'help-outline', 
      name: 'Cómo Funciona', 
      redirecTo: '/agendar'
    },

    {
      icon: 'people-outline', 
      name: 'Quienes Somos', 
      redirecTo: '/quienes'
    },






   
  ]



  initializeApp() {
    this.checkDarkTheme();
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }

}
