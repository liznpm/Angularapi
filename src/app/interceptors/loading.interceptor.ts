import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: number = 0;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests++;

    // Muestra el indicador de carga (puedes implementar tu lógica aquí)

    return next.handle(req).pipe(
      finalize(() => {
        this.requests--;
        if (this.requests === 0) {
          // Oculta el indicador de carga cuando no hay más solicitudes pendientes
          // (puedes implementar tu lógica aquí)
        }
      })
    );
  }
}
