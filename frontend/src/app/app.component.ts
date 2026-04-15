import { Component } from '@angular/core';

import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public carritoService: CarritoService) {}
}
