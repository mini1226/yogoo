import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse( (localStorage.getItem('token') as string) || (sessionStorage.getItem('token')as string));

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      return next.handle(cloned);
    } else {
    return next.handle(req);
    }
  }
}
