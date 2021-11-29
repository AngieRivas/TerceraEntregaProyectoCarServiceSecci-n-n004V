import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Agendamiento } from '../models/agendamiento';


@Injectable({
  providedIn: 'root'
})
export class AgendamientoService {
  _url='http://localhost:3001/agendamiento'

  constructor(private http: HttpClient) {   

    
      }



      registrarAgendamiento(formulario:Agendamiento){
        let header = new HttpHeaders()
          .set('Type-content','aplication/json') 
  
          return this.http.post<Agendamiento>(this._url,formulario,{
            headers:header
          } );       
        
        }


        buscarAgendamientoPorUsuario(idsuario: string){   
          console.log("buscarAgendamiento######");
          let respuesta=0;
          let header = new HttpHeaders()
            .set('Type-content','aplication/json')    
         
         return this.http.get(this._url+'/?idusuario='+idsuario+'&estado=1',{
              headers:header
            });
           
          
          }


          buscarAgendamientoActivos(){   
            console.log("buscarAgendamiento activos######");
            let respuesta=0;
            let header = new HttpHeaders()
              .set('Type-content','aplication/json')    
           
           return this.http.get(this._url+'/?estado=1',{
                headers:header
              });
             
            
            }
  


            
      UpdateAgendamiento(formulario:Agendamiento){
        console.log("update Agendamiento######");
        let header = new HttpHeaders()
          .set('Type-content','aplication/json') 
  
          return this.http.put<Agendamiento>(this._url+'/'+formulario.id,formulario,{
            headers:header
          } );       
        
        }


        EliminarAgendamiento(idsuario: string){
          console.log("ENtra al servicio eliminar agendamiento")
          let header = new HttpHeaders()
            .set('Type-content','aplication/json') 
    
            return this.http.delete<Agendamiento>(this._url+'/'+idsuario,{
              headers:header
            } );       
          
          }



}
