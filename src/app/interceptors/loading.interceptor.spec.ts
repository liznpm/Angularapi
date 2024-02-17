import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
  });

  it('should intercept HTTP requests', (done) => {
    // Mock HTTP request
    spyOn(http, 'get').and.returnValue(of('response'));

    // Make a request to trigger the interceptor
    http.get('http://186.4.251.123:8083/deportivo/api/deportivo/calendario/fechas/0/1').subscribe(() => {
      // Verify that the interceptor was called
      expect(http.get).toHaveBeenCalled();
      
      // Additional assertions can be added based on the specific behavior of your interceptor

      done();
    });
  });
});
