import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { Ingreso } from '../../clases/ingreso';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  dni: number;
  nombre: string;
  apellido: string;
  tarjetaIngreso: number;
  fechaIngreso: string;
  horaIngreso: string;
  nombreEmpleado: string;
  ingreso: Ingreso;
  fechaHora = new Date();
  empleados: object;
  sectores: object;
  datosEmpleado: object;
  datosSector: object;

  constructor(private http: HttpService) { }

  ngOnInit() {

    setInterval(() => {
      this.fechaHora = new Date();

      this.fechaIngreso = this.fechaHora.getDate().toString() + "/" + (this.fechaHora.getMonth()+1).toString() + "/" + this.fechaHora.getUTCFullYear().toString();
      this.horaIngreso =  this.fechaHora.toLocaleString('es-AR', { hour: 'numeric',minute:'numeric', hour12: true }); 
    }, 1000);
    
    this.http.traerEmpleados().subscribe( data => {

      this.sectores = data;
    }, error => {
        alert("No se puede acceder al servidor. Código de error: " + error.status);
   });

  }

  ConsultarRenaper(){
    
    if(this.dni.toString().length == 8){
    
    this.http.traerDatosRenaper(this.dni.toString()).subscribe( data => {
      if(data != ""){
        JSON.parse(JSON.stringify(data)).forEach(element => {
          this.nombre = element.nombres;
          this.apellido = element.apellido;
        });
      }
      else{
        alert("El DNI ingresado no corresponde a ninguna persona");
      }
    }, error => {
      alert("El servicio RENAPER no esta funcionando. Código de error: " + error.status);
   });
  }
   else
   {
      alert("Ingrese un dni válido");
   }
  }
  
  EnviarDatos(){

    if(this.tarjetaIngreso.toString().length != 8){
      alert("Ingrese un código de tarjeta que contenga 8 dígitos");
    }
    else if(this.datosEmpleado == null || this.datosSector == null) {
      alert("Seleccione el sector y la persona a quien desea visitar");
    }
    else{
    
      this.nombreEmpleado = JSON.parse(JSON.stringify(this.datosEmpleado)).nombre + " " + JSON.parse(JSON.stringify(this.datosEmpleado)).apellido;
      this.ingreso = new Ingreso(this.fechaIngreso, this.horaIngreso, this.tarjetaIngreso, this.dni.toString(), this.nombreEmpleado);

      this.http.altaIngreso(this.ingreso).subscribe( data => {
        console.log(data);
      }, error => {
        alert("No se puede acceder al servidor. Código de error: " + error.status);
      });
    }
  }

  MostrarNombreEmpleados(sector){
    this.http.traerEmpleadosPorSector(sector).subscribe( data => {

      this.datosSector = sector;
      this.empleados = data;
    }, error => {
      alert("No se puede acceder al servidor. Código de error: " + error.status);
   });
  }

  

}
