import { Component } from '@angular/core';
import { CotizacionService } from './services/cotizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private cotizacionService: CotizacionService
  ) {}

  title = 'frontend-prueba';

  private jsonCotizacion;

  solicitarCotizacion() {
    this.cotizacionService.getCotizacion().subscribe(data => {
      this.jsonCotizacion = data;
    });
  }
}
