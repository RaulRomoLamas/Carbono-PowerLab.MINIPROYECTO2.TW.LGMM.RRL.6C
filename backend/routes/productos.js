const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.json(rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {
      nombre,
      categoria,
      marca,
      precio,
      stock,
      imagen,
      descripcion,
      disponible
    } = req.body;

    const query = `
      INSERT INTO productos
      (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      nombre,
      categoria,
      marca,
      precio,
      stock,
      imagen,
      descripcion,
      disponible ?? true
    ];

    const [result] = await pool.query(query, values);

    res.status(201).json({
      id: result.insertId,
      nombre,
      categoria,
      marca,
      precio,
      stock,
      imagen,
      descripcion,
      disponible: disponible ?? true
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
