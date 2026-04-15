import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: false,
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  mensaje = '';
  private readonly fb = inject(FormBuilder);
  private readonly productosService = inject(ProductosService);

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    categoria: ['Suplementos'],
    marca: ['Generica'],
    precio: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    imagen: ['img/default.jpg'],
    descripcion: ['Producto fitness'],
    disponible: [true]
  });

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.productosService.crearProducto(this.form.getRawValue()).subscribe(() => {
      this.mensaje = 'Producto creado correctamente';
      this.form.reset({
        nombre: '',
        categoria: 'Suplementos',
        marca: 'Generica',
        precio: 0,
        stock: 0,
        imagen: 'img/default.jpg',
        descripcion: 'Producto fitness',
        disponible: true
      });
    });
  }
}
