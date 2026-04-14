import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Producto } from '../models/producto.model';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private readonly itemsSubject = new BehaviorSubject<ItemCarrito[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  agregarProducto(producto: Producto): void {
    const current = [...this.itemsSubject.value];
    const index = current.findIndex((item) => item.producto.id === producto.id);

    if (index >= 0) {
      current[index] = {
        ...current[index],
        cantidad: current[index].cantidad + 1
      };
    } else {
      current.push({ producto, cantidad: 1 });
    }

    this.itemsSubject.next(current);
  }

  eliminarProducto(productoId: number): void {
    const filtered = this.itemsSubject.value.filter((item) => item.producto.id !== productoId);
    this.itemsSubject.next(filtered);
  }

  total(): number {
    return this.itemsSubject.value.reduce(
      (acc, item) => acc + item.cantidad * Number(item.producto.precio),
      0
    );
  }
}
