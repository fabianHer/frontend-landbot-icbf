import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  userToken: string;
  constructor(private httpClient: HttpClient) { }

  consultarReporte() {
    console.log('Hola');
    const headers = new HttpHeaders({
      'authorization': localStorage.getItem('token'),
      'apiKeyToken': environment.publicApiKeyTokenIcbf
    });
    const data = {
      cliente: 'icbf',
      fechaIni: '2020-08-31 00:00:00',
      fechaFin: '2020-09-20 23:59:59'
};
    return this.httpClient.post<any>(`${environment.apiUrl}/repLandbot/consultarLandbot`, data, {headers})
    .pipe(map(respuesta => respuesta ));
  }
  registrosUsuario(user: any, fecha1, fecha2) {
    const headers = new HttpHeaders({
      'authorization': localStorage.getItem('token'),
      'apiKeyToken': environment.publicApiKeyTokenIcbf
    });
    const data = {
      cliente: 'icbf',
      fechaIni: '2020-08-31 00:00:00',
      fechaFin: '2020-09-20 23:59:59',
      correo: user
  };
    console.log(data);
    return this.httpClient.post<any>(`${environment.apiUrl}/repLandbot/consultarDetalleLandbot`, data, {headers})
    .pipe(map(respuesta => respuesta ));

  }
}
