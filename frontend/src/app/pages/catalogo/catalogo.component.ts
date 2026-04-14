import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Producto } from '../../models/producto.model';
import { ApiService } from '../../services/api.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  cargando = false;

  constructor(
    private readonly apiService: ApiService,
    private readonly carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargando = true;
    this.apiService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }
}
