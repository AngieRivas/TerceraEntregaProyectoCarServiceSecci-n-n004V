import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Persona } from '../models/persona';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  _url='http://localhost:3001/usuarios'

  
  
  constructor(private http: HttpClient) { 
    
//console.log('------>Probando la inyeccion del servicio persona')

  }


getPersonas(){
let header = new HttpHeaders()
  .set('Type-content','aplication/json')    
console.log("getPersonas")
   return this.http.get(this._url,{
     headers:header
   });

}

BuscarPersona(id: string){
  let header = new HttpHeaders()
    .set('Type-content','aplication/json')    
  
     return this.http.get(this._url+'/'+id,{
       headers:header
     });
  
  }

  login(email: string, pass: string){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')    
    
       return this.http.get(this._url+'/?email='+email+'&pass='+pass,{
         headers:header
       });
    
    }


    buscarRut(rut: string){   
      console.log("buscarRut######");
      let respuesta=0;
      let header = new HttpHeaders()
        .set('Type-content','aplication/json')    
     
     return this.http.get(this._url+'/?rut='+rut,{
          headers:header
        });
       
      
      }


    registrarUsuario(usuario: Persona){
      let header = new HttpHeaders()
        .set('Type-content','aplication/json') 

        return this.http.post<Persona>(this._url,usuario,{
          headers:header
        } );       
      
      }



}