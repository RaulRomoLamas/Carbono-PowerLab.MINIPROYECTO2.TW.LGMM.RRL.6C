import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MensajeContacto, Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'https://powerlab-backend-ouwf-3lbmvzzzv-raulromolamas-projects.vercel.app/api';

  constructor(private readonly http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
  }

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/productos/${id}`);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}/productos`, producto);
  }

  enviarMensaje(payload: MensajeContacto): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.baseUrl}/mensajes`, payload);
  }
}
