import { TestBed } from '@angular/core/testing';

import { CotizacionService } from './cotizacion.service';
import { HttpClientModule } from '@angular/common/http';

describe('CotizacionService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
      providers: [
        CotizacionService
      ]
    });

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('should be created', () => {
    const service: CotizacionService = TestBed.get(CotizacionService);

    expect(service).toBeTruthy();
  });

  it('chequea cotización', (done) => {
    const expectedCotizacion = {
      'd': '2018-10-24',
      'v': 36.5416,
      'mensaje': 'Valor elevado'
    };

    const service: CotizacionService = TestBed.get(CotizacionService);

    service.getCotizacion().subscribe(
      cotizacion => {
        console.log(cotizacion);
        console.log(expectedCotizacion);

        // No tira porque se hace comparador de igualdad, usar un matcher
        expect(cotizacion).toEqual(expectedCotizacion, 'expected cotizacion');
        
        done();
      }
    );
  });

});
