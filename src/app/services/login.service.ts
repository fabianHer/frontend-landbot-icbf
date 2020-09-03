import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  login(usuario: any) {
    delete usuario.captcha;
    const headers = new HttpHeaders({
      'apiKeyToken': environment.apiKeyToken
    });
    console.log(usuario);
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/sign-in`, usuario, {headers})
    .pipe(map(respuesta => respuesta ));
  }

  createUser(usuario: UsuarioModel) {
    const headers = new HttpHeaders({
      'apiKeyToken': environment.apiKeyToken
    });
    const data = {
    email: usuario.email,
    name: usuario.nombre,
    password: usuario.password,
    isActive: 1,
    isAdmin: 1,
    idClienteLandbot: 1
    };
    console.log(data);

    return this.httpClient.post<any>(`${environment.apiUrl}/auth/sign-up`, data, {headers})
    .pipe(map(respuesta => respuesta ));
  }
}
