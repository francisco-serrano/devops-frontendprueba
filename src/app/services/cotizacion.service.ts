import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/get_cotizacion_dolar';

  getCotizacion() {
    console.log('cotización');

    this.http.get(this.url).subscribe(res => {
      console.log('Recibió cotización');
      console.log(res);

      return res;
    });
  }
}
