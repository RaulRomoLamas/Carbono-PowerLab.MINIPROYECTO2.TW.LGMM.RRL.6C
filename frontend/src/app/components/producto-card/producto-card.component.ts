import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  standalone: false,
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  @Input() producto: any;
  @Output() agregar = new EventEmitter<any>();
}
