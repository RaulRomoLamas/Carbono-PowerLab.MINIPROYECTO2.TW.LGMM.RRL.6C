import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  mensaje = '';
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    categoria: ['', Validators.required],
    marca: ['', Validators.required],
    precio: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    imagen: [''],
    descripcion: [''],
    disponible: [true]
  });

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue();

    this.apiService.crearProducto(payload).subscribe({
      next: () => {
        this.mensaje = 'Producto registrado correctamente';
        this.form.reset({
          nombre: '',
          categoria: '',
          marca: '',
          precio: 0,
          stock: 0,
          imagen: '',
          descripcion: '',
          disponible: true
        });
      }
    });
  }
}
