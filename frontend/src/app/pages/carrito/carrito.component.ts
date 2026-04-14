import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoService, ItemCarrito } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  items: ItemCarrito[] = [];

  constructor(private readonly carritoService: CarritoService) {
    this.carritoService.items$.subscribe((data) => {
      this.items = data;
    });
  }

  eliminar(id?: number): void {
    if (!id) {
      return;
    }
    this.carritoService.eliminarProducto(id);
  }

  total(): number {
    return this.carritoService.total();
  }
}
