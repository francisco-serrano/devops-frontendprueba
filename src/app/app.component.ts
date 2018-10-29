import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  title = 'frontend-prueba';

  private url = 'http://localhost:8080/get_cotizacion_dolar';
  private jsonCotizacion;

  solicitarCotizacion() {
    console.log('cotización');

    this.http.get(this.url).subscribe(res => {
      console.log('Recibió cotización');
      console.log(res);

      this.jsonCotizacion = res;
    });
  }
}
