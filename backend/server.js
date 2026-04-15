const express = require('express');
const cors = require('cors');

const productosRoutes = require('./routes/productos');
const mensajesRoutes = require('./routes/mensajes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use('/api/mensajes', mensajesRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend activo en http://localhost:${PORT}`);
});
