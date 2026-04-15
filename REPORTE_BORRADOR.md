# CARBONO POWERLAB - REPORTE (BORRADOR IEEE 1 COLUMNA)

## Portada
- Materia: Tecnologias Web
- Proyecto: CARBONO POWERLAB
- Tipo: Mini proyecto web comercial
- Integrantes: [Completar]
- Fecha: [Completar]

## Introduccion
CARBONO POWERLAB es una aplicacion web comercial para catalogo y venta de suplementos y accesorios fitness. El sistema integra Angular en frontend, Node.js con Express en backend y MySQL como almacenamiento.

## Objetivo
Construir una SPA que consuma su propia API para mostrar catalogo, detalle de producto, alta de productos, carrito de compras y contacto.

## Descripcion del sistema
El sistema se divide en dos capas:
- Frontend Angular: navegacion por rutas, formularios, consumo de API y estado del carrito con signals.
- Backend Express: endpoints REST para productos y mensajes con validaciones.

## Tecnologias utilizadas
- Angular
- Node.js
- Express
- MySQL
- CORS
- Git y GitHub

## Logica general
- Catalogo: consulta de productos por API.
- Detalle: ruta dinamica por id.
- Alta: formulario reactivo para registrar productos.
- Carrito: estado local con signal para lista, contador y total.
- Contacto: formulario template que guarda mensajes y muestra confirmacion.

## Evidencias (capturas sugeridas)
1. Vista inicio y menu de rutas.
2. Catalogo mostrando nombre, categoria, marca, precio, stock, disponibilidad e imagen.
3. Detalle de producto por ruta dinamica.
4. Formulario de alta de producto.
5. Carrito con cantidad, subtotal, total y boton eliminar.
6. Contacto con mensaje de confirmacion.

## Problemas encontrados y solucion
- Conflicto entre modo standalone y module en Angular.
Solucion: estandarizacion a AppModule + AppRoutingModule.
- Errores de permisos EPERM en compilacion local.
Solucion: ejecucion con permisos elevados para comandos de build.

## Resultados obtenidos
Se logro un sistema funcional de catalogo comercial con integracion completa frontend-backend y persistencia en MySQL para productos y mensajes.

## Conclusiones
La arquitectura SPA + API propia facilita separar responsabilidades y mantener escalabilidad basica para crecimiento futuro.

## Referencias
- Documentacion Angular
- Documentacion Express
- Documentacion MySQL

## Links de entrega
- Repositorio: https://github.com/RaulRomoLamas/Carbono-PowerLab.MINIPROYECTO2.TW.LGMM.RRL.6C
- Deploy frontend: PENDIENTE
- Deploy backend: PENDIENTE
