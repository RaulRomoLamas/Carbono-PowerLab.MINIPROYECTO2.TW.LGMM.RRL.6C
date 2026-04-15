import { Component } from '@angular/core';

import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor(public carritoService: CarritoService) {}
}
