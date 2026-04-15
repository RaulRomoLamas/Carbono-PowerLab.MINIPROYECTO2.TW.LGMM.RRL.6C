import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private readonly url = 'http://localhost:3000/api/mensajes';

  constructor(private readonly http: HttpClient) {}

  enviarMensaje(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
