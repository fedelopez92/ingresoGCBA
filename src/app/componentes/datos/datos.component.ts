import { Component, OnInit } from '@angular/core';

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
  FechaIngreso: Date;
  HoraIngreso: Date;
  visita: string;
  sector: string

  constructor() { }

  ngOnInit() {
  }

}
