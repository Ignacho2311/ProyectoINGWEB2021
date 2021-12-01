import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:UsuariosService) { }

  readData:any;
  ngOnInit(): void {
    this.getAllData();
  }

  //eliminar por correo(ID)
  deleteCorreo(correo:any){
    console.log(correo,'borrar correo');
    this.service.deleteData(correo).subscribe((res:any)=>{
      console.log(res,'Borrar res==>');
      //poner un msje de éxito
      this.getAllData();
    });
  }

  //tomar data
  getAllData(){
    this.service.getAllData().subscribe((res:any)=>{
      console.log(res,"res==>")
      this.readData= res.data;
    });
  }
}
