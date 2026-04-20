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
  cargando = false;
  busqueda = '';

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

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);
  }

  get productosFiltrados(): Producto[] {
    const filtro = this.busqueda.trim().toLowerCase();
    if (!filtro) {
      return this.productos;
    }

    return this.productos.filter((producto) =>
      String(producto.nombre).toLowerCase().includes(filtro) ||
      String(producto.categoria).toLowerCase().includes(filtro) ||
      String(producto.marca).toLowerCase().includes(filtro)
    );
  }
}
