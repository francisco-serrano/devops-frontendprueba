import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CotizacionService } from './services/cotizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: HttpClient,
    private cotizacionService: CotizacionService
  ) {}

  title = 'frontend-prueba';

  private jsonCotizacion;

  solicitarCotizacion() {
    this.jsonCotizacion = this.cotizacionService.getCotizacion();
  }
}
