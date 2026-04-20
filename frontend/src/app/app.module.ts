import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    DetalleProductoComponent,
    AgregarProductoComponent,
    CarritoComponent,
    ContactoComponent,
    ProductoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
