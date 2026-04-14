import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  mensaje = '';
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue();

    this.apiService.enviarMensaje(payload).subscribe({
      next: () => {
        this.mensaje = 'Mensaje enviado correctamente';
        this.form.reset({
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: ''
        });
      }
    });
  }
}
