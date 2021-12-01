import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import {Observable, retry} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private servicio:HttpClient) { }

  //conectar el front-end con backend

  usuariosUrl= 'http://127.0.0.1:3000/usuarios';
  loginUrl= 'http://127.0.0.1:3000/usuarios/login'
  
  //tomar toda la data

  getAllData():Observable<any>{
    return this.servicio.get(`${this.usuariosUrl}`);
  }
//crear data /
  createData(data:any):Observable<any>{

    console.log(data,'createapi=>')
    return this.servicio.post(`${this.usuariosUrl}`,data);
  }

  //borrar data

  deleteData(correo:any):Observable<any>{
    let ids=correo;
    return this.servicio.delete(`${this.usuariosUrl}/${ids}`);
  }

  //actualizar data

  updateData(data:any,correo:any):Observable<any>{
    let correos = correo;
    return this.servicio.put(`${this.usuariosUrl}/${correos}`,data);
  }

  //getSingleData

  getSingleData(correo:any):Observable<any>{
    let correos = correo;
    return this.servicio.get(`${this.usuariosUrl}/${correos}`);
  }

  login(user:any):Observable<any>{
    return this.servicio.post(`${this.loginUrl}`,user);
  }

















  /*//METODO PARA ACCEDER A LA BASE DE DATOS, SOLO TABLA "usuarios"
  ConsultarUsuarios():Observable<any> {
    return this.servicio.get(environment.servidor + "/usuarios/:correo");
  }*/
}
