import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/*@Injectable({
  providedIn: 'root'
})*/
// export class InterceptorTokenService implements HttpInterceptor {

 // constructor() { }

  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'apiKeyToken': environment.apiKeyToken
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle( reqClone );
}*/

// }
