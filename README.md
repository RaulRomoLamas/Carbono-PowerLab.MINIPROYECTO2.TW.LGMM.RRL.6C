# CARBONO POWERLAB

Estructura base de tienda online SPA con Angular + Node.js + Express + MySQL.

## Estructura

```text
/carbono-powerlab
  /frontend   -> SPA Angular
  /backend    -> API REST con Express y MySQL
```

## Backend (Express + MySQL)

Ruta: `backend`

### Endpoints creados

- `GET /api/productos` -> listar productos
- `GET /api/productos/:id` -> detalle por id
- `POST /api/productos` -> crear producto
- `POST /api/mensajes` -> guardar mensaje de contacto

### Archivos clave

- `server.js`
- `db.js`
- `routes/productos.js`
- `routes/mensajes.js`
- `sql/schema.sql`

### Configuracion

1. Crear base de datos/tablas ejecutando `backend/sql/schema.sql` en MySQL.
2. Revisar variables en `backend/.env`.
3. Instalar dependencias y arrancar:

```bash
cd backend
npm install
npm run dev
```

## Frontend (Angular SPA)

Ruta: `frontend`

### Secciones implementadas

- Inicio
- Catalogo de productos
- Detalle dinamico (`/productos/:id`)
- Formulario para agregar productos
- Carrito de compras (frontend)
- Formulario de contacto

### Arranque

```bash
cd frontend
npm install
npm start
```

La API base consumida por frontend es: `http://localhost:3000/api`

## Base de datos

Nombre: `carbono_powerlab_db`

Tablas creadas en schema:

- `productos`
- `mensajes`

## Estado

- Backend estructurado y levantando en `http://localhost:3000`
- Frontend Angular compilando correctamente (`npm run build`)
- Listo para consumir API y continuar con siguientes iteraciones
