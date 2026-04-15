import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
