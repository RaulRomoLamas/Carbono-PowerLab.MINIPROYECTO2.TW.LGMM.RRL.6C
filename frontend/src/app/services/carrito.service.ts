import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  carrito = signal<any[]>([]);
  total = signal<number>(0);
  contador = signal<number>(0);

  agregarProducto(producto: any): void {
    const carritoActual = [...this.carrito()];
    const index = carritoActual.findIndex((item) => item.id === producto.id);

    if (index >= 0) {
      carritoActual[index] = {
        ...carritoActual[index],
        cantidad: carritoActual[index].cantidad + 1
      };
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    this.carrito.set(carritoActual);
    this.contador.set(carritoActual.reduce((acc, item) => acc + item.cantidad, 0));
    this.calcularTotal();
  }

  eliminarProducto(id: number): void {
    const carritoActual = this.carrito().filter((item) => item.id !== id);
    this.carrito.set(carritoActual);
    this.contador.set(carritoActual.reduce((acc, item) => acc + item.cantidad, 0));
    this.calcularTotal();
  }

  getCarrito(): any[] {
    return this.carrito();
  }

  calcularTotal(): void {
    const totalCalculado = this.carrito().reduce(
      (acc, item) => acc + Number(item.precio) * item.cantidad,
      0
    );
    this.total.set(totalCalculado);
  }
}
