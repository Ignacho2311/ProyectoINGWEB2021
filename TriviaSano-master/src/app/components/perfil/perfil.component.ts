import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private service:UsuariosService, private correo:InicioComponent) { }

  readData:any;
  auxCorreo:any = this.correo;

  ngOnInit(): void {
    this.getAllData();
  }

  //eliminar por correo(ID)
  deleteCorreo(){
    console.log(this.correo,'borrar correo');
    this.service.deleteData(this.correo).subscribe((res:any)=>{
      console.log(res,'Borrar res==>');
      //poner un msje de Ã©xito
      this.getAllData();
    });
  }

  //tomar data
  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>")
      this.readData= res.data;
    });
  }

}
