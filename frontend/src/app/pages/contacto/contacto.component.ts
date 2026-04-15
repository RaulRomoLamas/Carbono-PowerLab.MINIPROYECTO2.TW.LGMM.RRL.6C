import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre = '';
  mensaje = '';

  enviar(): void {
    this.mensaje = `Gracias por contactarnos, ${this.nombre}`;
  }
}
