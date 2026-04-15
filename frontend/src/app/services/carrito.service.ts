import { Injectable, signal } from '@angular/core';

import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private readonly itemsInternos = signal<Producto[]>([]);
  contadorCarrito = signal(0);

  items() {
    return this.itemsInternos();
  }

  agregar(producto: Producto): void {
    this.itemsInternos.update((prev) => [...prev, producto]);
    this.contadorCarrito.update((total) => total + 1);
  }
}
