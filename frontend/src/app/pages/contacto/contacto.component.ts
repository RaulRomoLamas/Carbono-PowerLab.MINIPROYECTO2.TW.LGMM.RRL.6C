import { Component } from '@angular/core';

import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  mensajeConfirmacion = '';

  constructor(private readonly contactoService: ContactoService) {}

  enviar(): void {
    this.contactoService.enviarMensaje(this.contacto).subscribe(() => {
      this.mensajeConfirmacion = 'Mensaje enviado correctamente';
      this.contacto = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      };
    });
  }
}
