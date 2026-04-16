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
  readonly categorias = ['Suplementos', 'Accesorios', 'Vitaminas', 'Pre-entreno', 'Aminoacidos'];
  readonly marcas = ['Generica', 'Optimum Nutrition', 'Universal', 'Cellucor', 'MyProtein', 'GNC'];

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    categoria: ['Suplementos'],
    marca: ['Generica'],
    precio: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    imagen: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
      [Validators.required, Validators.pattern(/^https?:\/\/.+/i)]
    ],
    descripcion: ['', [Validators.required, Validators.minLength(12)]],
    disponible: [true]
  });

  get imagenPreview(): string {
    return this.form.controls.imagen.value;
  }

  hasError(control: 'nombre' | 'precio' | 'stock' | 'imagen' | 'descripcion'): boolean {
    const c = this.form.controls[control];
    return !!(c.invalid && (c.dirty || c.touched));
  }

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
        imagen: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
        descripcion: '',
        disponible: true
      });
    });
  }
}
