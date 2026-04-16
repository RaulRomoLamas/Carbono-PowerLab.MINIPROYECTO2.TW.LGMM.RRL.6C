import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto?: Producto;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productosService: ProductosService,
    private readonly carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.productosService.getProductoById(id).subscribe((data) => {
        this.producto = data;
      });
    });
  }

  agregarAlCarrito(): void {
    if (!this.producto) {
      return;
    }
    this.carritoService.agregarProducto(this.producto);
  }
}
