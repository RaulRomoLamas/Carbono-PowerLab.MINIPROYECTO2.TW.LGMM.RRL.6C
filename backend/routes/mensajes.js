const express = require('express');
const pool = require('../db');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { nombre, correo, asunto, mensaje } = req.body;

    const query = `
      INSERT INTO mensajes
      (nombre, correo, asunto, mensaje)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await pool.query(query, [nombre, correo, asunto, mensaje]);

    res.status(201).json({
      id: result.insertId,
      nombre,
      correo,
      asunto,
      mensaje
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
