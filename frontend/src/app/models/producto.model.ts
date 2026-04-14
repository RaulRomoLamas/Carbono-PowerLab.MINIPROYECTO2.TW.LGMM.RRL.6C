export interface Producto {
  id?: number;
  nombre: string;
  categoria: string;
  marca: string;
  precio: number;
  stock: number;
  imagen: string;
  descripcion: string;
  disponible: boolean;
}

export interface MensajeContacto {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}
