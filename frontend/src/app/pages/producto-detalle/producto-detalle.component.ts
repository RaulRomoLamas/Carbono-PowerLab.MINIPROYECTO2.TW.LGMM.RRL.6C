import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../models/producto.model';
import { ApiService } from '../../services/api.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      return;
    }

    this.apiService.getProductoById(id).subscribe({
      next: (data) => {
        this.producto = data;
      }
    });
  }

  agregar(): void {
    if (this.producto) {
      this.carritoService.agregarProducto(this.producto);
    }
  }
}
