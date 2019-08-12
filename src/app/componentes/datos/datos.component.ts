import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { Ingreso } from '../../clases/ingreso';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  dni: string;
  nombre: string;
  apellido: string;
  tarjetaIngreso: number;
  fechaIngreso: string;
  horaIngreso: string;
  idEmpleado: number;
  ingreso: Ingreso;
  fechaHora = new Date();

  constructor(private http: HttpService) { }

  ngOnInit() {

    setInterval(() => {
      this.fechaHora = new Date();

      this.fechaIngreso = this.fechaHora.getDate().toString() + "/" + (this.fechaHora.getMonth()+1).toString() + "/" + this.fechaHora.getUTCFullYear().toString();
      this.horaIngreso =  this.fechaHora.toLocaleString('es-AR', { hour: 'numeric',minute:'numeric', hour12: true }); 
    }, 1000);
  }

  ConsultarRenaper(){
    this.http.traerDatosRenaper(this.dni).subscribe( data => {
      if(data != ""){
        JSON.parse(JSON.stringify(data)).forEach(element => {
          this.nombre = element.nombres;
          this.apellido = element.apellido;
        });
      }
      else{
        console.log("El DNI ingresado no es válido");
      }
    }, error => {
      console.log("El servidor no esta funcionando. Error " + error.status);
    
   });
  }

  
  EnviarDatos(){

    this.ingreso = new Ingreso(this.dni, this.nombre, this.apellido, this.tarjetaIngreso, this.fechaIngreso, this.horaIngreso, this.idEmpleado);

    this.http.altaIngreso(this.ingreso).subscribe( data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
