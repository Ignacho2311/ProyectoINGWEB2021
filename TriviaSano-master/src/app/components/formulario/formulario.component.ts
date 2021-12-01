import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  constructor(private service:UsuariosService,private router:ActivatedRoute) { }

  successmsg:any;
  getparamcorreo:any;

  ngOnInit(): void {
    this.getparamcorreo = this.router.snapshot.paramMap.get('correo');

    if(this.getparamcorreo){
      this.service.getSingleData(this.getparamcorreo).subscribe((res)=>{
        console.log(res,'res==>');
        this.formulario.patchValue({
          correo: res.data[0].correo,
          contrasenna: res.data[0].contrasenna,
          nombre: res.data[0].nombre,
          edad: res.data[0].edad,
          fechaNacimiento: res.data[0].fechaNacimiento,
          sexo: res.data[0].sexo,
          estatura: res.data[0].estatura,
          peso: res.data[0].peso,
          enfermedadCardiaca: res.data[0].enfermedadCardiaca,
          enfermedadRespiratoria: res.data[0].enfermedadRespiratoria,
          cirugia: res.data[0].cirugia,
          alergia: res.data[0].alergia,
          enfermedadDegenerativa: res.data[0].enfermedadDegenerativa,
          futbol: res.data[0].futbol,
          baloncesto: res.data[0].baloncesto,
          voleyball: res.data[0].voleyball,
          salsa: res.data[0].salsa,
          zumba: res.data[0].zumba,
          folklor: res.data[0].folklor,
      });
    });
  }
}
  
  formulario = new FormGroup({
      'correo': new FormControl('',[Validators.required,Validators.email]),
      'contrasenna': new FormControl('',Validators.required),
      'nombre': new FormControl('',Validators.required),
      'edad': new FormControl('',Validators.required),
      'fechaNacimiento': new FormControl('',Validators.required),
      'sexo': new FormControl('',Validators.required),
      'estatura': new FormControl('',Validators.required),
      'peso': new FormControl('',Validators.required),
      'enfermedadCardiaca': new FormControl('',Validators.required),
      'enfermedadRespiratoria': new FormControl('',Validators.required),
      'cirugia':new FormControl('',Validators.required),
      'alergia': new FormControl('',Validators.required),
      'enfermedadDegenerativa': new FormControl('',Validators.required),
      'futbol': new FormControl('',Validators.required),
      'baloncesto': new FormControl('',Validators.required),
      'voleyball': new FormControl('',Validators.required),
      'salsa': new FormControl('',Validators.required),
      'zumba': new FormControl('',Validators.required),
      'folklor': new FormControl('',Validators.required)
  });

  //crear usuario
  userSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      this.service.createData(this.formulario.value).subscribe((res)=>{
        console.log(res, 'res=>');
        this.formulario.reset();
      })
    }
  }

  //actualizar usuario
  userUpdate(){
    console.log(this.formulario.value,'updatedform');
    
    if(this.formulario.valid){
      this.service.updateData(this.formulario.value,this.getparamcorreo).subscribe((res)=>{
        console.log(res,'resUpdated')
        this.formulario.reset();
      })
    }
  }
}
