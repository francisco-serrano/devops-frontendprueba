import { TestBed } from '@angular/core/testing';

import { CotizacionService } from './cotizacion.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';

describe('CotizacionService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let cotizacionService: CotizacionService;

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

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cotizacionService = new CotizacionService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const service: CotizacionService = TestBed.get(CotizacionService);
    expect(service).toBeTruthy();
  });

  it('chequear cotización', () => {
    let expectedCotizacion: {
      'd': '2018-10-24',
      'v': 36.5417,
      'mensaje': 'Valor elevado'
    };

    spyOn(cotizacionService, 'getCotizacion').and.returnValue(expectedCotizacion);
    /* httpClientSpy.get.and.returnValue(expectedCotizacion);

    cotizacionService.getCotizacion().subscribe(
      cotizacion => expect(cotizacion).toEqual(expectedCotizacion, 'expected cotización'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call'); */
  });
});
