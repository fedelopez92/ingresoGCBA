import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  datos: object
  mensaje: string
  show1: boolean;
  show2: boolean;

  @Input() set nombreApellido(value){ //va a ser un set del valor que traigo de persona de componente form
    if(value){ 
      this.mensaje = "Visitas de " + value;
      this.show1 = true;
    }
  }

  @Input() set dni(value){ 
    if(value){ 
      this.http.traerHistorial(value).subscribe( data => {
        this.datos = data;
        this.show2 = true;
      }, error => {
          alert("No se puede acceder al servidor. Código de error: " + error.status);
     });
    }
  }

  constructor(private http: HttpService) { }



  ngOnInit() {
  }

}
