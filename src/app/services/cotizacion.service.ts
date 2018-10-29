import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/get_cotizacion_dolar';

  getCotizacion(): Observable<any> {
    console.log('cotización');

    return this.http.get(this.url);
  }
}
