const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productosRoutes = require('./routes/productos');
const mensajesRoutes = require('./routes/mensajes');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'CARBONO POWERLAB API' });
});

app.use('/api/productos', productosRoutes);
app.use('/api/mensajes', mensajesRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend activo en http://localhost:${PORT}`);
});
