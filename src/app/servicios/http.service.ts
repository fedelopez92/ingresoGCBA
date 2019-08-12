import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  traerDatosRenaper(dni){
    return this.httpClient.get('http://localhost/servidorGCBA/renaper/' + dni);
  }

 traerHistorial(dni){
   return this.httpClient.get('http://localhost/servidorGCBA/historial/' + dni);
 }
 altaIngreso(ingreso){
   return this.httpClient.post('http://localhost/servidorGCBA/ingresos', {ingreso: ingreso});
 }
}
