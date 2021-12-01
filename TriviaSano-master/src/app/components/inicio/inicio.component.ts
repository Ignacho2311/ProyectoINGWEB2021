import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  readData:any;
  correo:any
  constructor(public userService:UsuariosService, private router:ActivatedRoute) { }

  getparamcorreo:any;

  ngOnInit(): void {
    
  }

  /*inicioSesion(){
    console.log(this.formulario.value)
    if(this.formulario.valid){
      this.userService.getSingleData(this.getparamcorreo).subscribe(data=>{
        console.log(data)
      })
    }
  }*/

  formulario = new FormGroup({
    'correo': new FormControl('',Validators.required),
    'contrasenna': new FormControl('',Validators.required)
  });

  login(){
    this.userService.login(this.formulario.value).subscribe(data=>{
      console.log(data)
      if(this.formulario.valid){
        console.log(this.formulario.value);
        this.formulario.reset();
        
      }  
    })
    
  }

}
