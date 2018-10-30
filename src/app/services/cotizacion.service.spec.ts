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

  it('chequea formato cotización', (done) => {
    const service: CotizacionService = TestBed.get(CotizacionService);

    service.getCotizacion().subscribe(cotizacion => {
      expect(cotizacion.d).toMatch('([0-9]+-[0-9]+-[0-9]+)', 'falla la fecha');
      expect(cotizacion.v).toMatch('[0-9.]+');

      done();
    });
  });

});
