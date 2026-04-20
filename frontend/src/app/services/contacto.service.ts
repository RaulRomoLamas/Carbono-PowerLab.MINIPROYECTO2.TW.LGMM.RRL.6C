import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private readonly url = `${environment.apiBaseUrl}/mensajes`;

  constructor(private readonly http: HttpClient) {}

  enviarMensaje(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
