import { Component, OnInit } from '@angular/core';

import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  filtro = '';
  cargando = false;

  constructor(
    private readonly productosService: ProductosService,
    private readonly carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargando = true;
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  get productosFiltrados(): Producto[] {
    const q = this.filtro.trim().toLowerCase();
    if (!q) {
      return this.productos;
    }
    return this.productos.filter((p) => p.nombre.toLowerCase().includes(q));
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
  }
}
